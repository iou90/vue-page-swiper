# vue-page-swiper
vue3 & vue router 4 page swiper with navigation direction specific transitions.

## showcases with default transitions

## usage

vue3 & vue router 4 are peer dependencies and must install along this lib.

```javascript
// main.ts

import { createApp } from "vue"
import { createWebHashHistory } from "vue-router"

import { VuePageSwiper } from "vue-page-swiper"
import App from "./App.vue"
import { routes } from "./routes"

const app = createApp(App)

// app type: App<Element>
// options type: RouterOptions https://router.vuejs.org/api/interfaces/RouterOptions.html
VuePageSwiper(app, { routes, history: createWebHashHistory() }).mount("#app")
```

```html
<!-- Vue page swiper container component-->
<template>
  <PageSwiper />
</template>
```

``` css
/* if you do not want horizontal scrollbar, apply following styles */

body,
html,
#app {
  height: 100%;
}

html,
body {
  margin: 0;
  padding: 0;
  border: 0;
  overflow-x: hidden;
}
```

```javascript
// usePageSwiper usage 
import { usePageSwiper } from "vue-page-swiper"

// vue router 4 navigation methods
const { push, replace, back, forward } = usePageSwiper()

// to type: https://router.vuejs.org/api/#RouteLocationRaw
// navigation with direction specific transitions
// default transitions: 
// forward: swipe-right
// back: swipe-left
push("/page2")

replace(
    "/page3",
    // optional once transition name
    "pageFade",
    // optional once transition mode
    "out-in"
    )
```

## example
npm run dev