import { RouteRecordRaw, Router, RouterOptions, createRouter } from "vue-router"

import { Direction, direction, setDirection } from "./direction"

const parseRoutes: (routes: Readonly<RouteRecordRaw[]>, isChild?: boolean) => Readonly<RouteRecordRaw[]> = (
  routes,
  isChild = false
) =>
  routes.map((item) => {
    const { meta, children, ...options } = item

    return {
      meta: Object.assign({}, meta, { isChild }),
      ...(children && parseRoutes(children, true)),
      ...options
    } as RouteRecordRaw
  })

export const buildRouter: (options: RouterOptions) => Router = ({ routes, history, ...options }) => {
  history.listen((_1, _2, information) => {
    if (information.direction === "back") {
      setDirection(Direction.Back)
    }
  })

  const router = createRouter({
    ...options,
    history,
    routes: parseRoutes(routes)
  })

  router.beforeEach(() => {
    if (window.event?.type == "popstate" && direction.value !== Direction.Back) {
      setDirection(Direction.Forward)
    }
  })
  router.afterEach(() => {
    setDirection(Direction.Unknown)
  })

  return router
}

export const routerKey = "pageSwiperRouter"
