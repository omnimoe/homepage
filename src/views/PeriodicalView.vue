<script setup lang="ts">
import TitleComponent from '@/components/TitleComponent.vue'
import UserCardComponent from '@/components/UserCardComponent.vue'
import SponsorCardComponent from '@/components/SponsorCardComponent.vue'

let stats: boolean = true;
</script>

<template>
    <div class="max-w-5xl mx-auto flex">
        <div class="flex-1">
            <title-component title="HelloGitHub 月刊" />
            <div class="bg-white box-border py-2 rounded-xl px-4">
                <img src="../assets/images/readme.webp" class="mx-auto mb-4">
                <span class="font-semibold">「HelloGitHub 月刊」</span>分享 GitHub 上有趣、入门级的开源项目，每月 28
                号发布最新一期。内容包括开发利器、开源书籍、教程、企业级项目等， 让你发现编程的乐趣、爱上开源！
                <div class="mt-4 flex justify-between">
                    <div
                        class="w-[240px] h-[291px] box-border px-[16px] pt-[24px] border border-gray-150 rounded-xl flex flex-col items-center text-base">
                        <div>已发布</div>
                        <div class="my-[12px] text-blue-600 font-extrabold text-4xl md:text-5xl">94</div>
                        <div>期</div>
                        <div
                            class="box-border h-[54px] w-full text-center leading-[54px] border-y border-gray-150 mt-[24px]">
                            选择期数：
                            <select class="w-[59px] h-[30px] text-center border border-black rounded-md">
                                <option value="option1">1</option>
                                <option value="option2">2</option>
                                <option value="option3">3</option>
                                <option value="option4">4</option>
                            </select>
                        </div>
                        <button
                            class="w-[65px] h-[34px] border border-gray-150 rounded-md mt-[12px] hover:border-blue-600">推荐</button>
                    </div>
                    <div
                        class="w-[240px] h-[291px] box-border px-[16px] pt-[24px] border border-gray-150 rounded-xl flex flex-col items-center text-base">
                        <div>共包含</div>
                        <div class="my-[12px] text-blue-600 font-extrabold text-4xl md:text-5xl">17</div>
                        <div>类</div>
                        <div
                            class="box-border h-[54px] w-full text-center leading-[54px] border-y border-gray-150 mt-[24px]">
                            选择期数：
                            <select class="w-[59px] h-[30px] text-center border border-black rounded-md">
                                <option value="option1">1</option>
                                <option value="option2">2</option>
                                <option value="option3">3</option>
                                <option value="option4">4</option>
                            </select></div>
                        <button
                            class="w-[65px] h-[34px] border border-gray-150 rounded-md mt-[12px] hover:border-blue-600">推荐</button>
                    </div>
                    <div
                        class="w-[240px] h-[291px] box-border px-[16px] pt-[24px] border border-gray-150 rounded-xl flex flex-col items-center text-base">
                        <div>项目数</div>
                        <div class="my-[12px] text-blue-600 font-extrabold text-4xl md:text-5xl">3k</div>
                        <div>个</div>
                        <div
                            class="box-border h-[54px] w-full text-center leading-[54px] border-y border-gray-150 mt-[24px]">
                            欢迎推荐和自荐项目</div>
                        <button
                            class="w-[65px] h-[34px] border border-gray-150 rounded-md mt-[12px] hover:border-blue-600">推荐</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="ml-[20px] w-[180px] lg:w-[244px] hidden md:block mt-2">
            <user-card-component :stats="stats" />
        <sponsor-card-component class="mt-2" />
    </div>
</div></template>

<style scoped>.border_css {
    border: 3px solid black;
}</style>