class ComputerArcher {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/computerArcher.png");
      Matter.Body.setAngle(this.body,-PI/2);
      World.add(world, this.body);
    }
  
   display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      if (keyIsDown(LEFT_ARROW) && angle>-1.9) {
        angle-= 0.01;
        Matter.Body.setAngle(this.body, angle);
      }
  
      if (keyIsDown(RIGHT_ARROW) && angle<-1.2) {
          angle+= 0.01;
          Matter.Body.setAngle(this.body, angle);
        }
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  