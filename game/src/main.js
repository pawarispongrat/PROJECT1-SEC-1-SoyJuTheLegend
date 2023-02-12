import { Character } from "./assets/entity/character.js"
import { Monster } from "./assets/entity/monster.js"
import { player,monster } from "./assets/game/gameplay.js"
import { ref } from "vue"

let monsters = []
let characters = []
const show = ref({
    //ELEMENT
    cardAttack: false,
    attackButton: true,
    summaryAttack: false,
    monsterDamage: false,
    playerDamage: false,
    playerDead: false,
    //BG
    mainBackground: true,
    howToPlay: false,
    mainMenu: true,
    characterSelect: false,
    mainGame: false,
    nameEmptyAlert: false
})

function setShow(id,isShow) {
    show.value[id] = isShow
}

function playBtn() {
    setShow("characterSelect",true)
    setShow("mainMenu",false)
}

function howToPlayBtn() {
    setShow("howToPlay",true)
    setShow("mainMenu",false)
}
function backtoMain(){
    setShow("howToPlay",false)
    setShow("characterSelect",false)
    setShow("mainMenu",true)
}

function mainGame(character=0){
    setShow("characterSelect",false)
    setShow("mainMenu",false)
    setShow("howToPlay",false)
    setShow("mainBackground",false)
    setShow("mainGame",true)
    player.value.selectCharacter(character)
}

function emptyName() {
    popup("nameEmptyAlert",3000)
}

function unpopup(id,delay) {
    setShow(id,false)
    if (delay) setTimeout(() => setShow(id,true),delay)
}
function popup(id,delay) {
    setShow(id,true)
    if (delay)  setTimeout(() => setShow(id,false),delay)
}

function init() {
    monsters = [
        new Monster("Rapter",100,"rapter"),
        new Monster("Rapter",100,"rapter")
    ]
    characters = [
        new Character("Foxster",250,50,99),
        new Character("Bearior",300,50,50),
        new Character("Raccoon",250,99,50)        
    ]


    // player.value.name = "RewLegendary"
    // player.value.selectCharacter(0)
    monster.value = monsters[0]
}

export { 
    unpopup,popup, init,characters,monsters,show,playBtn,howToPlayBtn,backtoMain,mainGame,emptyName
}