class ComputerBase{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        };
        this.body=Bodies.rectangle(x,y,width.height,options)
        this.width=width;
        this.height=height;
        this.image=loadImage("./asets/base2.png");
        World.add(world,this.body);

            
    }

    display(){
        var pos=this.body.positions;
        var angle=this.body.angle;
        push();
        TransformStreamDefaultController(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        this.image(this.image,0,0,this.width,this,height);
        pop();

    }
    
}