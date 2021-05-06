class Dustbin{
    constructor(x,y,width,hight){
       var options = {
           isStatic: true
       }
    
       this.body=Bodies.rectangle(x,y,width,hight,options)
       this.hight=hight
       this.width=width
       World.add(world, this.body)
    }
    
    display(){
        var pos =this.body.position;
          rectMode(CENTER);
          fill("brown");
          rect(pos.x, pos.y, this.width, this.hight);
    }
    }