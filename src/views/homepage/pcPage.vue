<script setup lang="ts">
import data from "@/stores/homepage.json"
import { onMounted, ref } from 'vue'

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
let cssTrue: number = 0;
let newHot: boolean = true;
let nowdata: any[] = [];

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
    nowdata = testdata
    console.log(nowdata)
}

onMounted(() => {
    Create()
})

</script>

<template>
    <div class="max-w-5xl ml-auto mr-auto mt-3 relative">
        <div id="title" class="box-border w-34 p-3 bg-white rounded-md fixed top-15 left[50% -512px]">
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
        <div class=" w-[597px] ml-[160px]">
            <div class="h-[45px] w-full bg-white rounded-md box-border p-[10px] flex items-center">
                <a href="#" class="box-border px-[10px] py-[3px] ml-1 hover:text-new-blue hover:bg-slate-100 rounded-md"
                    :class="newHot ? 'text-new-blue bg-slate-100' : ''" @click="Create">最新</a>
                <a href="#" class="box-border px-[10px] py-[3px] ml-1 hover:text-new-blue hover:bg-slate-100 rounded-md"
                    :class="!newHot ? 'text-new-blue bg-slate-100' : ''" @click="Create">热门</a>
            </div>

            <div class="mt-3 bg-white rounded-md w-full">
                <div v-for="(item, index) in nowdata" :key="index"
                    class="flex box-border p-3 w-full items-center cursor-pointer rounded-md border-b border-b-gray-100 hover:bg-gray-150 hover:text-new-blue">
                    <img src="../../assets/images/img.webp" class="w-[70px] h-[70px] mr-4">
                    <div class="w-[485px]">
                        <div class="flex"><img src="../../assets/images/hot.svg" class="w-[21px] h-[23px] ml-[-4px]" v-if="item.hot === '1'">{{ item.title }}</div>
                        <div class="w-full truncate text-gray-400 text-[14px]c:\Users\94064\Downloads\ic_小眼睛_打开.svg">
                            {{ item.item }}</div>
                        <div class="w-full flex items-center text-gray-400 text-[14px]">
                            <div>{{ item.user }} ·</div>
                            <div class="w-[12px] h-[12px] rounded-full bg-red-400 mx-1"></div>
                            <div>{{ item.type }} · {{ item.time }}</div>
                            <div class="flex-1 flex justify-end items-center">
                                <img class="w-[14px] h-[14px]" src="../../assets/images/eye.svg" alt="">
                                <div>{{ item.read }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url("../../assets/icon/iconfont.css");

.border {
    border: 1px solid black;
}
</style>