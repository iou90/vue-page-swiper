import PageSwiper from "./PageSwiper.vue"

export const pageSwiperPlugin = {
  install: (app) => {
    app.component("PageSwiper", PageSwiper)
  }
}
