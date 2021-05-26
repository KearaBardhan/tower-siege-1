const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, polygonImg

function preload(){
    polygonImg=loadImage("polygon.png")

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    stand1=new Ground (600,400,250,10)
    stand2=new Ground(880,300,250,10)
    polygon=Bodies.circle(140,380,50)
    sling=new Sling({x: 140, y:380}, polygon)


    block1= new Box(520,365,40,60)
    block2= new Box(560,365,40,60)
    block3= new Box(600,365,40,60)
    block4= new Box(640,365,40,60)
    block5= new Box(680,365,40,60)

    block6=new Box(540,305,40,60)
    block7=new Box(580,305,40,60)
    block8=new Box(620,305,40,60)
    block9=new Box(660,305,40,60)

    block10=new Box(560,245,40,60)
    block11=new Box(600,245,40,60)
    block12=new Box(640,245,40,60)

    block13= new Box(800,265,40,60)
    block14= new Box(840,265,40,60)
    block15= new Box(880,265,40,60)
    block16= new Box(920,265,40,60)
    block17= new Box(960,265,40,60)

    block18=new Box(820,205,40,60)
    block19=new Box(860,205,40,60)
    block20=new Box(900,205,40,60)
    block21=new Box(940,205,40,60)

    block22=new Box(840,145,40,60)
    block23=new Box(880,145,40,60)
    block24=new Box(920,145,40,60)
}

   

function draw(){
    background(255)
    text(mouseX+ ","+ mouseY, 200,200)
    ground.display()
    stand1.display()
    stand2.display()

    imageMode(CENTER)
    image(polygonImg, polygon.position.x, polygon.position.y, 50,50)

    

    fill("lightblue")
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()

    fill("pink")
    block6.display()
    block7.display()
    block8.display()
    block9.display()

    fill("purple")
    block10.display()
    block11.display()
    block12.display()

    fill("lightblue")
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    block17.display()

    fill("pink")
    block18.display()
    block19.display()
    block20.display()
    block21.display()

    fill("purple")
    block22.display()
    block23.display()
    block24.display()


    
}

function mouseDragged(){
    
    Matter.Body.setPosition(polygon, {x:mouseX, y:mouseY})
    
}

function mouseReleased(){
    sling.fly()
    
}

function keyPressed(){
    if (keyCode===32){
        Matter.Body.setPosition(polygon, {x:polygon.position.x, y:polygon.position.y})
        sling.attached(polygon)
        
    }
}