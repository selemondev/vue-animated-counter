<script setup lang="ts">
import { ref } from "vue";
import { vIntersectionObserver } from "@vueuse/components";
export interface Props {
  value: number,
  duration: number
}
const props = withDefaults(defineProps<Props>(), {
  value: 0,
  duration: 1000
});
const displayValue = ref<number>(0);
const root = ref();
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


let stopAnimation: Function;
const isVisible = ref(false)
function onIntersectionObserver(entries: IntersectionObserverEntry[]) {
  const [{ isIntersecting }] = entries;
  if (isIntersecting) {
    if (stopAnimation) {
      stopAnimation();
    }
    stopAnimation = startAnimation();
  } else {
    if (stopAnimation) {
      stopAnimation();
    }
  }
  isVisible.value = isIntersecting;
}
</script>

<template>
  <div v-intersection-observer="[onIntersectionObserver, { root }]">
    {{ displayValue }}
  </div>
</template>
