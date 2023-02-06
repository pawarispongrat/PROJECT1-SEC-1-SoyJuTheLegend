import { Character } from "./assets/entity/character.js"
import { Monster } from "./assets/entity/monster.js"
import { player,monster } from "./assets/game/gameplay.js"
import { ref } from "vue"

let monsters = []
let characters = []
const show = ref({
    cardAttack: false,
    attackButton: true,
    summaryAttack: false,
    monsterDamage: false,
    playerDamage: false
})

function setShow(id,isShow) {
    show.value[id] = isShow
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
        new Monster("Monster I",100,10),
        new Monster("Monster I",100,10)
    ]
    characters = [
        new Character("Foxster",250,3,0),
        new Character("Bearior",500,1,1),
        new Character("Raccoon",250,0,3)        
    ]

    player.value.name = "RewLegendary"
    monster.value = monsters[0]
    player.value.selectCharacter(0)
}

export { 
    unpopup,popup, init,characters,monsters,show
}