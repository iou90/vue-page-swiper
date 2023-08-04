import { createApp } from "vue"
import { createWebHashHistory } from "vue-router"

import "./style.css"
import { VuePageSwiper } from "../src"
import App from "./App.vue"
import { routes } from "./routes"

const app = createApp(App)

VuePageSwiper(app, { routes, history: createWebHashHistory() }).mount("#app")
