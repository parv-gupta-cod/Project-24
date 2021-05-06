class Paper{
    constructor(x,y,radius){
      var options={
          restitution:0.3,
          friction:0.5,
          density:0.2
      }

          this.body=Bodies.circle(x,y,radius,options)
          this.radius=radius
          this.image = loadImage("images/paper.png")
          World.add(world,this.body)
    }
    display(){
      var pos =this.body.position;
      translate(this.body.position.x, this.body.position.y);
      elipseMode(RADIUS);
      elipse(this.image, 0, 0, this.width, this.height);
    }
}