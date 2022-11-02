var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f8c79cad-b99a-4505-a9fd-b3a297ffce4e","607d7ce3-07af-44f3-9279-f7d45f977a1d","356170cb-9ce5-409f-878d-5a6af75cafb1"],"propsByKey":{"f8c79cad-b99a-4505-a9fd-b3a297ffce4e":{"name":"e","sourceUrl":"assets/api/v1/animation-library/gamelab/L2gaYVZg4m0BbMaQe6HwMw.RnEhSrMKx/category_people/blue_sweater_one_hand_in_pocket.png","frameSize":{"x":125,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"L2gaYVZg4m0BbMaQe6HwMw.RnEhSrMKx","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":125,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/L2gaYVZg4m0BbMaQe6HwMw.RnEhSrMKx/category_people/blue_sweater_one_hand_in_pocket.png"},"607d7ce3-07af-44f3-9279-f7d45f977a1d":{"name":"knife","sourceUrl":"assets/api/v1/animation-library/gamelab/G0.c2WGl4_7kHUquBeS3q.OHykWk4QqR/category_tools/knife_blue.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"G0.c2WGl4_7kHUquBeS3q.OHykWk4QqR","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/G0.c2WGl4_7kHUquBeS3q.OHykWk4QqR/category_tools/knife_blue.png"},"356170cb-9ce5-409f-878d-5a6af75cafb1":{"name":"power","sourceUrl":"assets/api/v1/animation-library/gamelab/Knns8rJzSkYPiuLJHd3Fu9xIL9xn3FNk/category_tools/power_drill.png","frameSize":{"x":162,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"Knns8rJzSkYPiuLJHd3Fu9xIL9xn3FNk","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":162,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Knns8rJzSkYPiuLJHd3Fu9xIL9xn3FNk/category_tools/power_drill.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var player1 = createSprite(200, 360, 50, 10);
player1.shapeColor=("black");

var player2=createSprite(200, 40, 50 ,10);
player2.shapeColor=("black");

var goal1=createSprite(200,18,100,20);
goal1.shapeColor=("yellow");

var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("yellow");

var ball = createSprite(200,200,20,20);
ball.shapeColor=("black");
 
 var score = 0;
 
 var score1 = 0;
 
function draw() {
  background("white");
  createEdgeSprites();
ball.bounceOff(topEdge);
ball.bounceOff(bottomEdge);
ball.bounceOff(leftEdge);
ball.bounceOff(rightEdge);
ball.bounceOff(player1);
ball.bounceOff(player2);
player1.bounce(leftEdge);
player1.bounce(rightEdge);
player2.bounce(leftEdge);
player2.bounce(rightEdge);

  if(keyDown("right")){player1.x=player1.x+6.5}
  if(keyDown("left")){player1.x=player1.x-6.5}
   
   for (var i = 0; i < 400; i=i+20) 
    line(i,200,i+10,200);
    
    if(keyDown("space")){ball.velocityX = 6; 
  ball.velocityY= 6.5;} 
 
  if (ball.isTouching(goal1)) {
  stroke(0);
  ball.velocityY=0;
  ball.velocityX=0;
  ball.x = 200;
  ball.y = 200; 
  score1 = score1+1;
  player1.x =200;
  player1.y=360;
  }
  
  if (ball.isTouching(goal2)) {
  stroke(0);
  ball.velocityY=0;
  ball.velocityX=0;
  ball.x = 200;
  ball.y = 200; 
  score = score+1; 
  player1.x =200;
  player1.y=360;
  }
      
  player2.x = ball.x;
  
  textSize("24");
  text("score"+score1,10,230);
  
  textSize("24");
  text("score"+score,10,180); 
  
  text("press space to start",100,200);
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
