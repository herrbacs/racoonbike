<template>
  <div
    id="nav"
    class="z-10 h-16 xl:h-auto overflow-hidden absolute bg-slate-100 items-center justify-around xl:space-x-0 w-full xl:w-auto flex xl:block xl:rounded-r-xl bottom-0 xl:bottom-1/2 xl:translate-y-1/2"
  >
    <template v-for="(menu, index) in menuItems" :key="index">
      <RouterLink class="flex group" :to="menu.routeTo">
        <svg-icon
          :class="[
            'transition-transform ease-in-out xl:group-hover:text-gray-600 xl:group-hover:scale-110',
            isActive(menu.routeTo) ? 'text-blue-500' : 'text-black'
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
import { mdiHome, mdiRacingHelmet, mdiImage, mdiMapMarkerCircle } from '@mdi/js'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const menuItems = [
  { icon: mdiHome, routeTo: '/' },
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
