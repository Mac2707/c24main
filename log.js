class Log{
    constructor(x, y,height,angle) {
      var options = {
          'restitution':0.4,
          
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
        var angle =this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        rectMode(CENTER);
        

        rect(0,0,this.width,this.height);
        pop();
      
    }
  };