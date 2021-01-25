class Man{
    constructor(x,y,r){
        var options = {
        'isStatic' : true
        }
        this.body = Bodies.circle(x,y,r/2,options);
        this.r = r;
        this.image = loadImage("Man/walking_1.png","Man/walking_2.png","Man/walking_3.png","Man/walking_4.png","Man/walking_5.png","Man/walking_6.png","Man/walking_7.png","Man/walking_8.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        push();
        imageMode(CENTER);
        image(this.image, pos.x,pos.y, r);
        pop();
      }
}
