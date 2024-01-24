<script setup lang="ts">

import TitleComponent from '@/components/TitleComponent.vue'
import UserCardComponent from '@/components/UserCardComponent.vue'
import SponsorCardComponent from '@/components/SponsorCardComponent.vue'

const stats = true;
</script>

<template>
  <main class="container mx-auto px-0 xl:px-40 2xl:px-56">
    <div class="flex shrink grow flex-row md:border-none">
      <div class="relative w-0 shrink grow lg:w-9/12 lg:grow-0">
        <div class="h-screen divide-y divide-gray-100">
          <title-component title="消息中心" />
          <div class="mt-2 bg-white px-6 pt-3 md:rounded-lg">
            <div class="border-b border-gray-200">
              <nav class="-mb-0.5 flex space-x-6">
                <div class="inline-flex cursor-pointer border-b-2 border-blue-500 py-2 px-1 text-sm text-gray-500 hover:text-blue-600 border-transparent items-center gap-1 whitespace-nowrap md:text-base !border-blue-500 !text-blue-500">
                  开源项目
                </div>
                <div class="inline-flex cursor-pointer border-b-2 border-blue-500 py-2 px-1 text-sm text-gray-500 hover:text-blue-600 border-transparent items-center gap-1 whitespace-nowrap md:text-base">
                  系统消息
                </div>
              </nav>
            </div>
            <div class="mt-4 text-center text-xl">
              <div class="py-14 text-gray-300">
                暂无消息
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative hidden w-3/12 shrink-0 md:block md:grow-0">
        <div class="relative mt-2 ml-3 max-w-[244px]">
          <div class="space-y-2">
            <user-card-component :stats="stats" />
            <sponsor-card-component />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>