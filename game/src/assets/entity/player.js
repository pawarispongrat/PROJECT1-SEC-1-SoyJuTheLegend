import { popup,characters } from "../../main.js"
import path from "../path_data.json"
import { card,monster } from "../game/gameplay.js"
class Player {
    constructor() {
        this.name = ""
        this.character = "" 
        this.health = 0
        this.maxHealth = 0
        this.damage = 0
        this.luck = 0
        this.crit = 0
    }  
    playerAttack() {
        this.damage = card.value.player["damage"]
        monster.value.health -= this.damage
        monster.value.dead()
        popup("playerAttack",1500)
    }
    getImage() {
        return this.character.idle
    }
    getIcon() {
        return this.character.icon
    }
    getPercentHealth() {
        const health = (this.health/this.maxHealth)*100 
        return health <= 0 ? 0 : health
    }
    selectCharacter(characterIndex = 0) {
        const character = characters?.[characterIndex]
        if (!character) return
        this.character = character
        this.health = character["health"]
        this.maxHealth = character["health"]
        this.luck = character["luck"]
        this.crit = character["crit"]
    }
    dead() {
        if ( this.health <= 0) {
          this.health = 0
          popup("playerDead")
        }
    }  
}
export { Player }