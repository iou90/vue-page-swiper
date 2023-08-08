import { App } from "vue"

import PageSwiper from "./PageSwiper.vue"

export const pageSwiperPlugin = {
  install: (app: App<Element>) => {
    app.component("PageSwiper", PageSwiper)
  }
}
