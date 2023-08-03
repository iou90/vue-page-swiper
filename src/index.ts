import { App } from "vue"
import { RouterOptions } from "vue-router"

import { buildRouter, routerKey } from "./router"
import { pageSwiperPlugin } from "./install"

export const VuePageSwiper: (app: App<Element>, options: RouterOptions) => void = (app, options) => {
  const router = buildRouter(options)
  app.provide(routerKey, router)
  app.use(pageSwiperPlugin)

  return app
}

export { pageSwiper } from "./pageSwiper"
