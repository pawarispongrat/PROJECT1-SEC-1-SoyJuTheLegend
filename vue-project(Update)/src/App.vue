<script setup>
import { ref } from 'vue';
function alertButton() {
  return alert("Hello")
}

const showMainMenu = ref(true)
const showCharacterSelect = ref(false)
const showHowToPlay = ref(false)
const back = ref(false)



</script>

<template>
  <div class="w-screen h-screen" style="background-image: url(https://wallpaperaccess.com/full/1089608.png); background-size: cover;">
    <div v-show="showMainMenu" class="w-full h-full " >
      <div class="flex-col flex items-center w-full h-full justify-center">
        <!-- <h1 class="text-7xl justify-center flex text-center text-indigo-500">Animal Fight</h1> -->
        <div class="flex justify-center w-1/2">
          <img src="./assets/image/animal_cattle.png" alt="" class="w-full h-full">
        </div>
        <div class="w-2/12 m-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer" 
         @click="showCharacterSelect = !showCharacterSelect; showMainMenu = !showMainMenu">
          <img src="./assets/image/PLAY3.png" alt="" class="w-full h-full">
        </div>
        <div class="w-2/12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer" 
         @click="showHowToPlay = !showHowToPlay; showMainMenu = !showMainMenu">
          <img src="./assets/image/howtoplay.png" alt="how-to-play" class="w-full h-full">
        </div>
      </div>
    </div>

    <div v-show="showCharacterSelect" class="w-full h-full">
      <div class="flex-col flex items-center w-full h-full justify-center">
        <h1 class="text-5xl justify-center flex mb-8" 
        style="font-family: m04b;">Choose Character</h1>
        <div class="flex flex-wrap justify-evenly">
          <div class="pl-5 pr-6 pt-9 pb-9 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 bg-[url('./assets/image/card1.png')] bg-center bg-cover" 
          style="cursor: pointer;">
            <h2 class="justify-center flex text-3xl text-black" 
            style="font-family: m04b;"><span style="text-shadow: -3px -3px 0 snow, 3px -3px 0 snow, -3px 3px 0 snow, 3px 3px 0 snow;">Bearior</span></h2>
            <img src="./assets/image/char1.png" alt="" 
            class="w-1/3" style="width: 256px; height: 256px;">
            <div  class="justify-center flex flex-col" style="font-family: m04b;">
              <table class="text-center">
                <tr>
                  <td>HP :</td>
                  <td>80000</td>
                </tr>
                <tr>
                  <td>CRIT :</td>
                  <td>-100</td>
                </tr>
                <tr>
                  <td>LUCK :</td>
                  <td>-10</td>
                </tr>
              </table>
            </div>
          </div>

          <div class="pl-5 pr-6 pt-9 pb-9 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 bg-[url('./assets/image/card3.png')] bg-center bg-cover"
          style="cursor: pointer;">
            <h2 class="justify-center flex text-3xl text-black " 
            style="font-family: m04b;"><span style="text-shadow: -3px -3px 0 snow, 3px -3px 0 snow, -3px 3px 0 snow, 3px 3px 0 snow;">Racoon</span></h2>
            <img src="./assets/image/Sprite-0001.png" alt="" 
            class="w-1/3" style="width: 256px; height: 256px;">
            <div class="justify-center flex flex-col" style="font-family: m04b;">
              <table class="text-center">
                <tr>
                  <td>HP :</td>
                  <td>80000</td>
                </tr>
                <tr>
                  <td>CRIT :</td>
                  <td>-100</td>
                </tr>
                <tr>
                  <td>LUCK :</td>
                  <td>-10</td>
                </tr>
              </table>
            </div>
          </div>

          <div class="pl-5 pr-6 pt-9 pb-9 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 bg-[url('./assets/image/card2.png')] bg-center bg-cover" 
          style="cursor: pointer;">
            <h2 class="justify-center flex text-3xl text-black" 
            style="font-family: m04b;"><span style="text-shadow: -3px -3px 0 snow, 3px -3px 0 snow, -3px 3px 0 snow, 3px 3px 0 snow;">Foxster</span></h2>
            <img src="./assets/image/wolf.png" alt="" 
            class="w-1/3" style="width: 256px; height: 256px;">
            <div class="justify-center flex flex-col" 
            style="font-family: m04b;">
              <table class="text-center">
                <tr>
                  <td>HP :</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>CRIT :</td>
                  <td>0.2</td>
                </tr>
                <tr>
                  <td>LUCK :</td>
                  <td>3</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="w-1/12  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer m-4" @click="back = !back; showCharacterSelect = !showCharacterSelect ; showMainMenu = ! showMainMenu"  >
        <img src="./assets/image/back.png" alt="" class="w-full h-full">
      </div>
      </div>
    </div>

    <div v-show="false " class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
        <div class="max-w-2xl p-6 w-96 bg-white shadow-xl">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl">Model Title</h3>
          </div>
          <div class="mt-4">
            <p class="mb-4 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus qui nihil laborum quaerat blanditiis nemo explicabo
              voluptatum ea architecto corporis quo vitae, velit temporibus
              eaque quisquam in quis provident necessitatibus.
            </p>
            <button @click="isOpen = false" class="px-6 py-2 text-teal-800 border border-teal-600 rounded">
              Cancel
            </button>
            <button class="px-6 py-2 ml-2 text-blue-100 bg-teal-600 rounded">
              Save
            </button>
          </div>
        </div>
      </div>
      <!-- how to play -->
    <div class="flex-col flex items-center w-full h-full justify-center" v-show="showHowToPlay">
      <div class="justify-center flex ">
        <img src="./assets/image/howtoplay.png" alt="" class="w-full h-full">
      </div>
      <div class="imageContainer justify-center p-10" style="width: 480px; height: 500px;">
       <ol class="text-black text-2xl font-semibold tracking-wider leading-snug" style="font-family: thai-pix;">
        <li>- จะมีตัวละครให้ผู้เล่นเลือกเล่นทั้งหมด 3 ตัว โดยแต่ละตัวละครจะมีค่า Stat ที่ต่างกันไป ประกอบด้วย ค่าพลังชีวิต ค่าอัตราคริ ค่าโชคชะตา</li>
        <li>- หลังจากเลือกตัวละครเสร็จ ก็จะได้ต่อสู้กับมอนสเตอร์ โดยผู้เล่นจะต้องกด Attack ซึ่งจะมีการสลับกันสุ่มไพ่ของแต่ละฝั่งเพื่อนำค่าของไพ่มาเปรียบเทียบกัน</li>
        <li>- ไพ่ที่สุ่มจากน้อยไปมากจะประกอบด้วย A 2 3 4 5 6 7 8 9 10 J Q K</li>
        <li>- ถ้าฝั่งไหนมีค่ามากกว่าก็จะมีผลแพ้ชนะโดยจะมีผลต่อค่าพลังชีวิตของตัวละครแต่ละฝั่ง ถ้าหากไพ่มีการเสมอกันก็ไม่เป็นผล</li>
        <li>- เลเวลของเกมจะเพื่อขึ้นเรื่อยๆเมื่อสามารถกำจัดมอนสเตอร์ได้ และจะมีมอนสเตอร์เกิดมาใหม่</li>
        <li>- เกมนี้จะจบก็ต่อเมื่อผู้เล่นมีค่าพลังชีวิตเป็นศูนย์ เกมก็จะแสดงผลเลเวลสูงสุดที่ผู้เล่นเล่นถึง</li>
       </ol>
      </div>
      <div class="w-1/12  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer" @click="back = !back; showHowToPlay = !showHowToPlay ; showMainMenu = ! showMainMenu"  >
        <img src="./assets/image/back.png" alt="" class="w-full h-full" >
      </div>
    </div>
    </div>
    
</template>

<style scoped>
  @font-face {
    font-family: "m04";
    src: url(./fonts/m04.TTF);
  }

  @font-face {
    font-family: "m04b";
    src: url(./fonts/m04b.TTF);
  }

  @font-face {
    font-family: "thai-pix";
    src: url(./fonts/2005_iannnnnAMD.ttf);
  }

  .imageContainer{
       width: 750px;
       height: 750px; 
       background-repeat: no-repeat;
       background-position-x: center;
       background-image: url(./assets/image/bg2.png);
  }
  br {
  margin: px;
  display: block;
  font-size: 24%;
}
  
</style>
