<script setup>
import { init,show,playBtn,howToPlayBtn,backtoMain,characters,mainGame } from "./main.js"
import path from "./assets/path_data.json"
import { 
  player,monster,level,turn,turns,win,wins,
  playerTurn,getCard,nextTurn,getLoser,getPreviousCard
} from "./assets/game/gameplay.js"
init()
const hover = "hover:-translate-y-1 hover:bg-teal-400 duration-300"

function getCardSource(card) {
  return path.card.replace("%card%",card)
}
</script>

<template>
  <div v-show="show.mainBackground" class="w-screen h-screen bg-cover" :style="`background-image: url('${path.mainBackground}');`">
    <div v-show="show.mainMenu" class="w-full h-full ">
      <div class="flex-col flex items-center w-full h-full justify-center">
        <div class="flex justify-center w-1/2">
          <img :src="path.animal_battle" alt="animal-battle" class="w-full h-full">
        </div>
        <div
          class="w-2/12 m-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
          @click="playBtn()">
          <img :src="path.play" alt="play-btn" class="w-full h-full">
        </div>
        <div
          class="w-2/12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
          @click="howToPlayBtn()">
          <img :src="path.howToPlay" alt="how-to-play-btn" class="w-full h-full">
        </div>
      </div>
    </div>
  
    <div v-show="show.characterSelect" class="w-full h-full">
      <div class="flex-col flex items-center w-full h-full justify-center">
        <h1 class="text-5xl justify-center flex mb-8 text-current m04b choose-character">Choose Character</h1>
        <div class="flex flex-col items-center">
          <div class="flex items-center py-4  mb-8">
            <label class="text-2xl text-white shadow-table m04b" for="YOURNAME">Your Name:</label>
            <input v-model="player.name" class="bg-slate-50 border-4 border-slate-600 bg-opacity-65 py-3 px-20 text-center m04b" type="text" placeholder="YOURNAME" maxlength="18">
          </div>
        <div class="flex flex-wrap space-x-4">
          <div @click="mainGame()" class="pl-5 pr-6 pt-9 pb-9 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 bg-center bg-cover cursor-pointer"
              :style="`background-image: url('${path.bgCard1}')`">
            <h2 class="justify-center flex text-3xl text-black m04b">
              <span class="character-name text-white">Bearior</span>
            </h2>
            <img :src="path.beariorIcon" alt="" class="w-1/3" style="width: 256px; height: 256px;">
            <div class="justify-center flex flex-col m04b">
              <table class="shadow-table text-center text-white">
                <tr>
                  <td>HP :</td>
                  <td>{{   characters[1].health }}</td>
                </tr>
                <tr>
                  <td>CRIT :</td>
                  <td>{{ characters[1].crit }}</td>
                </tr>
                <tr>
                  <td>LUCK :</td>
                  <td>{{ characters[1].luck }}</td>
                </tr>
              </table>
            </div>
          </div>
  
          <div class="pl-5 pr-6 pt-9 pb-9 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 bg-center bg-cover cursor-pointer"
            :style="`background-image: url('${path.bgCard2}')`">
            <h2 class="justify-center flex text-3xl text-black m04b">
              <span class="character-name text-white">Raccoon</span>
            </h2>
            <img :src="path.foxsterIcon" alt="" class="w-1/3" style="width: 256px; height: 256px;">
            <div class="justify-center flex flex-col m04b">
              <table class="shadow-table text-center text-white" >
                <tr>
                  <td>HP :</td>
                  <td>{{   characters[2].health }}</td>
                </tr>
                <tr>
                  <td>CRIT :</td>
                  <td>{{   characters[2].crit }}</td>
                </tr>
                <tr>
                  <td>LUCK :</td>
                  <td>{{   characters[2].luck }}</td>
                </tr>
              </table>
            </div>
          </div>
  
          <div class="pl-5 pr-6 pt-9 pb-9 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 bg-center bg-cover" 
              :style="`background-image: url('${path.bgCard3}')`"
              style="cursor: pointer;">
            <h2 class="justify-center flex text-3xl text-black m04b">
              <span class="character-name text-white">Foxster</span>
            </h2>
            <img :src="path.foxsterIcon" alt="" class="w-1/3" style="width: 256px; height: 256px;">
            <div class="justify-center flex flex-col m04b">
              <table class="shadow-table text-center text-white" >
            
                <tr>
                  <td>HP :</td>
                  <td>{{   characters[0].health }}</td>
                </tr>
                <tr>
                  <td>CRIT :</td>
                  <td>{{   characters[0].crit }}</td>
                </tr>
                <tr>
                  <td>LUCK :</td>
                  <td>{{   characters[0].luck }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div
          class="w-1/12  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer m-4"
          @click="backtoMain()">
          <img :src="path.back" alt="" class="w-full h-full">
        </div>
        </div>
      </div>
    </div>
    <!-- how to play -->
      <div class="flex-col flex items-center w-full h-full justify-center" v-show="show.howToPlay">
        <div class="justify-center flex">
          <img :src="path.howToPlay" alt="" class="w-full h-full">
        </div>
        <div class="flex flex-col justify-center p-[3rem] w-[480px] h-[500px]" :style="`background-image: url('${path.howToPlayBg}'); background-position: center; background-repeat: no-repeat; `">
        <ul class="text-black text-4xl font-semibold tracking-wider overflow-y-scroll thai-pix stroke-text">
          <li>* จะมีตัวละครให้ผู้เล่นเลือกเล่นทั้งหมด 3 ตัว โดยแต่ละตัวละครจะมีค่า Stat ที่ต่างกันไป ประกอบด้วย ค่าพลังชีวิต ค่าอัตราคริ ค่าโชคชะตา</li>
          <li>* หลังจากเลือกตัวละครเสร็จ ก็จะได้ต่อสู้กับมอนสเตอร์ โดยผู้เล่นจะต้องกด Attack ซึ่งจะมีการสลับกันสุ่มไพ่ของแต่ละฝั่งเพื่อนำค่าของไพ่มาเปรียบเทียบกัน</li>
          <li>* ไพ่ที่สุ่มจากน้อยไปมากจะประกอบด้วย A 2 3 4 5 6 7 8 9 10 J Q K</li>
          <li>* ถ้าฝั่งไหนมีค่ามากกว่าก็จะมีผลแพ้ชนะโดยจะมีผลต่อค่าพลังชีวิตของตัวละครแต่ละฝั่ง ถ้าหากไพ่มีการเสมอกันก็ไม่เป็นผล</li>
          <li>* เลเวลของเกมจะเพื่อขึ้นเรื่อยๆเมื่อสามารถกำจัดมอนสเตอร์ได้ และจะมีมอนสเตอร์เกิดมาใหม่</li>
          <li>* เกมนี้จะจบก็ต่อเมื่อผู้เล่นมีค่าพลังชีวิตเป็นศูนย์ เกมก็จะแสดงผลเลเวลสูงสุดที่ผู้เล่นเล่นถึง</li>
        </ul>
        </div>
        <div class="w-1/12 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer" @click="backtoMain()"  >
          <img :src="path.back" alt="back-btn" class="w-full h-full" >
        </div>
      </div>
    </div>
    <div v-show="show.mainGame" class="screen w-screen h-screen overflow-x-hidden font-semibold flex flex-col justify-between text-white">
        <!-- HEADER TAB -->
        <div class="flex-none flex justify-between text-2xl p-8 bg-zinc-900 shadow-md z-10">
          <div>
            <p>LEVEL: {{ level }}</p>
            <p>TURN: {{ turns[turn] }}</p>
          </div>
          <div>[ PAUSE ]</div>
        </div>
        <!-- BODY GAME -->
        <div class="flex-1 flex justify-between items-center bg-contain bg-no-repeat bg-center bg-[#18181b]" :style="`background-image: url('${path.mainGameBg}')`">
            <img class="h-1/2 -scale-x-100 ml-10" :class="show.playerAttack ? 'on-damage' : (turn === 1 ? 'character-turn' : '')" 
              :src="path.foxsterIdle" alt="monster-idle"> 
            <img class="h-1/2 mr-10" :class="show.monsterAttack ? 'on-damage' : (turn === 0 ? 'character-turn' : '')" 
              :src="path.foxsterIdle" alt="player-idle">
        </div>
        <!-- ACTION BAR -->
        <div class="flex flex-wrap items-center justify-center p-5 bg-zinc-900 max-lg:flex-col text-2xl">
          <!-- ATTACK BTN -->
          <button :disabled="!show.attackButton" @click="playerTurn()" class="flex-1 py-8 mr-5 w-full bg-emerald-500 text-white shadow-md spacing disabled:bg-zinc-600" disabled>ATTACK</button>
          <!-- MONSTER -->
          <div class="flex flex-1 py-3 w-full">
            <div class="shadow-md w-32 h-32  bg-zinc-800 flex justify-center">
              <img class="opacity-85" :src="path.beariorIcon" alt="monster-icon">
            </div>
            <div class="flex-1 grid space-y-1 items-center ml-5">
              <p class="flex flex-col">
                <span class="font-bold text-red-500 drop-shadow-lg" v-text="monster.name"></span>
                <div>
                  <span>{{ `HP: ${monster.health}` }}</span>
                  <span v-show="show.playerAttack" class="text-red-600">{{ `-${player.damage}` }}</span>
                  <span>{{ `/${monster.maxHealth}` }} </span>
                </div>
              </p>
              <!-- HEALTH BAR -->
              <div class=" bg-zinc-800 h-7 shadow-md mr-3">
                <div class="bg-red-500 h-7 mr-3" :style="`width: ${monster.getPercentHealth()}%`"></div>
              </div>            
            </div> 
          </div>
          <!-- VS -->
          <p>VS</p>  
          <!-- PLAYER -->
          <div class="flex flex-1 w-full py-3 md:ml-5">    
            <div class="shadow-md w-32 h-32 bg-zinc-800">
              <img class="opacity-85" :src="path.foxsterIcon" alt="player-icon">
            </div>            
            <div class="flex-1 grid space-y-1 items-center ml-5">
              <p class="flex flex-col">
                <span class="font-bold text-emerald-500 drop-shadow-lg" v-text="player.name"></span>
                <div>
                  <span>{{ `HP: ${player.health}` }}</span>
                <span v-show="show.monsterAttack" class="text-red-600">{{ `-${monster.damage}` }}</span>
                <span>{{`/${player.maxHealth} (${player.character})` }} </span>
                </div>
              </p>
              <!-- HEALTH BAR -->
              <div class="bg-zinc-800 h-7 shadow-md mr-3">
                <div class="bg-emerald-400 h-7 mr-3" :style="`width: ${player.getPercentHealth()}%`"></div>
              </div>            
            </div>
          </div>          
    </div>
    <!-- CARD -->
    <div class="flex">
      <div v-show="show.cardAttack || show.summaryAttack" class="absolute inset-0 flex items-center justify-center bg-zinc-700 bg-opacity-50 space-x-3 " >
          <div class="flex flex-col space-y-3" >
            <div class="flex text-2xl shadow-xl bg-zinc-900 w-64 h-16 items-center justify-center" >
              <div v-show="show.summaryAttack">
                <span :class="win === 0 ? 'text-emerald-500' : ( win === 2 ? 'text-emerald-500' : 'text-red-500')">{{ wins[win] }}</span>&nbsp;<span v-show="win !== 2">WIN</span>
              </div>
              <div v-show="!show.summaryAttack">
                <span :class="turn === 0 ? 'text-emerald-500' : 'text-red-500'">{{ turns[turn] }}</span>&nbsp;CARD
              </div>
            </div>
            <div class="flex justify-between  max-w-2xl w-64 h-96 bg-gray shadow-xl text-3xl bg-white text-zinc-700" >
              <img class="w-full h-full" :src="getCardSource(getCard())" :alt="getCard()">
            </div>
            <button class="w-64 h-12 text-white spacing bg-emerald-600 shadow-lg text-2xl" @click="nextTurn()" :class="hover">NEXT TURN</button>
          </div>
          <div class="flex flex-col space-y-3" v-show="show.summaryAttack && win !== 2">
            <div class="flex text-sm shadow-xl bg-zinc-900 w-40 h-12 items-center justify-center " >
              <span :class="win === 0 ? 'text-red-500' : 'text-emerald-500'">{{ getLoser() }}</span>&nbsp;LOSE
              </div>
            <div class="flex justify-between max-w-2xl w-20 h-32 bg-white shadow-xl text-md text-zinc-700">
              <img class="w-full h-full" :src="getCardSource(getPreviousCard())" :alt=" getPreviousCard()">
            </div>
          </div>
      </div>
    </div>
  </div>  
</template>

<style scoped>
    @font-face {
      font-family: "upheavtt";
      src: url("./assets/font/upheavtt.ttf") format("truetype");
    }
    @font-face {
      font-family: "m04b";
      src: url(./assets/font/m04b.ttf);
    }

    @font-face {
      font-family: "thai-pix";
      src: url(./assets/font/2005_iannnnnAMD.ttf);
    }
    .thai-pix { font-family: "thai-pix"; 
                font-size: 10000px;
  
  }
    .m04b { font-family: "m04b", "thai-pix"; }
    .screen,.spacing {
      font-family: "upheavtt";
      letter-spacing: 0.12em;
    }
    .character-turn {
      filter: drop-shadow(0.3rem 0 0 rgba(255,255,255,0.5)) 
        drop-shadow(0 0.3rem 0 rgba(255,255,255,0.5))
        drop-shadow(-0.3rem 0 0 rgba(255,255,255,0.5)) 
        drop-shadow(0 -0.3rem 0 rgba(255,255,255,0.5));
    }
    .on-damage {
      filter: drop-shadow(0.3rem 0 0 rgb(239,68,68)) 
        drop-shadow(0 0.3rem 0 rgb(239,68,68))
        drop-shadow(-0.3rem 0 0 rgb(239,68,68)) 
        drop-shadow(0 -0.3rem 0 rgb(239,68,68));
    }
    .stroke-text {
      filter: drop-shadow(0.5px 0 0 white) drop-shadow(0 0.5px 0 white) drop-shadow(-0.5px 0 0 white) drop-shadow(0 -0.5px 0 white);
    }

    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: black; 
      border-radius: 10px;
    }
    .choose-character {
      filter: drop-shadow(1px 0 0 black) 
        drop-shadow(0 1px 0 black)
        drop-shadow(-1px 0 0 black) 
        drop-shadow(0 -1px 0 black);
    }
    .shadow-table {
      filter: drop-shadow(3px 0 0 black) drop-shadow(0 3px 0 black) drop-shadow(-3px 0 0 black) drop-shadow(0 -3px 0 black);
    }
    .character-name {
      filter: drop-shadow(4px 0 0 black) drop-shadow(0 4px 0 black) drop-shadow(-4px 0 0 black) drop-shadow(0 -4px 0 black);     
    }
</style>
