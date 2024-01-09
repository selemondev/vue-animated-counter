<a href="https://pkg-size.dev/vue-animated-counter"><img src="https://pkg-size.dev/badge/bundle/850" title="Bundle size for vue-animated-counter"></a>

# Vue Animated Counter :zap:

- Vue Animated Counter is a performant, dependency free and versatile Vue component that adds an animated counting feature to your Vue applications. This component is designed to provide a seamless and engaging user experience, allowing you to easily showcase important metrics or data points in an elegant and visually appealing way.

## Features ✨

- `Animated counting`: The Vue Animated Counter animates the counting process, providing a smooth and engaging visual effect for your users.

- `Customizable duration` : You can set the duration of the animation to suit your needs and preferences. This feature allows you to adjust the animation speed to match the tone and pace of your project.

- `Automatic Viewport detection`: The animation starts when the component is in the viewport, creating a more interactive and user-driven experience.

- `Flexible and easy to use` : With just two required props, the Vue Animated Counter is easy to integrate into your Vue projects, making it a versatile and valuable addition to your toolkit.

## Usage with Vue 3

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
app.component("AnimatedCounter", AnimatedCounter);
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

## Usage with Nuxt 3

```bash
npm install vue-animated-counter
```

After installation, register the component as a Nuxt plugin. You can read more about Nuxt plugins [here](https://nuxt.com/docs/guide/directory-structure/plugins). Create a plugin file `plugins/animatedCounter.client.ts`. We are using the `.client` prefix to tell Nuxt that our plugin should only be used in the client side. Register the `AnimatedCounter` component as shown below :

```ts
// plugins/animatedCounter.client.ts
import AnimatedCounter from 'vue-animated-counter';
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('AnimatedCounter', AnimatedCounter)
})
```

then in your components directory create a `CounterComponent.vue` file ( You can name it whatever you want ) and wrap the `AnimatedCounter` component inside the `<ClientOnly/>` component as shown below :

```js
//components/CounterComponent.vue
<template>
    <div>
        <ClientOnly>
            <AnimatedCounter :value="500" :duration="1000" class="counter" />
        </ClientOnly>
    </div>
</template>
<style>
.counter {
  font-size: 40px;
}
</style>

```

we are using the `<ClientOnly/>` component to render our `AnimatedCounter` component only in the client side. You can read more about the `ClientOnly` component [here](https://nuxt.com/docs/api/components/client-only)

## Props 

- `value`: The value prop is used to specify the final value that the counter should animate towards. This can be any numerical value, and the counter will count up from 0 to this value over the specified duration.

- `duration`: The duration prop is used to set the length of time in milliseconds that the counter animation should take. This allows you to adjust the speed of the animation to suit the pace and tone of your project.


## Conclusion

- Vue Animated Counter is a powerful and versatile tool for Vue developers who want to add an elegant and engaging animated counting feature to their projects. With its customizable duration and viewport detection, this component provides an effective and efficient way to showcase important metrics or data points in a visually appealing and interactive way.
