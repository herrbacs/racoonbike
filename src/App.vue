<template class="bg-slate-900">
  <div id="nav" class="absolute bg-white top-1/2 flex flex-col space-y-2 z-10">
    <RouterLink class="bg-slate-900" to="/">Home</RouterLink>
    <RouterLink class="bg-gray-400" to="/szolgaltatasok">Services</RouterLink>
    <RouterLink class="bg-green-600" to="/galeria">Gallery</RouterLink>
  </div>
  <router-view v-slot="{ Component }">
    <transition :name="transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const transitionName = ref('scale-slide-left')
const route = useRoute()

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
