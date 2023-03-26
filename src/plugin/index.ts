import type { App } from "vue";
import AnimatedCounter from "../components/AnimatedCounter.vue";
export default {
    install(app: App, options: any) {
            app.component("AnimatedCounter", AnimatedCounter)
    }
}