<script setup lang="ts">

import TitleComponent from '@/components/TitleComponent.vue'
import SponsorCardComponent from '@/components/SponsorCardComponent.vue'
import UserCardComponent from '@/components/UserCardComponent.vue'
import RecommendCardComponent from '@/components/RecommendCardComponent.vue'

const stats = true;
</script>

<template>
  <main class="container mx-auto px-0 xl:px-40 2xl:px-56">
    <div class="flex shrink grow flex-row md:border-none">
      <div class="relative w-0 shrink grow lg:w-9/12 lg:grow-0">
        <div class="h-screen divide-y divide-gray-100">
          <title-component title="文章">
            <template #right>
              <div class="flex justify-end text-sm text-gray-500">
                <a href="" class="flex items-center whitespace-nowrap rounded-lg px-2 py-1 text-xs hover:text-blue-500 text-blue-500">最新</a>
                <a href="" class="flex items-center whitespace-nowrap rounded-lg px-2 py-1 text-xs hover:text-blue-500 text-gray-500">热门</a>
              </div>
            </template>
          </title-component>
          <div class="h-screen">
            <div class="divide-y divide-slate-100 bg-white md:overflow-hidden md:rounded-lg">
              <article>
                <a href="">
                  <div class="text-color-primary relative cursor-pointer bg-white py-2 pl-3 pr-3 hover:bg-gray-50 hover:text-blue-500 md:py-3 md:pl-5">
                    <div class="flex-row relative flex items-center">
                      <div class="w-9/12 max-w-full">
                        <div class="flex">
                          <span class="text-center">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="mr-1 inline-block align-[-2px]" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style="color: rgb(226, 17, 12);"><path d="M834.1 469.2A347.49 347.49 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 0 1-47.5 46.1 352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9z"></path></svg>
                          </span>
                          <span class="truncate pr-2 text-sm leading-snug md:pr-0 md:text-base">关于网站右侧的扫码赞助</span>
                        </div>
                        <div class="pt-1 pb-1.5 pr-1 text-xs leading-loose text-gray-400 line-clamp-2 md:pr-0">
                          既然伸手向大家要钱了，就得开诚布公地介绍下网站运行的花费，让大家知道赞助的钱花在什么地方了。其实运营一个网站的必须花费还是挺多的～
                        </div>
                        <div class="flex items-center">
                          <div class="font-normal flex shrink grow items-center overflow-x-hidden text-xs text-gray-800 ">
                            <div class="hidden md:flex">
                              <div class="truncate whitespace-nowrap md:max-w-xs">
                                作者
                                卤蛋
                              </div>
                              <span class="px-1">·</span>
                              <time>
                                发布于
                                8 个月前
                              </time>
                              <span class="px-1">·</span>
                              阅读
                              7687
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="relative flex w-3/12 justify-center">
                        <img src="../assets/images/logo.png.webp" alt="article_img" class="h-20 rounded-md md:w-32">
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            </div>
            <div class="mt-4 flex flex-col items-center border-none text-base text-gray-400">
              <p class="mb-4">
                -
                到底啦！登录可查看更多内容
                -
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="relative hidden w-3/12 shrink-0 md:block md:grow-0">
        <div class="relative mt-2 ml-3 max-w-[244px]">
          <div class="space-y-2">
            <user-card-component :stats="stats" />
            <sponsor-card-component />
            <recommend-card-component />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>