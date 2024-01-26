<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  stats: {
    type: Boolean,
    default: false
  }
})

</script>

<template>
  <div class="rounded-lg bg-white px-3 pt-3 pb-2.5">
    <div class="relative">
      <div v-if="!stats">
        <div class="box-border py-6 text-center align-middle text-base">
          <button type="button" class="box-border rounded-md border-2 border-gray-400 px-3 py-2 text-gray-500 hover:border-blue-500 hover:text-blue-500">
            立即登录
          </button>
        </div>
      </div>
      <div class="relative" v-else>
        <div class="flex">
          <a href="">
            <div class="top-0 left-0 h-10 w-10 shrink-0 grow-0 cursor-pointer rounded-lg object-cover">
              <img src="../assets/images/logo.png.webp" alt="side_avatar" class="rounded" :width="40" :height="40">
            </div>
          </a>
          <div class="ml-2 w-full shrink grow">
            <div class="relative flex h-5 min-w-0 items-center">
              <div class="block w-14 truncate align-baseline lg:w-24">HelloGithub</div>
              <div class="shrink grow"></div>
              <div class="justify-end">
                <button type="button" class="items-center px-2 py-2 font-semibold focus:outline-none focus-visible:ring-primary-500 duration-75 text-primary-500 shadow-none hover:bg-primary-50 disabled:bg-primary-100 disabled:cursor-not-allowed relative block h-[20px] w-10 shrink-0 rounded-xl border border-gray-300 bg-gray-100 transition-colors hover:border-gray-400 active:bg-gray-100" role="switch" aria-selected="true" aria-label="Toggle Dark Mode">
                  <span class="absolute top-px left-px h-[16px] w-[16px] rounded-full bg-white shadow transition-all duration-300">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 25 25" class="absolute top-[2px] left-[2px] h-3 w-3 fill-gray-500 opacity-100 dark:opacity-0"><path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 25 25" class="absolute top-[2px] left-[2px] h-3 w-3 fill-gray-400 opacity-0 dark:opacity-100"><path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path></svg>
                    </span>
                  </span>
                </button>
              </div>
            </div>
            <div class="text-sm font-bold text-blue-500">Lv.1</div>
          </div>
        </div>
        <div class="mt-1">
          <div class="flex justify-between text-sm">
            <div class="cursor-pointer text-gray-400">
              <a href="">
                <span class="align-[-5px] text-xs">
                  <span class="mr-0.5">贡献度</span>
                  <span class="inline-block align-[-2px]">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"></path></svg>
                  </span>
                </span>
              </a>
            </div>
            <span class="text-xl text-blue-500">0<span class="mx-0.5">/</span>64</span>
          </div>
          <div class="flex h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
            <div class="flex flex-col justify-center overflow-hidden bg-blue-500" style="width: 0%"></div>
          </div>
        </div>
      </div>
      <div class="flex mt-3 justify-between border-t text-xs" v-else>
        <a href="">
          <div class="pt-2 pl-1 pb-1 text-gray-400 hover:text-blue-500 hover:underline">
            我的主页
          </div>
        </a>
        <div class="cursor-pointer pr-1 pt-2 pb-1 text-gray-400 hover:text-blue-500 hover:underline">
          退出登录
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>