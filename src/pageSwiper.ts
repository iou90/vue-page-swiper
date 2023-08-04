import { Ref, ref } from "vue"
import { RouteLocationRaw, useRouter } from "vue-router"

import { TransitionMode } from "./transitionMode"
import { Direction, setDirection } from "./direction"

export const onceTransitionName: Ref<string> = ref("")

export const resetOnceTransitionName = () => {
  onceTransitionName.value = ""
}

export const onceTransitionMode: Ref<TransitionMode> = ref("default")

export const resetOnceTransitionMode = () => {
  onceTransitionMode.value = "default"
}

export const usePageSwiper = () => {
  const router = useRouter()

  const goto: (
    to: RouteLocationRaw,
    method: "push" | "replace",
    transitionName?: string,
    transitionMode?: TransitionMode
  ) => void = (to, method, transitionName, transitionMode) => {
    if (transitionName) {
      onceTransitionName.value = transitionName
    }

    if (transitionMode) {
      onceTransitionMode.value = transitionMode
    }

    router[method](to)
  }

  const push: (to: RouteLocationRaw, transitionName?: string, transitionMode?: TransitionMode) => void = (
    to,
    transitionName,
    transitionMode
  ) => {
    setDirection(Direction.Forward)
    goto(to, "push", transitionName, transitionMode)
  }

  const replace: (to: RouteLocationRaw, transitionName?: string, transitionMode?: TransitionMode) => void = (
    to,
    transitionName,
    transitionMode
  ) => goto(to, "replace", transitionName, transitionMode)

  const back: () => void = () => {
    setDirection(Direction.Back)
    router.back()
  }

  const forward: () => void = () => {
    setDirection(Direction.Forward)
    router.forward()
  }

  return {
    push,
    replace,
    forward,
    back
  }
}
