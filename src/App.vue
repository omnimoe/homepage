<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="w-full h-14 bg-white shadow-sm backdrop-blur">
    <nav class="flex mx-auto max-w-5xl items-center justify-between px-2 py-2 md:py-0">
      <span class="py-2 hidden md:block">
        <img src="./assets/images/logo.png.webp" alt="header_logo" :width="28" :height="28"
             class="cursor-pointer hover:animate-spin">
      </span>
      <div class="inline-flex flex-auto items-stretch rounded-md bg-white px-2 md:flex-none">
        <div class="relative w-full max-w-xs 2xl:max-w-sm">
          <input type="text" class="block w-full h-10 border border-gray-200 rounded-md py-2 pl-2 pr-14 text-xs focus:outline-none focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-500" placeholder="搜索开源项目">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="absolute inset-y-0 right-0 top-3 grid w-10 cursor-pointer place-content-center text-gray-800 dark:text-gray-300" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"></path></svg>
        </div>
      </div>
      <ul class="text-md ml-5 flex items-center space-x-2 font-medium text-gray-500 md:pt-2">
        <li class="hidden md:block hover:font-bold hover:text-gray-800 hover:border-blue-500 hover:border-b-2 h-12 text-gray-500">
          <button type="button" class="inline-flex items-center rounded px-2 py-2 focus:outline-none focus-visible:ring shadow-none transition-colors duration-75 text-current font-normal">首页</button>
        </li>
        <li class="hidden md:block hover:font-bold hover:text-gray-800 hover:border-blue-500 hover:border-b-2 h-12 text-gray-500">
          <button type="button" class="inline-flex items-center rounded px-2 py-2 focus:outline-none focus-visible:ring shadow-none transition-colors duration-75 text-current font-normal">月刊</button>
        </li>
        <li class="hidden md:block hover:font-bold hover:text-gray-800 hover:border-blue-500 hover:border-b-2 h-12 text-gray-500">
          <button type="button" class="inline-flex items-center rounded px-2 py-2 focus:outline-none focus-visible:ring shadow-none transition-colors duration-75 text-current font-normal">🏆榜单</button>
        </li>
        <li class="hidden md:block hover:font-bold hover:text-gray-800 hover:border-blue-500 hover:border-b-2 h-12 text-gray-500">
          <button type="button" class="inline-flex items-center rounded px-2 py-2 focus:outline-none focus-visible:ring shadow-none transition-colors duration-75 text-current font-normal">文章</button>
        </li>
        <li class="hidden md:block hover:font-bold hover:text-gray-800 hover:border-blue-500 hover:border-b-2 h-12 text-gray-500">
          <button type="button" class="inline-flex items-center rounded px-2 py-2 focus:outline-none focus-visible:ring shadow-none transition-colors duration-75 text-current font-normal">OenFile</button>
        </li>
      </ul>
      <div class="shrink grow"></div>
      <div class="hidden md:flex cursor-pointer space-x-2">
        <div>
          <button type="button" class="flex h-8 items-center rounded-lg border border-blue-500 px-2 bg-blue-500 text-sm text-white lg:mr-2">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="mr-0.5" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
            提交项目
          </button>
        </div>
        <div class="flex flex-row items-center">
          <span class="relative inline-flex">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-500" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"></path></svg>
            <div class="w-2"></div>
          </span>
        </div>
      </div>
    </nav>
  </div>

  <RouterView />
</template>

<style>
body{
  background-color: #f3f4f6;
}

</style>
