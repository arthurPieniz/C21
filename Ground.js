class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body)
    }

    display(w,h){
        fill(0,0,255)
        rect(this.body.position.x,this.body.position.y,w,h)
    }




}