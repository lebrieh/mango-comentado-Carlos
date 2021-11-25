class Launcher {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.launcher = Constraint.create(options);
        ///////////////////////////////////////////
        // MISS B: no existe "this.sling" en este código :o qué debería de ser? n.n 
        World.add(world, this.sling);
    }

    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        // MISS B: esta linea sobraba: image(this.launcher, 200, 20);
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke ("#301608");
            strokeWeight(4);
            line(pointA.x-25,pointA.y, pointB.x+30,pointB.y);
            pop();
        }
    }
    
}
