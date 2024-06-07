<template>
  <div
    class="absolute w-full h-[100svh] flex flex-col pb-16 xl:pb-0 items-center justify-center space-y-5"
  >
    <div class="w-11/12 xl:w-2/3 flex flex-col md:flex-row justify-between space-y-5 md:space-y-0">
      <div class="flex flex-col space-y-2 md:w-1/2">
        <span class="text-center sm:text-left text-xl lg:text-3xl font-extrabold uppercase mb-1"
          >Elérhetőségeink</span
        >
        <div v-for="(info, index) in contacInfo" :key="index" class="flex items-center space-x-2">
          <svg-icon
            class="text-black md:text-white md:bg-black rounded-full md:p-1 w-10"
            type="mdi"
            :path="info.icon"
            size="40"
          />
          <span class="text-lg lg:text-2xl font-extrabold tracking-wide pb-1">{{ info.text }}</span>
        </div>
      </div>
      <div class="flex flex-col space-y-2 md:w-1/2 md:items-end">
        <span class="text-center sm:text-left text-xl lg:text-3xl font-extrabold uppercase mb-1"
          >Kövess minket</span
        >
        <a
          v-for="(info, index) in social"
          :key="index"
          class="flex items-center space-x-2"
          :href="info.url"
        >
          <span class="text-lg lg:text-2xl font-extrabold tracking-wide pb-1">{{ info.text }}</span>
          <svg-icon class="text-black p-1 w-10" type="mdi" :path="info.icon" size="40" />
        </a>
      </div>
    </div>
    <GoogleMap
      class="w-11/12 xl:w-2/3 h-1/3 border-2 border-racoon-gray"
      :api-key="key"
      :center="center"
      :zoom="17"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiPhone, mdiEmail, mdiMapMarkerCircle, mdiFacebook } from '@mdi/js'

const center = { lat: 46.557522604963715, lng: 20.67644977668035 }
const key = ref(import.meta.env.APP_GOOGLE_MAP_API_KEY)
const contacInfo = ref([
  { icon: mdiPhone, text: '+36 70 621 8189' },
  { icon: mdiEmail, text: 'raconbike@gmail.com' },
  { icon: mdiMapMarkerCircle, text: '5900 Orosháza Hajnal Köz 20.' }
])

const social = ref([
  { icon: mdiFacebook, text: 'Racoon Bike', url: 'https://www.facebook.com/racoon.bike' }
])
</script>
