import { Ref, ref } from "vue"

export enum Direction {
  Forward = 1,
  Back = -1,
  Unknown = 0
}

export const direction: Ref<Direction> = ref(Direction.Unknown)

export const setDirection: (value: Direction) => void = (value) => {
  direction.value = value
}
