import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  constructor() { }

  async moveBar() {        
    let maxWidth = window.innerWidth;
    // 3 rem es igual a 48px
    let barWidth = 48;
    while (true) {
      const bar = document.getElementById("bar");
      if(!bar)
        break;
    
      document.body.onpointermove = event => {
        const { clientX, clientY } = event;
    
        bar.animate({
            left: clientX < maxWidth - barWidth ? `${clientX}px` : maxWidth,
        }, {duration: 1, fill: "forwards"})      
      }
  
      await this.getFrameTime()
    }
  }

  async moveBall(ballRadius : number, initialX : number, initialY : number) {    
    let container =document.getElementById('general-container'); 
    if(!container)
      return;

    const ball = document.getElementById("ball");
      if(!ball)
        return;

    let maxWidth = container?.clientWidth;
    let maxHeight = container?.clientHeight;
    let step : number = 20;
    let currentYMovement = 1; // positivo --> abajo / negativo --> arriba
    
    let currentXMovement = 1; // positivo --> abajo / negativo --> arriba

    let currentY = initialY
    let currentX = initialX    
    
    while (true) {          

      currentXMovement = this.getCurrentDirection(currentXMovement,currentX, maxWidth);
      currentYMovement = this.getCurrentDirection(currentYMovement, currentY, maxHeight);

      currentX = this.move(currentX, currentXMovement, step);
      currentY = this.move(currentY, currentYMovement, step);

      ball.animate({        
        top: `${currentY}px`,
        left : `${currentX}px`
      }, {duration: 1, fill: "forwards"})      
      
  
      await this.getFrameTime()
    }
  }

  move(axis : number,direction: number, step : number){
    return axis + step * direction
  }

  getCurrentDirection(direction : number, axis :number, maxValue : number){        
    if(axis > maxValue)
      direction = -1;

    if(axis < 0)
      direction = 1;

    return direction;
  }

  getFrameTime(){
    return new Promise(r => setTimeout(r, 125));
  }
}
