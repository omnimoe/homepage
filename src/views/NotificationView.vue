<script setup lang="ts">

import TitleComponent from '@/components/TitleComponent.vue'
import UserCardComponent from '@/components/UserCardComponent.vue'

const stats = true;
</script>

<template>
  <main class="container mx-auto px-0 xl:px-40 2xl:px-56">
    <div class="flex shrink grow flex-row md:border-none">
      <div class="relative w-0 shrink grow lg:w-9/12 lg:grow-0">
        <div class="h-screen divide-y divide-gray-100">
          <title-component title="消息中心" />
        </div>
      </div>
      <div class="relative hidden w-3/12 shrink-0 md:block md:grow-0">
        <div class="relative mt-2 ml-3 max-w-[244px]">
          <div class="space-y-2">
            <user-card-component :stats="stats" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>