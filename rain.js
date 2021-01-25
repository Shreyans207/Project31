class createRain{
    constructor(x,y,r){
        var options = {
        'friction': 0.1,
        'isStatic' : false
        }
        this.body = Bodies.circle(x,y,r/2,options);
     this.r = r;
     World.add(world,this.body)
    }
    display(){
        push();
        var pos = this.body.position;
        var angle = this.body.angle;
        translate(pos.x, pos.y);
        rotate(angle);
        ellispeMode(CENTER);
        strokeWeight(3);
        stroke("blue");
        fill("blue")
        ellipse( 0, 0, this.r);
        pop();
    }
}