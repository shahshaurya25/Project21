var canvas;
var music;
var redS;
var yellowS;
var orangeS;
var blueS;
var square;
var edges; 

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
 
    //create 4 different surfaces
    redS = createSprite(100,580,180,20);
    redS.shapeColor = "red";
    yellowS = createSprite(300,580,180,20);
    yellowS.shapeColor = "yellow";
    orangeS = createSprite(500,580,180,20);
    orangeS.shapeColor = "orange"; 
    blueS = createSprite(700,580,180,20);
    blueS.shapeColor = "blue";
    
    
    //create box sprite and give velocity
    var xpos = Math.round(random(20,750)); 
    square = createSprite(xpos,300,40,40);
    square.shapeColor = "white";
    square.velocityX = 4;
    square.velocityY = -3;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    square.bounceOff(edges[0]);
    square.bounceOff(edges[1]);
    square.bounceOff(edges[2]);

    //add condition to check if box touching surface and make it box
    if(redS.isTouching(square)&& square.bounceOff(redS)){
    square.shapeColor = "red";
    }
    if(yellowS.isTouching(square)&& square.bounceOff(yellowS)){
    square.shapeColor = "yellow";
    music.play();
    }
    if(orangeS.isTouching(square)&& square.bounceOff(orangeS)){
    square.shapeColor = "orange"
    }
    if(blueS.isTouching(square)&& square.bounceOff(blueS)){
    square.shapeColor = "blue";
    music.stop();
    square.velocityX = 0;
    square.velocityY = 0;
    }
    drawSprites();
}
