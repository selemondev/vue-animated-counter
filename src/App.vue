<script lang="ts" setup>
import AnimatedCounter from './components/AnimatedCounter.vue';
</script>

<template>
    <div class="wrapper">
        <AnimatedCounter :value="500" :duration="200" class="counter" />
    </div>
</template>
<style>
.wrapper {
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
}

.counter {
    font-size: 40px;
    font-family: sans-serif;
}
</style>
