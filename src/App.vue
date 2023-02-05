<script setup>
import { init,show } from "./main.js"
import { 
  player,monster,level,turn,turns,win,wins,
  playerTurn,getCard,nextTurn,getLoser,getPreviousCard
} from "./assets/game/gameplay.js"
init()
const hover = "hover:-translate-y-1 hover:bg-teal-400 duration-300"
</script>

<template>
  <div class="screen w-screen h-screen overflow-x-hidden font-semibold flex flex-col justify-between text-white">
        <!-- HEADER TAB -->
        <div class="flex-none flex justify-between text-2xl p-8 bg-zinc-900 shadow-md z-10">
          <div>
            <p>LEVEL: {{ level }}</p>
            <p>TURN: {{ turns[turn] }}</p>
          </div>
          <div>[ PAUSE ]</div>
        </div>
        <!-- BODY GAME -->
        <div class="flex-1 flex justify-between items-center bg-map">
            <img class="h-1/2 -scale-x-100 ml-10" :class="show.playerAttack ? 'on-damage' : (turn === 1 ? 'character-turn' : '')" 
              src="./assets/background/icon/character-idle-2.png" alt="monster-idle"> 
            <img class="h-1/2 mr-10" :class="show.monsterAttack ? 'on-damage' : (turn === 0 ? 'character-turn' : '')" 
              src="./assets/background/icon/character-idle-2.png" alt="player-idle">
        </div>
        <!-- ACTION BAR -->
        <div class="flex flex-wrap items-center justify-center p-5 bg-zinc-900 max-lg:flex-col text-2xl">
          <!-- ATTACK BTN -->
          <button :class="show.attackButton ? hover : 'disabled'" @click="playerTurn()" class="flex-1 py-8 mr-5 w-full bg-emerald-500 text-white shadow-md spacing">ATTACK</button>
          <!-- MONSTER -->
          <div class="flex flex-1 py-3 w-full">
            <div class="shadow-md w-32 h-32  bg-zinc-800 flex justify-center">
              <img class="opacity-85" src="./assets/background/icon/character-icon-1.png" alt="monster-icon">
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
              <img class="opacity-85" src="./assets/background/icon/character-icon-2.png" alt="player-icon">
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
              <img class="w-full h-full" :src="`/src/assets/background/card/${getCard()}.png`" :alt="getCard()">
            </div>
            <button class="w-64 h-12 text-white spacing bg-emerald-600 shadow-lg text-2xl" @click="nextTurn()" :class="hover">NEXT TURN</button>
          </div>
          <div class="flex flex-col space-y-3" v-show="show.summaryAttack && win !== 2">
            <div class="flex text-sm shadow-xl bg-zinc-900 w-40 h-12 items-center justify-center " >
              <span :class="win === 0 ? 'text-red-500' : 'text-emerald-500'">{{ getLoser() }}</span>&nbsp;LOSE
              </div>
            <div class="flex justify-between max-w-2xl w-20 h-32 bg-white shadow-xl text-md text-zinc-700">
              <img class="w-full h-full" :src="`/src/assets/background/card/${getPreviousCard()}.png`" :alt=" getPreviousCard()">
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
    .screen,.spacing {
      font-family: "upheavtt";
      letter-spacing: 0.12em;
    }
    .bg-map {
      background-repeat: repeat-x;
      background-color: rgb(24,24,27);
      background-image: url('src/assets/background/main-map.png'); 
      background-size: contain;
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
</style>
