class bird{
    constructor(x,y){
        var option = {
            restitution:0.6
          }
          this.body = Bodies.rectangle(x,y,30,30,option);
          this.width = 30;
          this.height = 30;
          World.add(world,this.body);
}

    display(){
        var pos = this.body.position
        pos.x =  mouseX
        pos.y =  mouseY

        var angle =this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        strokeWeight(4)
        stroke("green")
        fill("light_blue")

        rectMode(CENTER);

        rect(0,0,this.width,this.height);
        pop();
}

}