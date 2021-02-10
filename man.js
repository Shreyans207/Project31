class Man{
    constructor(x,y,r){
        var options = {
        'isStatic' : true
        }
        this.body = Bodies.circle(x,y,r/2,options);
        this.r = r;
        this.image = loadImage("Man/walking_1.png")
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        push();
        imageMode(CENTER);
        image(this.image, pos.x,pos.y,300,300);
        pop();
      }
}
