<script setup lang="ts">
import { onMounted, ref, watch, withDefaults } from "vue";
import { useIntersectionObserver } from "@/composables/intersectionObserver";
export interface Props {
  value: number,
  duration: number
}
const props = withDefaults(defineProps<Props>(), {
  value: 0,
  duration: 1000
});
const { observedElement, observer, isIntersecting } = useIntersectionObserver();
const displayValue = ref<number>(0);
const startAnimation = () => {
  const startValue = 0;
  const endValue = props.value;
  const rangeValue = endValue - startValue;
  let currentValue = startValue;
  const increment = endValue > startValue ? 1 : -1;
  const stepTime = Math.abs(Math.floor(props.duration / rangeValue));
  const timer = setInterval(() => {
    currentValue += increment;
    displayValue.value = currentValue;
    if (currentValue === endValue) {
      clearInterval(timer);
    }
  }, stepTime);

  return () => clearInterval(timer);
};
onMounted(() => {
  observedElement.value !== null && observer.observe(observedElement.value)
});

watch(() => isIntersecting.value, (newValue) => {
  if (newValue) {
    startAnimation();
  }
});
</script>

<template>
  <div ref="observedElement">
    {{ displayValue }}
  </div>
</template>
