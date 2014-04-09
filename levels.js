var level = 1;
function levels(level){
	boxes = game.add.group();
	boxes.enableBody = true;
	var blocks = boxes.create(0, game.world.height - 0, 'block2');
	if(level == 1){
		blocks = boxes.create(400, game.world.height - 125, 'block2');
		blocks = boxes.create(400, game.world.height - 150, 'block2');
		blocks = boxes.create(625, game.world.height - 125, 'block2');
		blocks = boxes.create(650, game.world.height - 150, 'block2');
		blocks = boxes.create(650, game.world.height - 125, 'block2');
	}
	if(level == 2){
		blocks.kill();
		blocks = boxes.create(400, game.world.height - 125, 'block2');
		blocks = boxes.create(425, game.world.height - 150, 'block2');
		blocks = boxes.create(425, game.world.height - 125, 'block2');
		blocks = boxes.create(450, game.world.height - 125, 'block2');
		blocks = boxes.create(625, game.world.height - 125, 'block2');
	}
	if(level == 3){
		blocks.kill();
		blocks = boxes.create(225, game.world.height - 125, 'block2');
		blocks = boxes.create(225, game.world.height - 150, 'block2');
		blocks = boxes.create(400, game.world.height - 150, 'block2');
		blocks = boxes.create(425, game.world.height - 150, 'block2');
		blocks = boxes.create(450, game.world.height - 150, 'block2');
		blocks = boxes.create(600, game.world.height - 125, 'block2');
		blocks = boxes.create(600, game.world.height - 150, 'block2');
	}
		if(level == 4){
		blocks.kill();
		blocks = boxes.create(200, game.world.height - 125, 'block2');
		blocks = boxes.create(225, game.world.height - 125, 'block2');
		blocks = boxes.create(325, game.world.height - 125, 'block2');
		blocks = boxes.create(325, game.world.height - 150, 'block2');
		blocks = boxes.create(450, game.world.height - 150, 'block2');
		blocks = boxes.create(475, game.world.height - 150, 'block2');
		blocks = boxes.create(600, game.world.height - 125, 'block2');
		blocks = boxes.create(625, game.world.height - 150, 'block2');	
		blocks = boxes.create(625, game.world.height - 125, 'block2');
		blocks = boxes.create(650, game.world.height - 150, 'block2');
		blocks = boxes.create(650, game.world.height - 175, 'block2');
		blocks.body.immovable = true;				
	}
	if(level == 5){
		blocks.kill();
		blocks = boxes.create(300, game.world.height - 125, 'block2');
		blocks = boxes.create(325, game.world.height - 125, 'block2');
		blocks = boxes.create(350, game.world.height - 125, 'block2');
		blocks = boxes.create(375, game.world.height - 125, 'block2');
		blocks = boxes.create(325, game.world.height - 150, 'block2');
		blocks = boxes.create(350, game.world.height - 150, 'block2');
		blocks = boxes.create(337.5, game.world.height - 175, 'block2');
		blocks = boxes.create(550, game.world.height - 150, 'block2');
		blocks = boxes.create(575, game.world.height - 150, 'block2');
		blocks = boxes.create(700, game.world.height - 125, 'block2');
		blocks = boxes.create(725, game.world.height - 125, 'block2');
		blocks = boxes.create(724.5, game.world.height - 150, 'block2');
		blocks = boxes.create(749.5, game.world.height - 150, 'block2');
		blocks.body.immovable = true;				
	}
	if(level == 6){
		blocks.kill();
		blocks = boxes.create(175, game.world.height - 150, 'block2');
		blocks = boxes.create(200, game.world.height - 150, 'block2');
		blocks = boxes.create(300, game.world.height - 125, 'block2');
		blocks = boxes.create(325, game.world.height - 125, 'block2');
		blocks = boxes.create(450, game.world.height - 150, 'block2');	
		blocks = boxes.create(475, game.world.height - 150, 'block2');
		blocks = boxes.create(650, game.world.height - 125, 'block2');
		blocks = boxes.create(650, game.world.height - 150, 'block2');
		blocks = boxes.create(650, game.world.height - 175, 'block2');
		blocks = boxes.create(675, game.world.height - 150, 'block2');
		blocks = boxes.create(675, game.world.height - 125, 'block2');
		blocks = boxes.create(700, game.world.height - 125, 'block2');
		blocks.body.immovable = true;				
	}
	if(level == 7){
		blocks.kill();
		blocks = boxes.create(175, game.world.height - 125, 'block2');
		blocks = boxes.create(200, game.world.height - 150, 'block2');
		blocks = boxes.create(225, game.world.height - 150, 'block2');
		blocks = boxes.create(250, game.world.height - 125, 'block2');
		blocks = boxes.create(500, game.world.height - 125, 'block2');
		blocks = boxes.create(525, game.world.height - 125, 'block2');
		blocks = boxes.create(500, game.world.height - 150, 'block2');
		blocks = boxes.create(525, game.world.height - 150, 'block2');
		blocks = boxes.create(550, game.world.height - 150, 'block2');
		blocks = boxes.create(600, game.world.height - 125, 'block2');
		blocks = boxes.create(600, game.world.height - 150, 'block2');
		blocks.body.immovable = true;
	}
	if(level == 8){		
		blocks = boxes.create(300, game.world.height - 125, 'block2');
		blocks = boxes.create(300, game.world.height - 150, 'block2');
		blocks = boxes.create(625, game.world.height - 125, 'block2');
		blocks = boxes.create(650, game.world.height - 150, 'block2');
		blocks = boxes.create(650, game.world.height - 125, 'block2');
	}
	if(level == 9){		
		blocks = boxes.create(300, game.world.height - 125, 'block2');
		blocks = boxes.create(300, game.world.height - 150, 'block2');
		blocks = boxes.create(450, game.world.height - 125, 'block2');
		blocks = boxes.create(450, game.world.height - 150, 'block2');
		blocks = boxes.create(650, game.world.height - 125, 'block2');
	}
	if(level == 10){		
		blocks = boxes.create(400, game.world.height - 125, 'block2');
		blocks = boxes.create(400, game.world.height - 150, 'block2');
		blocks = boxes.create(550, game.world.height - 125, 'block2');
		blocks = boxes.create(550, game.world.height - 150, 'block2');
		blocks = boxes.create(725, game.world.height - 125, 'block2');
		blocks = boxes.create(750, game.world.height - 150, 'block2');
	}
	if(level == 11){
		blocks.kill();
		blocks = boxes.create(400, game.world.height - 125, 'block2');
		blocks = boxes.create(425, game.world.height - 150, 'block2');
		blocks = boxes.create(425, game.world.height - 125, 'block2');
		blocks = boxes.create(450, game.world.height - 125, 'block2');
		blocks = boxes.create(625, game.world.height - 125, 'block2');
	}
	if(level == 12){
		blocks.kill();
		blocks = boxes.create(300, game.world.height - 125, 'block2');
		blocks = boxes.create(325, game.world.height - 125, 'block2');
		blocks = boxes.create(325, game.world.height - 150, 'block2');
		blocks = boxes.create(400, game.world.height - 175, 'block2');
		blocks = boxes.create(400, game.world.height - 237.5, 'block2');
		blocks = boxes.create(500, game.world.height - 150, 'block2');
		blocks = boxes.create(500, game.world.height - 125, 'block2');
		blocks = boxes.create(525, game.world.height - 125, 'block2');
	}
	if(level == 13){
		blocks.kill();
		blocks = boxes.create(225, game.world.height - 125, 'block2');
		blocks = boxes.create(225, game.world.height - 150, 'block2');
		blocks = boxes.create(400, game.world.height - 150, 'block2');
		blocks = boxes.create(425, game.world.height - 150, 'block2');
		blocks = boxes.create(450, game.world.height - 150, 'block2');
		blocks = boxes.create(600, game.world.height - 125, 'block2');
		blocks = boxes.create(600, game.world.height - 150, 'block2');
	}
	if(level > 13){
		blocks.kill();
		blocks = boxes.create(200, game.world.height - 125, 'block2');			
	}		
			
}