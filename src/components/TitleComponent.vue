<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  title: String,
  back: {
    type: Boolean,
    default: true
  }
})

const goBack = () => {
  console.log("Back")
}
</script>

<template>
  <div class="relative my-2 bg-white md:rounded-lg">
    <div class="flex h-12 items-center justify-between py-2 px-4">
      <div class="cursor-pointer" @click="goBack">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-gray-500 hover:text-blue-400" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
      </div>
      <div class="w-3/4 truncate text-center font-bold">
        {{ title }}
      </div>
      <slot name="right">
        <div class="flex w-5"></div>
      </slot>
    </div>
  </div>
</template>

<style scoped>

</style>