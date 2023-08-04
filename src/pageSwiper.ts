import { Ref, ref } from "vue"
import { RouteLocationRaw, useRouter } from "vue-router"

import { Direction, setDirection } from "./direction"

export const onceTransitionName: Ref<string> = ref("")

export const resetOnceTransitionName = () => {
  onceTransitionName.value = ""
}

export const usePageSwiper = () => {
  const router = useRouter()

  const goto: (to: RouteLocationRaw, method: "push" | "replace", transitionName?: string) => void = (
    to,
    method,
    transitionName
  ) => {
    if (transitionName) {
      onceTransitionName.value = transitionName
    }

    router[method](to)
  }

  const push: (to: RouteLocationRaw, transitionName?: string) => void = (to, transitionName) => {
    setDirection(Direction.Forward)
    goto(to, "push", transitionName)
  }

  const replace: (to: RouteLocationRaw, transitionName: string) => void = (to, transitionName) =>
    goto(to, "replace", transitionName)

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
