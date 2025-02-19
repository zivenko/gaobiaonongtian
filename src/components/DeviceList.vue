<script setup>
import { ref } from 'vue'

const screen = ref(null)

const cases = [
    '气象仪',
    '营养检测仪',
    '虫情灯',
    '水肥一体机'
]

let idx = ref(0)
console.log(idx, '33333331');

const add = () => {
    idx.value = (idx.value + 1) % 4
       
    if(screen.value)
        screen.value.style.backgroundImage = 'url(' + new URL(`/src/assets/设备清单/${cases[idx.value]}.png`, import.meta.url).href + ')' 

}
const sub = () => {

        idx.value = (idx.value - 1) >= 0 ? idx.value - 1 : 3 
       
       if(screen.value)
           screen.value.style.backgroundImage = 'url(' + new URL(`/src/assets/设备清单/${cases[idx.value]}.png`, import.meta.url).href + ')' 
       
       console.log(idx);
   
}
   

</script>

<template>
  <div  ref="subcontainer" class="subcontainer">

        <div ref="screen" class="screen">

        </div>

    
        <!-- <div class="right"></div> -->
        <button  class="bg clickable-button" @click="sub()"></button>
        <button class="value clickable-button" @click="add()"></button>
  </div>

</template>

<style scoped>
.subcontainer {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;

    
}

 /* 荧幕居中 */
.subcontainer .screen {
    position: absolute;
    width: 80%;
    height: 70%;
    top: 10%;
    left: 8%;
    background-image: url('@/assets/设备清单/气象仪.png');
    background-size: cover;
    background-position: center;
    border-radius: 3%;
}

.bg {
    position: absolute;
    width: 15%;
    height: 8%;
    top: 84%;
    left: 28%;
    border: 0;
    background-color: rgba(0, 0, 0, 0);
    background-image: url('@/assets/设备清单/前一个按钮.png');
    background-size: cover;
    background-position: center;
}

.value {
    position: absolute;
    width: 15%;
    height: 8%;
    top: 84%;
    left: 55%;
    border: 0;
    background-color: rgba(0, 0, 0, 0);
    background-image: url('@/assets/设备清单/后一个.png');
    background-size: cover;
    background-position: center;
}

.right {
    position: absolute;
    width: 9%;
    height: 21.5%;
    top: 43.5%;
    right: 0%;
    background-image: url('@/assets/设备清单/右侧按钮.png');
    background-size: cover;
    background-position: center;
}

</style>