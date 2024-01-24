<script setup lang="ts">

import { defineProps } from 'vue'
</script>

<template>
  <div class="space-y-1">
    <div class="group relative h-20 overflow-hidden rounded-lg bg-white">
      <a href="">
        <div class="flex flex-row p-3">
          <img src="../assets/images/logo.png.webp" alt="ad" class="w-[55px] h-[55px]">
          <div class="ml-3">
            <div class="font-medium tracking-wider md:text-sm lg:w-[135px] lg:truncate lg:whitespace-nowrap lg:text-base">
              微信扫码赞助本站
            </div>
            <div class="hidden lg:block">
              <div class="group-hover:hidden">
                <div class="mt-1.5 mb-1 text-xs text-gray-500">
                  <span>服务器还剩<strong class="mx-1">300</strong>天</span>
                  <div class="relative left-0.5 bottom-1 inline-flex w-fit">
                    <span class="text-xs text-blue-500 font-medium"><span class="mr-[0.5px]">+1</span>年</span>
                  </div>
                </div>
                <div class="flex h-1 w-full overflow-hidden rounded-full bg-gray-200">
                  <div class="flex flex-col justify-center overflow-hidden bg-blue-500" style="width: 5%;"></div>
                </div>
              </div>
              <div class="hidden group-hover:block">
                <div class="mt-1.5 mb-1 text-xs text-gray-500">
                  <span>距离下个目标还差<strong class="mx-1">95%</strong></span>
                </div>
                <div class="flex h-1 w-full overflow-hidden rounded-full bg-gray-200">
                  <div class="flex flex-col justify-center overflow-hidden bg-blue-500" style="width: 5%;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>