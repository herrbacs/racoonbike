<template>
  <div
    id="nav"
    class="z-50 h-16 xl:h-auto overflow-hidden absolute items-center xl:space-x-0 w-full xl:w-auto flex xl:block xl:rounded-r-xl bottom-0 xl:bottom-1/2 xl:translate-y-1/2 shadow-lg shadow-slate-900"
  >
    <RouterLink
      :class="[
        'flex group h-full items-center justify-center w-full xl:pl-2 xl:pr-1 xl:py-1',
        isActive('/') ? 'bg-black' : 'bg-white'
      ]"
      to="/"
    >
      <div class="w-16">
        <svg
          :class="[
            { 'xl:group-hover:scale-110': !isActive('/') },
            'transition-transform ease-in-out'
          ]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="118.483 80.383 140.851 114.8375"
        >
          <path
            :class="['fill-black', { 'xl:group-hover:fill-gray-600': !isActive('/') }]"
            id="path-1"
            stroke-width="1"
            d="M 242.847 80.383 C 248.028 99.731 249.411 112.067 242.466 130.325 C 248.252 132.393 253.437 143.398 253.437 143.398 L 248.696 142.747 L 259.334 156.406 L 252.19 157.837 C 252.385 161.361 242.977 170.021 230.275 174.173 C 219.066 177.837 210.071 185.049 210.071 185.049 C 210.071 185.049 192.225 195.292 188.409 195.218 C 183.215 195.436 159.818 181.623 159.818 181.623 C 159.818 181.623 152.513 175.564 143.374 172.145 C 133.677 168.517 125.774 160.762 125.627 158.118 L 118.483 156.687 L 129.121 143.028 L 124.38 143.679 C 124.38 143.679 129.565 132.674 135.351 130.606 C 128.406 112.348 129.428 101.75 134.904 81.419 C 147.865 82.605 153.344 85.141 163.719 92.381 L 164.561 87.234 C 170.149 91.247 174.667 93.163 178.88 101.234 C 178.88 101.234 184.239 100.453 187.391 100.524 C 190.731 100.599 197.903 101.783 197.903 101.783 C 201.427 93.822 209.873 89.382 213.256 86.953 L 214.098 92.1 C 224.473 84.86 230.181 82.553 242.847 80.383 Z"
          />
          <path
            class="fill-white"
            id="path-2"
            stroke-width="1"
            d="M 138.877 87.58 C 149.147 89.51 157.467 92.14 165.877 98.58 L 166.877 94.58 C 171.407 98.15 173.267 101.07 174.877 106.58 C 180.967 105.08 188.047 103.68 193.877 106.58 C 188.547 108.677 181.737 113.59 181.877 115.58 C 182.397 115.94 185.868 114.444 187.877 114.58 L 187.877 155.58 L 187.877 175.67 C 189.261 175.665 191.91 175.686 194.877 178.58 C 186.057 178.58 181.537 177.95 176.837 186.62 C 176.237 186.96 162.877 177.58 162.877 177.58 C 177.867 168.82 183.957 154.35 179.877 137.63 C 174.877 147.19 174.843 138.365 164.877 137.63 C 160.237 137.42 155.247 139.15 150.877 140.58 C 156.167 143.97 149.987 144.31 147.697 150.03 C 145.667 155.15 145.287 163.2 145.877 168.58 C 138.907 166.83 129.277 161.5 128.877 153.58 L 124.877 153.58 L 136.877 139.58 L 133.877 139.58 C 136.897 135.57 138.187 134.42 142.877 132.58 C 137.247 116.34 134.677 104.79 138.877 87.58 Z M 147.877 99.58 L 153.877 112.58 L 146.877 112.58 L 152.877 120.58 L 162.877 114.58 C 161.247 106.91 154.537 102.84 147.877 99.58 Z M 213.877 114.58 C 215.707 107.19 221.527 101.75 228.877 100.58 C 227.311 101.892 222.327 107.55 222.877 112.58 L 229.877 112.58 L 223.877 120.58 C 222.944 119.911 216.758 115.797 213.877 114.58 Z M 161.787 150.19 C 167.767 147.83 173.387 153.87 170.267 156.58 C 167.117 159.32 157.927 155.88 161.787 150.19 Z M 209.937 150.46 C 211.627 149.614 214.087 149.03 215.747 150.19 C 217.617 151.79 216.897 155.49 213.727 156.6 C 210.017 157.89 202.347 154 209.937 150.46 Z"
          />
        </svg>
      </div>
    </RouterLink>
    <template v-for="(menu, index) in menuItems" :key="index">
      <RouterLink
        :class="[
          'flex group h-16 items-center justify-center w-full',
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
  <ParticlesBackground />
  <router-view v-slot="{ Component }">
    <transition :name="transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiRacingHelmet, mdiMapMarkerCircle } from '@mdi/js'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import ParticlesBackground from './components/ParticlesBackground.vue'

const route = useRoute()

const menuItems = [
  { icon: mdiRacingHelmet, routeTo: '/szolgaltatasok' },
  // { icon: mdiImage, routeTo: '/galeria' },
  { icon: mdiMapMarkerCircle, routeTo: '/elerhetoseg' }
]

const isActive = (path) => {
  return route.path === path
}

const transitionName = ref('slide-lr')

const setRandomTransition = () => {
  const transitions = [
    'slide-lr',
    'slide-lt',
    'slide-lb',
    'slide-ll',
    'slide-tt',
    'slide-tb',
    'slide-tl',
    'slide-rr',
    'slide-rt',
    'slide-rb',
    'slide-rl',
    'slide-br',
    'slide-bt',
    'slide-bb',
    'slide-bl'
  ].filter((transition) => transition !== transitionName.value)

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
/* FROM LEFT -------------------------------------*/

/* slide-lr */
.slide-lr-enter-active,
.slide-lr-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.slide-lr-enter-from {
  left: -100%;
}

.slide-lr-enter-to {
  left: 0%;
}

.slide-lr-leave-from {
  right: 0%;
}

.slide-lr-leave-to {
  right: -100%;
}

/* slide-lt */
.slide-lt-enter-active,
.slide-lt-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.slide-lt-enter-from {
  left: -100%;
}

.slide-lt-enter-to {
  left: 0%;
}

.slide-lt-leave-from {
  top: 0%;
}

.slide-lt-leave-to {
  top: -100%;
}

/* slide-lb */
.slide-lb-enter-active,
.slide-lb-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.slide-lb-enter-from {
  left: -100%;
}

.slide-lb-enter-to {
  left: 0%;
}

.slide-lb-leave-from {
  bottom: 0%;
}

.slide-lb-leave-to {
  bottom: -100%;
}

/* slide-ll */
.slide-ll-enter-active,
.slide-ll-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.slide-ll-enter-from {
  left: -100%;
}

.slide-ll-enter-to {
  left: 0%;
}

.slide-ll-leave-from {
  left: 0%;
}

.slide-ll-leave-to {
  left: -100%;
}

/* FROM TOP -------------------------------------*/
*/

/* slide-tr */
.slide-tr-enter-active,
.slide-tr-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.slide-tr-enter-from {
  top: -100%;
}

.slide-tr-enter-to {
  top: 0%;
}

.slide-tr-leave-from {
  right: 0%;
}

.slide-tr-leave-to {
  right: -100%;
}

/* slide-tt */
.slide-tt-enter-active,
.slide-tt-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.slide-tt-enter-from {
  top: -100%;
}

.slide-tt-enter-to {
  top: 0%;
}

.slide-tt-leave-from {
  top: 0%;
}

.slide-tt-leave-to {
  top: -100%;
}

/* slide-tb */
.slide-tb-enter-active,
.slide-tb-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.slide-tb-enter-from {
  top: -100%;
}

.slide-tb-enter-to {
  top: 0%;
}

.slide-tb-leave-from {
  bottom: 0%;
}

.slide-tb-leave-to {
  bottom: -100%;
}

/* slide-tl */
.slide-tl-enter-active,
.slide-tl-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.slide-tl-enter-from {
  top: -100%;
}

.slide-tl-enter-to {
  top: 0%;
}

.slide-tl-leave-from {
  left: 0%;
}

.slide-tl-leave-to {
  left: -100%;
}

/* FROM RIGHT -------------------------------------*/

/* slide-rr */
.slide-rr-enter-active,
.slide-rr-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.slide-rr-enter-from {
  right: -100%;
}

.slide-rr-enter-to {
  right: 0%;
}

.slide-rr-leave-from {
  right: 0%;
}

.slide-rr-leave-to {
  right: -100%;
}

/* slide-rt */
.slide-rt-enter-active,
.slide-rt-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.slide-rt-enter-from {
  right: -100%;
}

.slide-rt-enter-to {
  right: 0%;
}

.slide-rt-leave-from {
  top: 0%;
}

.slide-rt-leave-to {
  top: -100%;
}

/* slide-rb */
.slide-rb-enter-active,
.slide-rb-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.slide-rb-enter-from {
  right: -100%;
}

.slide-rb-enter-to {
  right: 0%;
}

.slide-rb-leave-from {
  bottom: 0%;
}

.slide-rb-leave-to {
  bottom: -100%;
}

/* slide-rl */
.slide-rl-enter-active,
.slide-rl-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.slide-rl-enter-from {
  right: -100%;
}

.slide-rl-enter-to {
  right: 0%;
}

.slide-rl-leave-from {
  left: 0%;
}

.slide-rl-leave-to {
  left: -100%;
}

/* FROM BOTTOM -------------------------------------*/

/* slide-br */
.slide-br-enter-active,
.slide-br-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.slide-br-enter-from {
  bottom: -100%;
}

.slide-br-enter-to {
  bottom: 0%;
}

.slide-br-leave-from {
  right: 0%;
}

.slide-br-leave-to {
  right: -100%;
}

/* slide-bt */
.slide-bt-enter-active,
.slide-bt-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.slide-bt-enter-from {
  bottom: -100%;
}

.slide-bt-enter-to {
  bottom: 0%;
}

.slide-bt-leave-from {
  top: 0%;
}

.slide-bt-leave-to {
  top: -100%;
}

/* slide-bb */
.slide-bb-enter-active,
.slide-bb-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.slide-bb-enter-from {
  bottom: -100%;
}

.slide-bb-enter-to {
  bottom: 0%;
}

.slide-bb-leave-from {
  bottom: 0%;
}

.slide-bb-leave-to {
  bottom: -100%;
}

/* slide-bl */
.slide-bl-enter-active,
.slide-bl-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.slide-bl-enter-from {
  bottom: -100%;
}

.slide-bl-enter-to {
  bottom: 0%;
}

.slide-bl-leave-from {
  left: 0%;
}

.slide-bl-leave-to {
  left: -100%;
}
</style>
