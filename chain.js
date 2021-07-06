class Chainclass{
constructor(bodyA,bodyB){

var options={
bodyA : bodyA,
bodyB : bodyB,
stiffness:0.3,
length:80,
}

this.chain = Constraint.create(options);
World.add (world,this.chain) ;

}
display(){

var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position; 
stroke("brown")
strokeWeight(4)   
line(pointA.x,pointA.y,pointB.x,pointB.y);

}



}