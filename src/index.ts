import { App } from "vue"
import { RouterOptions } from "vue-router"

import { buildRouter } from "./router"
import { pageSwiperPlugin } from "./install"
import { usePageSwiper } from "./pageSwiper"

const VuePageSwiper: (app: App<Element>, options: RouterOptions) => App<Element> = (app, options) => {
  app.use(pageSwiperPlugin)
  const router = buildRouter(options)
  app.use(router)

  return app
}

export { VuePageSwiper, usePageSwiper }
