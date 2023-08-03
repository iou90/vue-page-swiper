import { Ref, inject, ref } from "vue"
import { RouteLocationRaw } from "vue-router"

import { routerKey } from "./router"
import { Direction, setDirection } from "./direction"

export const onceTransitionName: Ref<string> = ref("")

export const resetOnceTransitionName = () => {
  onceTransitionName.value = ""
}

const getRouter = () => inject(routerKey, {} as any).value

const goto: (to: RouteLocationRaw, method: "push" | "replace", transitionName?: string) => void = (
  to,
  method,
  transitionName
) => {
  if (transitionName) {
    onceTransitionName.value = transitionName
  }

  getRouter()[method](to)
}

const push: (to: RouteLocationRaw, transitionName?: string) => void = (to, transitionName) => {
  setDirection(Direction.Forward)
  goto(to, "push", transitionName)
}

const replace: (to: RouteLocationRaw, transitionName: string) => void = (to, transitionName) =>
  goto(to, "replace", transitionName)

const back: () => void = () => {
  setDirection(Direction.Back)
  getRouter().back()
}

const forward: () => void = () => {
  setDirection(Direction.Forward)
  getRouter().forward()
}

export const pageSwiper = {
  push,
  replace,
  forward,
  back
}
