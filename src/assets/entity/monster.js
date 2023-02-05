import { popup } from "../../main.js"
import { card,player } from "../game/gameplay.js"
class Monster {
    constructor(name,health) {
      this.name = name
      this.health = health
      this.maxHealth = health
      this.damage = 0
      this.percentHealth = (this.health/this.maxHealth)*100 //0-100%
    }
    monsterAttack() {
        this.damage = card.value.monster["damage"]
        player.value.health -= this.damage
        player.value.dead()
        popup("monsterAttack",1500)
    }
    getPercentHealth() {
      const health = (this.health/this.maxHealth)*100 
      return health <= 0 ? 0 : health
    }
    dead() {
      if ( this.health <= 0) {
        this.health = 0
        popup("monsterDead")
      }
    }
}
export { Monster }