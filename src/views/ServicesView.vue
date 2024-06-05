<template>
  <div
    class="overflow-hidden w-full h-[100svh] bg-white flex pb-16 xl:pb-0 items-center justify-center"
  >
    <div class="max-w-screen-3xl w-full h-full flex items-center justify-center">
      <div class="flex flex-col w-full xl:w-2/3 text-white space-y-4">
        <div
          v-for="(row, ri) in tables"
          :key="ri"
          class="w-full flex flex-row justify-center my-1 space-x-2"
        >
          <div
            v-for="(table, ti) in row"
            :key="ti"
            class="bg-black hover:z-10 hover:bg-racoon-gray hover:text-black flex flex-col text-center justify-center py-2 px-5 uppercase text-[.6rem] xsm:text-sm sm:text-base md:text-xl lg:text-2xl font-bold -tracking-tighter cursor-pointer transition-transform ease-in-out hover:scale-[1.2]"
            :class="[table.polygon]"
          >
            <span v-for="(text, i) in table.text" :key="i">{{ text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tables = ref([
  [
    {
      polygon: '[clip-path:polygon(0%_0%,95%_0%,100%_100%,5%_100%)] -rotate-2 hover:rotate-2',
      text: ['diagnosztika']
    },
    {
      polygon: '[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_93%)] rotate-2 hover:-rotate-2',
      text: ['nagy szervizek']
    },
    {
      polygon: '[clip-path:polygon(0%_0%,100%_20%,100%_100%,0%_100%)] rotate-2 hover:-rotate-2',
      text: ['gumicsere']
    }
  ],
  [
    {
      polygon: '[clip-path:polygon(2%_0%,98%_0%,100%_100%,0%_100%)] -rotate-1 hover:rotate-1',
      text: ['karburátor, tisztítás, javítás, beállítás']
    }
  ],
  [
    {
      polygon: '[clip-path:polygon(3%_0%,98%_0%,100%_100%,1%_90%)]',
      text: ['karburátor, injektor szinkronizálás']
    }
  ],
  [
    {
      polygon: '[clip-path:polygon(0%_0%,100%_10%,96%_100%,1%_100%)] rotate-1 hover:-rotate-1',
      text: ['fék, futómű teljeskörű javítás, felújítás']
    }
  ],
  [
    {
      polygon: '[clip-path:polygon(5%_0%,98%_0%,100%_100%,0%_92%)] rotate-2 hover:-rotate-2',
      text: ['időszakos', 'karbantartások']
    },
    {
      polygon: '[clip-path:polygon(3%_0%,98%_0%,100%_100%,0%_98%)] -rotate-2 hover:rotate-2',
      text: ['műszaki vizsgára', 'felkészítés']
    }
  ]
])
</script>
