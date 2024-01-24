<script setup lang="ts">

import { computed, ref } from 'vue'

interface dataItem {
  project_id: number
  repo_avatar: string
  star: number
  language: string
}

const dataList = ref<dataItem[]>([
  {
    project_id: 1,
    repo_avatar: '/src/assets/images/logo.png.webp',
    star: 30.3,
    language: 'Java'
  }
])

// 洗牌取六
const randomDataList = computed(() => {
  const shuffled = dataList.value.slice().sort(() => 0.5 - Math.random())
  return shuffled.slice(0, 6)
})

</script>

<template>
  <div class="space-y-1.5 rounded-lg bg-white px-4 pt-3 pb-2">
    <div class="flex flex-row items-center justify-between border-b border-gray-100 pb-2">
      <div class="text-sm font-medium text-gray-600">推荐项目</div>
      <div class="flex cursor-pointer flex-row items-center text-xs text-gray-400 hover:text-blue-500">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></svg>
        <span class="pl-0.5">换一换</span>
      </div>
    </div>
    <div class="">
      <div class="cursor-pointer flex flex-row rounded-md py-2 hover:bg-gray-50 hover:text-blue-400" v-for="item in randomDataList" v-bind:key="item.project_id">
        <div class="flex w-full items-center px-1">
          <img :src="item.repo_avatar" alt="repo_avatar" class="w-10 rounded-full border border-gray-100" :width="40" :height="40">
          <div class="flex w-4/5 flex-col pl-2">
            <div class="truncate text-ellipsis text-sm capitalize">Halo-Dev/Halo</div>
            <div class="flex flex-row pt-1 text-xs text-gray-400">
              <div class="flex items-center pr-4">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg>
                <span class="pl-0.5">{{ item.star }}</span>
              </div>
              <div class="truncate text-ellipsis">
                <span class="relative box-border inline-block h-3 w-3 rounded-full border border-gray-100 align-[-1.5px]" style="background-color: rgb(176, 114, 25)"></span>
                <span class="whitespace-nowrap pl-0.5">{{ item.language }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>