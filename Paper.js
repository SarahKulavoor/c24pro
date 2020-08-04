class Paper {
    constructor(x,y,r){
        var options= {
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body= Bodies.circle(x,y,r,options)
        this.r= r;
        World.add(world, this.body)
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
      }
}
