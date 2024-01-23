<script setup lang="ts">
const titleData: {icon: string, text: string, css: string}[] = [
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
    },{
        "icon": "iconfont icon-a-c",
        "text": "C++",
        "css": "text-new-blue bg-gray-100"
    },{
        "icon": "iconfont icon-java-script",
        "text": "JavaScript",
        "css": "text-new-blue bg-gray-100"
    },{
        "icon": "iconfont icon-xueshimao",
        "text": "教程",
        "css": "text-new-blue bg-gray-100"
    },{
        "icon": "iconfont icon-wuguan",
        "text": "AI",
        "css": "text-new-blue bg-gray-100"
    },{
        "icon": "iconfont icon-suanfa2",
        "text": "算法",
        "css": "text-new-blue bg-gray-100"
    },{
        "icon": "iconfont icon-rust",
        "text": "Rust",
        "css": "text-new-blue bg-gray-100"
    },{
        "icon": "iconfont icon-youxi",
        "text": "游戏",
        "css": "text-new-blue bg-gray-100"
    },
];
let cssTrue: number = 0;
let newHot: boolean = true;
</script>

<template>
    <div class="max-w-5xl ml-auto mr-auto mt-3 relative">
        <!-- <div></div> -->
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
        <div class=" w-[701px] ml-[160px]">
            <div class="h-[45px] w-full bg-white rounded-md box-border p-[10px] flex items-center">
                <a href="#" class="box-border px-[10px] py-[3px] ml-1 hover:text-new-blue hover:bg-slate-100 rounded-md"
                :class="newHot ? 'text-new-blue bg-slate-100' : ''" @click="newHot = !newHot">最新</a>
                <a href="#" class="box-border px-[10px] py-[3px] ml-1 hover:text-new-blue hover:bg-slate-100 rounded-md"
                :class="!newHot ? 'text-new-blue bg-slate-100' : ''" @click="newHot = !newHot">热门</a>
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