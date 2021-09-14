function createComponents() {

  
    bunny = createSprite(38,681,30,40);
    bunny.addImage(bunnyImg);
    bunny.scale = 0.3;

    
    snake = createSprite(130,385,115,20);
    snake.addImage(snakeImg);
    snake.scale = 0.3;
  
    fire1 = createSprite(281,210,20,25);
    fire1.addImage(fireImg);
    fire1.scale = 0.2;
    fire1.setCollider("rectangle",0,-10,250,250)
    //fire1.debug=true;

    fire2 = createSprite(240,210,20,25);
    fire2.addImage(fireImg);
    fire2.scale = 0.2;
    fire2.setCollider("rectangle",0,-10,250,250);
    //fire2.debug=true;
    
    fire3 = createSprite(200,210,20,25);
    fire3.addImage(fireImg);
    fire3.scale = 0.2;
    fire3.setCollider("rectangle",0,-10,250,250);
   //fire3.debug=true;
   
    carrot = createSprite(374,29,20,20);
    carrot.addImage(carrotImg);
    carrot.scale = 0.1;

    wildplant = createSprite(180,320,20,20);
    wildplant.addImage(wildPlantImg);
    wildplant.scale = 0.1;
     
    bridge = createSprite(130,340,130,20);
    bridge.addImage(bridgeImage);
    bridge.scale=0.2;
    bridges.add(bridge);

    bridge = createSprite(225,340,110,20);
    bridge.addImage(bridgeImage);
    bridges.add(bridge);
    bridge.scale=0.2;
    bridge = createSprite(240,240,120,20);
    bridge.addImage(bridgeImage);
    bridges.add(bridge);
    bridge.scale=0.2;
    bridge = createSprite(29,720,100,20);
    bridge.addImage(bridgeImage);
    bridges.add(bridge);
    bridge.scale=0.2;
    bridge = createSprite(370,70,150,20);
    bridge.addImage(bridgeImage);
    bridges.add(bridge);
    bridge.scale=0.2;

    bridge = createSprite(53,497,100,20);
    bridge.addImage(bridgeImage);
    bridges.add(bridge);
    bridge.scale=0.2;

    bridge = createSprite(280,488,150,20);
    bridge.addImage(bridgeImage);
    bridges.add(bridge);
    bridge.scale=0.2;

    bridge = createSprite(437,158,100,20);
    bridge.addImage(bridgeImage);
    bridges.add(bridge);
    bridge.scale=0.2;
    

    movingdisk = createSprite(200,120,100,20);
    movingdisk.addImage(bridgeImage);
    movingdisk.scale=0.2;

    movingdisk1 = createSprite(200,320,100,20);
    movingdisk1.addImage(bridgeImage);
    movingdisk1.scale=0.2;

    movingdisk2 = createSprite(200,520,100,20);
    movingdisk2.addImage(bridgeImage);
    movingdisk2.scale=0.2;

    
    

    

    
    bridge = createSprite(161,600,100,20);
    bridge.addImage(bridgeImage);
    bridges.add(bridge);
    bridge.scale=0.2;

    for(var i = 0; i<20 ;i++){
        var x = Math.round(random(0,displayWidth))
        var y = Math.round(random(0,displayHeight))
        

        bridge = createSprite(x,y,100,20);
        bridge.addImage(bridgeImage);
        bridge.scale = 0.2;
        bridges.add(bridge);
    
    }
    for (var i = 0;i< bridges.length; i++){
        for (var j = i+1; j<bridges.length ; j++ ){
            if (bridges[i].isTouching(bridges[j])){
                bridges[i].shapeColor = "orange";
                bridges[i].destroy();
                break;
            }
        }
    }
   // tree1 = createSprite(342,356,20,20);
    //tree1.setAnimation("fantasytree_05_1");
    //tree1.scale = 0.3;
    
   // tree2 = createSprite(55,58,20,20);
   // tree2.setAnimation("fantasytree_05_1");
   // tree2.scale = 0.3;*/
  }