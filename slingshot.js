class Sling{
    constructor(point1,body2){
        var options={
            pointA: point1,
            bodyB:body2,
            stiffness:0.05,
            lenght: 20
        }
        this.point=point1
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
          

    }
        

    fly(){
        this.sling.bodyB=null;
    }

    display(){
        
        if (this.sling.bodyB){
        var p1= this.pointA
        var p2=this.sling.bodyB.position
        strokeWeight(4)
        line(p1.x,p1.y,p2.x.p2.y)

    }
        
    }

    attached(body){
        this.sling.bodyB=body;

    }
}