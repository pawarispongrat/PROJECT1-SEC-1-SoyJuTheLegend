<script setup>
import { ref } from 'vue';
function alertButton() {
  return alert("Hello")
}

const showMainMenu = ref(true)
const showCharacterSelect = ref(false)

const startGame = (page) => {
  showCharacterSelect = !showCharacterSelect
  showMainMenu = !show
}

</script>

<template>
  <div class="w-screen h-screen" style="background-image: url(https://wallpaperaccess.com/full/1089608.png); background-size: cover;">
    <div v-show="showMainMenu" class="w-full h-full" style="font-family: m04b;">
      <div class="flex-col flex items-center w-full h-full justify-center">
        <!-- <h1 class="text-7xl justify-center flex text-center text-indigo-500">Animal Fight</h1> -->
        <div class="flex justify-center w-1/2">
          <img src="./assets/image/animal_cattle.png" alt="" class="w-full h-full">
        </div>
        <div class="w-2/12 m-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" 
        style="cursor: pointer;" @click="showCharacterSelect = !showCharacterSelect; showMainMenu = !showMainMenu">
          <img src="./assets/image/PLAY3.png" alt="" class="w-full h-full">
        </div>
        <div class="w-2/12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" 
        style="cursor: pointer;">
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
      </div>
    </div>

    <div v-show="false" class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
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
</style>
