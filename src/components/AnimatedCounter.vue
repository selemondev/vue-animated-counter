<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useIntersectionObserver } from "../composables/intersectionObserver";

export interface Props {
    value: number;
    duration: number;
}

const props = withDefaults(defineProps<Props>(), {
    value: 0,
    duration: 1000,
});

const { observedElement, observer, isIntersecting } = useIntersectionObserver();
const displayValue = ref<number>(0);
let cleanupAnimation: (() => void) | null = null;

const startAnimation = () => {
    if (cleanupAnimation) {
        cleanupAnimation();
    }

    const startValue = 0;
    const endValue = props.value;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / props.duration, 1);

        const easedProgress = progress * (2 - progress);
        displayValue.value = Math.round(
            startValue + (endValue - startValue) * easedProgress,
        );

        if (progress < 1) {
            const animationId = requestAnimationFrame(animate);
            cleanupAnimation = () => cancelAnimationFrame(animationId);
        } else {
            cleanupAnimation = null;
        }
    };

    const animationId = requestAnimationFrame(animate);
    cleanupAnimation = () => cancelAnimationFrame(animationId);
};

onMounted(() => {
    if (observedElement.value) {
        observer.observe(observedElement.value);
    }
});

onUnmounted(() => {
    if (cleanupAnimation) {
        cleanupAnimation();
    }
    observer.disconnect();
});

watch(
    () => isIntersecting.value,
    (newValue) => {
        if (newValue) {
            startAnimation();
        }
    },
);
</script>

<template>
    <div ref="observedElement">
        {{ displayValue }}
    </div>
</template>
