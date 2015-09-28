class Actor{
  constructor(){
    this.alive = true;
    this.arms = 2;
    this.legs = 2;
    this.eyes = 2;
    this.health = 100;
  }
  checkHealth(){
    if(this.health<=0){
      this.alive = false
    }
  }
  isPunched(){
    this.health -= 10;
    checkHealth()
  }
  isKicked(){
    this.health -=20
    checkHealth()
  }
}


class Zombie extends Actor {
  this.color = 'green';
  punched(){
    super.isPunched()
    this.legs-=1
  }
}

class Human extends Actor{
  this.color = 'red';
  punched(){
    super.isPunched()
    this.arms-=1;
  }
}
