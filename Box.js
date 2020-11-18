class Box {
    constructor(x, y, width, height){
      var options = {
        density : 0.1,
        restitution : 0.8,
        friction : 0.5,
        isStatic : false

    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.color = color(random(200,255),random(200,255),random(20,220));
    this.visibility= 255
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
  if(this.body.speed>4||(this.visibility<255)){
    this.visibility-=5 
  }

  if(this.visibility<0){
    World.remove(world,this.body)
  }
    push();
    rectMode(CENTER);
    fill(200,200,200,this.visibility);
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }

  };