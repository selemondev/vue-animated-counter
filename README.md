# Vue Animated Counter

- Vue Animated Counter is a performant and versatile Vue component that adds an animated counting feature to your Vue projects. This component is designed to provide a seamless and engaging user experience, allowing you to easily showcase important metrics or data points in an elegant and visually appealing way.

## Features ✨

- `Animated counting`: The Vue Animated Counter animates the counting process, providing a smooth and engaging visual effect for your users.

- `Customizable duration` : You can set the duration of the animation to suit your needs and preferences. This feature allows you to adjust the animation speed to match the tone and pace of your project.

- `Automatic Viewport detection`: The animation starts when the component is in the viewport, creating a more interactive and user-driven experience.

- `Flexible and easy to use` : With just two required props, the Vue Animated Counter is easy to integrate into your Vue projects, making it a versatile and valuable addition to your toolkit.

## Usage

```bash
npm install vue-animated-counter
```

After installation, register the component globally as shown below 

```ts
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import AnimatedCounter from "vue-animated-counter"
const app = createApp(App)
app.use(AnimatedCounter)
app.mount('#app')
```

and use it as follows:

```js
<template>
  <div>
    <AnimatedCounter :value="500" :duration="1000" class="counter"/>
  </div>
</template>
<style>
.counter {
  font-size: 40px;
}
</style>
```

## Props 

- `value`: The value prop is used to specify the final value that the counter should animate towards. This can be any numerical value, and the counter will count up from 0 to this value over the specified duration.

- `duration`: The duration prop is used to set the length of time in milliseconds that the counter animation should take. This allows you to adjust the speed of the animation to suit the pace and tone of your project.


## Conclusion

- Vue Animated Counter is a powerful and versatile tool for Vue developers who want to add an elegant and engaging animated counting feature to their projects. With its customizable duration and viewport detection, this component provides an effective and efficient way to showcase important metrics or data points in a visually appealing and interactive way.