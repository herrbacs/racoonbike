<template>
  <div
    id="nav"
    class="z-10 h-16 xl:h-auto overflow-hidden absolute items-center xl:space-x-0 w-full xl:w-auto flex xl:block xl:rounded-r-xl bottom-0 xl:bottom-1/2 xl:translate-y-1/2 shadow-lg shadow-slate-900"
  >
    <RouterLink
      :class="[
        'flex group h-full items-center justify-center w-full xl:p-2',
        isActive('/') ? 'bg-black' : 'bg-white'
      ]"
      to="/"
    >
      <div class="w-14">
        <svg
          viewBox="0.453 0.091 107.523 100.332"
          xmlns="http://www.w3.org/2000/svg"
          :class="[
            isActive('/')
              ? 'fill-white stroke-white'
              : 'fill-black stroke-black transition-transform ease-in-out xl:group-hover:fill-gray-600 xl:group-hover:stroke-gray-600 xl:group-hover:scale-110'
          ]"
        >
          <path
            d="M 15.7 0.792 C 25.97 2.722 34.29 5.352 42.7 11.792 L 43.7 7.792 C 48.23 11.362 50.09 14.282 51.7 19.792 C 57.79 18.292 64.87 16.892 70.7 19.792 C 65.37 21.889 58.56 26.802 58.7 28.792 C 59.22 29.152 62.691 27.656 64.7 27.792 L 64.7 68.792 L 64.7 88.882 C 66.084 88.877 68.733 88.898 71.7 91.792 C 62.88 91.792 58.36 91.162 53.66 99.832 C 53.06 100.172 39.7 90.792 39.7 90.792 C 54.69 82.032 60.78 67.562 56.7 50.842 C 51.7 60.402 51.666 51.577 41.7 50.842 C 37.06 50.632 32.07 52.362 27.7 53.792 C 32.99 57.182 26.81 57.522 24.52 63.242 C 22.49 68.362 22.11 76.412 22.7 81.792 C 15.73 80.042 6.1 74.712 5.7 66.792 L 1.7 66.792 L 13.7 52.792 L 10.7 52.792 C 13.72 48.782 15.01 47.632 19.7 45.792 C 14.07 29.552 11.5 18.002 15.7 0.792 Z M 24.7 12.792 L 30.7 25.792 L 23.7 25.792 L 29.7 33.792 L 39.7 27.792 C 38.07 20.122 31.36 16.052 24.7 12.792 Z M 90.7 27.792 C 92.53 20.402 98.35 14.962 105.7 13.792 C 104.134 15.104 99.15 20.762 99.7 25.792 L 106.7 25.792 L 100.7 33.792 C 99.767 33.123 93.581 29.009 90.7 27.792 Z M 38.61 63.402 C 44.59 61.042 50.21 67.082 47.09 69.792 C 43.94 72.532 34.75 69.092 38.61 63.402 Z M 86.76 63.672 C 88.45 62.826 90.91 62.242 92.57 63.402 C 94.44 65.002 93.72 68.702 90.55 69.812 C 86.84 71.102 79.17 67.212 86.76 63.672 Z M 88.09 76.362"
          />
        </svg>
      </div>
    </RouterLink>
    <template v-for="(menu, index) in menuItems" :key="index">
      <RouterLink
        :class="[
          'flex group h-full items-center justify-center w-full',
          isActive(menu.routeTo) ? 'bg-black' : 'bg-white'
        ]"
        :to="menu.routeTo"
      >
        <svg-icon
          :class="[
            isActive(menu.routeTo)
              ? 'text-white'
              : 'text-black transition-transform ease-in-out xl:group-hover:text-gray-600 xl:group-hover:scale-110'
          ]"
          type="mdi"
          :path="menu.icon"
          size="65"
        ></svg-icon>
      </RouterLink>
    </template>
  </div>
  <router-view v-slot="{ Component }">
    <transition :name="transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiRacingHelmet, mdiImage, mdiMapMarkerCircle } from '@mdi/js'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const menuItems = [
  { icon: mdiRacingHelmet, routeTo: '/szolgaltatasok' },
  { icon: mdiImage, routeTo: '/galeria' },
  { icon: mdiMapMarkerCircle, routeTo: '/elerhetoseg' }
]

const isActive = (path) => {
  return route.path === path
}

const transitionName = ref('scale-slide-left')

const setRandomTransition = () => {
  const transitions = [
    'scale-slide-left',
    'scale-slide-right',
    'scale-slide-up',
    'scale-slide-down'
  ]
  const randomIndex = Math.floor(Math.random() * transitions.length)
  transitionName.value = transitions[randomIndex]
}

onMounted(() => {
  setRandomTransition()
})

watch(route, () => {
  setRandomTransition()
})
</script>

<style>
.scale-slide-left-enter-active,
.scale-slide-left-leave-active,
.scale-slide-right-enter-active,
.scale-slide-right-leave-active,
.scale-slide-up-enter-active,
.scale-slide-up-leave-active,
.scale-slide-down-enter-active,
.scale-slide-down-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.scale-slide-left-enter-from {
  left: -100%;
}
.scale-slide-left-enter-to {
  left: 0%;
}
.scale-slide-left-leave-from {
  transform: scale(1);
}
.scale-slide-left-leave-to {
  transform: scale(1);
}

.scale-slide-right-enter-from {
  right: -100%;
}
.scale-slide-right-enter-to {
  right: 0%;
}
.scale-slide-right-leave-from {
  transform: scale(1);
}
.scale-slide-right-leave-to {
  transform: scale(1);
}

.scale-slide-up-enter-from {
  top: -100%;
}
.scale-slide-up-enter-to {
  top: 0%;
}
.scale-slide-up-leave-from {
  transform: scale(1);
}
.scale-slide-up-leave-to {
  transform: scale(1);
}

.scale-slide-down-enter-from {
  bottom: -100%;
}
.scale-slide-down-enter-to {
  bottom: 0%;
}
.scale-slide-down-leave-from {
  transform: scale(1);
}
.scale-slide-down-leave-to {
  transform: scale(1);
}
</style>
