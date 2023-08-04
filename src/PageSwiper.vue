<script setup lang="ts">
import { ComputedRef, KeepAliveProps, computed, toRefs } from "vue"

import { onceTransitionName, resetOnceTransitionName } from "./pageSwiper"
import { Direction, direction, setDirection } from "./direction"

const props = withDefaults(
  defineProps<{
    forwardTransitionName?: string
    backTransitionName?: string
    keepAlive?: KeepAliveProps
  }>(),
  {
    forwardTransitionName: "swipe-right",
    backTransitionName: "swipe-left",
    keepAlive: undefined
  }
)

const { forwardTransitionName, backTransitionName } = toRefs(props)

const transitionName: ComputedRef<string> = computed(() => {
  if (onceTransitionName.value) {
    return onceTransitionName.value
  }

  switch (direction.value) {
    case Direction.Forward:
      return forwardTransitionName.value
    case Direction.Back:
      return backTransitionName.value
    default:
      return ""
  }
})

const emit = defineEmits<{
  (e: "transitionEnd"): void
  (e: "transitionBegin"): void
}>()

const beforeEnter = () => emit("transitionBegin")

const afterLeave = () => {
  resetOnceTransitionName()
  setDirection(Direction.Unknown)
  emit("transitionEnd")
}
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="transitionName" @afterLeave="afterLeave" @beforeEnter="beforeEnter">
      <keep-alive v-if="keepAlive" v-bind="keepAlive">
        <component :is="Component" />
      </keep-alive>
      <component :is="Component" v-else :key="route.path" />
    </transition>
  </router-view>
</template>

<style scoped>
.swipe-right-leave-to {
  transform: translate3d(-100%, 0px, 0px);
}

.swipe-right-enter-from {
  transform: translate3d(100%, 0px, 0px);
}

.swipe-right-enter-to,
.swipe-left-enter-to {
  transform: translate3d(0px, 0px, 0px);
}

.swipe-left-leave-to {
  transform: translate3d(100%, 0px, 0px);
}

.swipe-left-enter-from {
  transform: translate3d(-100%, 0px, 0px);
}

.swipe-right-enter-active,
.swipe-left-leave-active {
  position: absolute !important;
  width: 100%;
  top: 0;
  left: 0;
  transition: transform 0.4s ease;
}

.swipe-right-leave-active,
.swipe-left-enter-active {
  transition: transform 0.4s ease;
}
</style>
