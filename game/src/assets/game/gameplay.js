import { Player } from "../entity/player.js"
import { popup,unpopup } from "../../main.js"
import { ref } from 'vue'

//DEFAULT DYNAMIC VALUE
const player = ref(new Player())
const monster = ref("")
const level = ref(1)
const turn = ref(0) //0 = PLAYER, 1 = MONSTER, 2 = SUMMARY
const win = ref(0)  //0 = PLAYER, 1 = MONSTER, 2 = DRAW
const card = ref({
    player: { name: "", damage: 0 },
    monster: { name: "", damage: 0 }
})
//ARRAY
const turns = [ "PLAYER","MONSTER", "SUMMARY" ]
const wins = [ "PLAYER","MONSTER","DRAW" ]
const cards = [ "A", "2","3","4","5","6","7","8","9","10","J","Q","K"]

function nextTurn() {
    if (turn.value === 0) {
        monsterTurn()
        turn.value++
    } else if (turn.value === 1) {
        summaryTurn()
        turn.value++        
    } else {
        //CARD SHOW
        unpopup("summaryAttack")
        unpopup("cardAttack")
        //ATTACK BUTTON
        popup("attackButton")
        if (win.value === 0) player.value.playerAttack()
        else if (win.value === 1) monster.value.monsterAttack()    
        turn.value = 0
    }
}
function playerTurn() {
    unpopup("attackButton")
    randomCard(card.value.player)
    popup("cardAttack")
}
function monsterTurn() {
    randomCard(card.value.monster)
    popup("cardAttack")
}

function summaryTurn() {
    const monsterDamage = card.value.monster["damage"]
    const playerDamage = card.value.player["damage"]

    if (playerDamage > monsterDamage) win.value = 0
    else if (monsterDamage > playerDamage) win.value = 1
    else win.value = 2
   
    popup("summaryAttack")
}

function getLoser() {
    return wins[win.value === 0 ? win.value+1 : win.value-1] // 0 PLAYER : 1 MONSTER
}
function getPreviousCard() {
    return getCardByNumber(win.value === 0 ? win.value+1 : win.value-1)
}
function getCardByNumber(entityNum) {
    if (entityNum === 0) return card.value.player["name"]
    else return card.value.monster["name"]
}
function getCard() {
    if (turn.value === 2) {
        if (win.value === 0) return getCardByNumber(0)
        else return getCardByNumber(1)
    } else {
        if (turn.value === 0) return getCardByNumber(0)
        else return getCardByNumber(1)
    }
}
function randomCard(entity) {
    const damage = Math.floor(Math.random()*cards.length) //0-12
    entity["name"] = cards[damage]
    entity["damage"] = damage+1
}

export { 
    monster,player,level,turn,turns,cards,card,wins,win,
    monsterTurn,playerTurn,getCard
    ,nextTurn,getPreviousCard,getLoser
}