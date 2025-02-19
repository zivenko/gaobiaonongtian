<script setup>
import { ref } from 'vue'

const screen = ref()
const subcontainer = ref()

const show = (name) => {
    console.log(name);
    screen.value.style.backgroundImage = 'url(' + new URL(`/src/assets/${name}.png`, import.meta.url).href + ')' 
}

const showBg = () => {
        subcontainer.value.style.backgroundImage = !subcontainer.value.style.backgroundImage ? 
                                                        'url(' + new URL(`/src/assets/高标准农田-1首页-行业背景.jpg`, import.meta.url).href + ')'
                                                        : ''

        
}

const hide = () => {
    screen.value.style.backgroundImage = 'none'
}
</script>

<template>
  <div  ref="subcontainer" class="subcontainer">

    <div ref="screen" class="screen"></div>

    <!-- <button class="clickable-button b0" @click="showBg"></button> -->

    <button class="clickable-button b b2" @mouseenter="show('虫情')" @mouseleave="hide"></button>
    <button class="clickable-button b b4" @mouseenter="show('土壤')" @mouseleave="hide"></button>
    <button class="clickable-button b b1" @mouseenter="show('无人机1')" @mouseleave="hide"></button>
    <button class="clickable-button b b3" @mouseenter="show('一体机')" @mouseleave="hide"></button>
    
  </div>
</template>

<style scoped>
.subcontainer {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;

    background-size: cover;
    background-position: center;
}

 /* 荧幕居中 */
 .subcontainer .screen {
    position: absolute;
    width: 30%;
    height: 29%;
    top: 15%;
    left: 3%;
    background-size: cover;
    background-position: center;
}

.b {
    position: absolute;
    width: 3.5%;
    height: 6.5%;
    z-index: 12;
}

.b0 {
    width: 10%;
    height: 9%;
    top: 47%;
    left: 0%;
}

.b1 {
    bottom: 14%;
    left: 12%;
}
.b2 {
    bottom: 32%;
    left: 23%;
}
.b3 {
    bottom: 19%;
    left: 24.3%;
}
.b4 {
    bottom: 15.2%;
    left: 42.5%;
}
</style>