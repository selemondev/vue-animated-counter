<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useIntersect } from "@/composable/onObserverIntersect";
export interface Props {
  value: number,
  duration: number
}
const props = withDefaults(defineProps<Props>(), {
  value: 0,
  duration: 1000
});
const displayValue = ref<number>(0);
const wrapper = ref<any>({});
const observer = ref<IntersectionObserver>();
const startAnimation = () => {
  const startValue = 0;
  const endValue = ref<number>(props.value);
  const rangeValue = endValue.value - startValue;
  let currentValue = startValue;
  const increment = endValue.value > startValue ? 1 : -1;
  const stepTime = Math.abs(Math.floor(props.duration / rangeValue));
  const timer = setInterval(() => {
    currentValue += increment;
    displayValue.value = currentValue;
    if (currentValue === endValue.value) {
      clearInterval(timer);
    }
  }, stepTime);
};

const onEnter = () => {
  startAnimation()
}

onMounted(() => {
  //@ts-ignore
  observer.value = useIntersect(wrapper.value, onEnter, false, {
    threshold: 0.8,
  });
});

onUnmounted(() => {
  observer.value!.disconnect();
});
</script>

<template>
  <div ref="wrapper">
    {{ displayValue }}
  </div>
</template>
