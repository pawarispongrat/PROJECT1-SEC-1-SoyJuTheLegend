import { popup } from "../../main.js"
import path from "../path_data.json"
import { card,player } from "../game/gameplay.js"
class Monster {
    constructor(name,health,image = "") {
      this.name = name
      this.health = health
      this.maxHealth = health
      this.image = image
      this.damage = 0
      this.percentHealth = (this.health/this.maxHealth)*100 //0-100%
    }
    monsterAttack() {
        this.damage = card.value.monster["damage"]
        player.value.health -= this.damage
        player.value.dead()
        popup("monsterAttack",1500)
    }
    getImage() {
        return path.monster.replace("%monster%",this.image)
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