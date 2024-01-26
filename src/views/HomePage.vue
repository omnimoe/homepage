<script setup lang="ts">
import data from "@/stores/homepage.json"
import { onMounted, ref, type Ref } from 'vue'
import UserCardComponent from '@/components/UserCardComponent.vue'
import SponsorCardComponent from '@/components/SponsorCardComponent.vue'

interface titleItem {
    icon: string,
    text: string,
    css: string
}

const titleData = ref<titleItem[]>([
    {
        "icon": "iconfont icon-zhinanzhen",
        "text": "综合",
        "css": "text-new-blue bg-gray-100"
    },
    {
        "icon": "iconfont icon-python",
        "text": "Python",
        "css": "text-new-blue bg-gray-100"
    },
    {
        "icon": "iconfont icon-java",
        "text": "Java",
        "css": "text-new-blue bg-gray-100"
    }, {
        "icon": "iconfont icon-a-c",
        "text": "C++",
        "css": "text-new-blue bg-gray-100"
    }, {
        "icon": "iconfont icon-java-script",
        "text": "JavaScript",
        "css": "text-new-blue bg-gray-100"
    }, {
        "icon": "iconfont icon-xueshimao",
        "text": "教程",
        "css": "text-new-blue bg-gray-100"
    }, {
        "icon": "iconfont icon-wuguan",
        "text": "AI",
        "css": "text-new-blue bg-gray-100"
    }, {
        "icon": "iconfont icon-suanfa2",
        "text": "算法",
        "css": "text-new-blue bg-gray-100"
    }, {
        "icon": "iconfont icon-rust",
        "text": "Rust",
        "css": "text-new-blue bg-gray-100"
    }, {
        "icon": "iconfont icon-youxi",
        "text": "游戏",
        "css": "text-new-blue bg-gray-100"
    },
]);
let stats: boolean = true
let cssTrue: number = 0;
let newHot: boolean = false;
let nowdata: Ref<Array<any>> = ref([]);

const Create = () => {
    let testdata: any[] = [];
    data.forEach(item => {
        newHot = !newHot
        if (newHot) {
            if (item.hot_new.includes("new/hot")) {
                (item as any).hot = "1";
                testdata.push(item)
            }
            else if (item.hot_new.includes("new")) {
                (item as any).hot = "0";
                testdata.push(item);
            }
        }
        else {
            if (item.hot_new.includes("new/hot")) {
                (item as any).hot = "1";
                testdata.push(item)
            }
            else if (item.hot_new.includes("hot")) {
                (item as any).hot = "0";
                testdata.push(item);
            }
        }
    })
    nowdata.value = testdata
    // console.log(nowdata)
}

onMounted(() => {
    Create()
})

</script>

<template>
    <div class="max-w-5xl ml-auto mr-auto mt-3 relative flex justify-center lg:justify-normal">
        <div id="title" class="box-border w-34 p-3 bg-white rounded-md fixed top-15 left[50% -512px] hidden lg:block">
            <div class="box-border flex font-medium pl-1 border-black border-b pb-2 p-1">
                <i class="iconfont icon-gengduo"></i>
                <p class="flex-1 text-center">热门标签</p>
            </div>
            <div v-for="(item, index) in titleData" :key="index" class="box-border mt-1">
                <a href="#" :class="cssTrue == index ? item.css : ''" @click="cssTrue = index"
                    class="box-border pl-1 flex text-sm items-center pt-2 pb-2 hover:bg-gray-100 rounded-md hover:text-new-blue">
                    <i :class="item.icon" class="!text-xl"></i>
                    <p class="ml-1">{{ item.text }}</p>
                </a>
            </div>
        </div>
        <div class="w-5/6 md:w-[597px] lg:ml-[160px]">
            <div class="h-[45px] w-full bg-white rounded-md box-border p-[10px] flex items-center">
                <a href="#" class="box-border px-[10px] py-[3px] ml-1 hover:text-new-blue hover:bg-slate-100 rounded-md"
                    :class="newHot ? 'text-new-blue bg-slate-100' : ''" @click="Create">最新</a>
                <a href="#" class="box-border px-[10px] py-[3px] ml-1 hover:text-new-blue hover:bg-slate-100 rounded-md"
                    :class="!newHot ? 'text-new-blue bg-slate-100' : ''" @click="Create">热门</a>
                <a href="#" class="box-border px-[10px] py-[3px] ml-1 hover:text-new-blue hover:bg-slate-100 rounded-md block lg:hidden"
                    :class="!newHot ? 'text-new-blue bg-slate-100' : ''">标签</a>

            </div>

            <div class="mt-3 bg-white rounded-md w-full">
                <div v-for="(item, index) in nowdata" :key="index"
                    class="flex box-border p-3 w-full items-center cursor-pointer rounded-md border-b border-b-gray-100 hover:bg-gray-150 hover:text-new-blue">
                    <img src="../assets/images/img.webp" class="w-[70px] h-[70px] mr-4 hidden md:block">
                    <div class="w-full md:w-[485px]">
                        <div class="flex truncate"><img src="../assets/images/hot.svg" class="w-[21px] h-[23px] ml-[-4px]"
                                v-if="item.hot === '1'">{{ item.title }}</div>
                        <div class="w-full truncate text-gray-400 text-[13px]">
                            {{ item.item }}</div>
                        <div class="w-full flex items-center text-gray-400 text-[13px]">
                            <img src="../assets/images/img.webp" class="w-[20px] h-[20px] mr-2 block md:hidden">
                            <div>{{ item.user }} ·</div>
                            <div class="w-[12px] h-[12px] rounded-full bg-red-400 mx-1"></div>
                            <div>{{ item.type }} · {{ item.time }}</div>
                            <div class="flex-1 flex justify-end items-center">
                                <img class="w-[14px] h-[14px]" src="../assets/images/eye.svg" alt="">
                                <div>{{ item.read }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ml-[20px] w-[180px] lg:w-[244px] hidden md:block">
            <user-card-component :stats="stats" />
            <sponsor-card-component class="mt-3" />
            <div class="mt-3 bg-white rounded-lg box-border p-3">
                <div class="grid grid-cols-2 text-center border-b border-gray-300 pb-3">
                    <div class="text-gray-400 text-[13px] lg:text-[15px]">用户总数</div>
                    <div class="text-gray-400 text-[13px] lg:text-[15px]">开源项目</div>
                    <div class="text-[20px] lg:text-[25px]">1.3W</div>
                    <div class="text-[20px] lg:text-[25px]">2989</div>
                </div>
                <div>
                    <div class="py-1 lg:py-2 text-gray-400">关于本站</div>
                    <div class="text-[13px] leading-6 lg:text-[15px] lg:leading-7">
                        HelloGitHub 是一个发现和分享有趣、入门级开源项目的平台。 希望大家能够在这里找到编程的快乐、 轻松搞定问题的技术方案、 大呼过瘾的开源神器， 顺其自然地开启开源之旅。
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url("../assets/icon/iconfont.css");

.border {
    border: 1px solid black;
}
</style>