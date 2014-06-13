var level = 1;
function levels(level){
	boxes = game.add.group();
	boxes.enableBody = true;
	var blocks = boxes.create(0, game.world.height - 0, 'block2');
	blocks.body.immovable = true;
	var lava = boxes.create(0, game.world.height - 0, 'lava');
	lava.body.immovable = true;
	var lazer = boxes.create(0, game.world.height - 0, 'lazer');
	lazer.body.immovable = true;
	if(level == 1){
		game.add.text(375, 200, "Blockenstein", { fill: '#FFFFFF'});
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
		blocks = boxes.create(250, game.world.height - 125, 'block2');
		blocks = boxes.create(250, game.world.height - 150, 'block2');
		blocks = boxes.create(450, game.world.height - 150, 'block2');
		blocks = boxes.create(475, game.world.height - 150, 'block2');
		blocks = boxes.create(650, game.world.height - 125, 'block2');
		blocks = boxes.create(650, game.world.height - 150, 'block2');
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
		blocks = boxes.create(675, game.world.height - 125, 'block2');
		blocks = boxes.create(700, game.world.height - 125, 'block2');
		blocks = boxes.create(700, game.world.height - 150, 'block2');
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
		blocks = boxes.create(475, game.world.height - 150, 'block2');
		blocks = boxes.create(475, game.world.height - 125, 'block2');
		blocks = boxes.create(500, game.world.height - 125, 'block2');
	}
	if(level == 13){
		blocks.kill();
		blocks = boxes.create(225, game.world.height - 125, 'block2');
		blocks = boxes.create(400, game.world.height - 150, 'block2');
		blocks = boxes.create(425, game.world.height - 150, 'block2');
		blocks = boxes.create(450, game.world.height - 150, 'block2');
		blocks = boxes.create(600, game.world.height - 125, 'block2');
		blocks = boxes.create(600, game.world.height - 150, 'block2');
	}
	if(level == 14){
		blocks = boxes.create(400, game.world.height - 125, 'block2');
		blocks = boxes.create(400, game.world.height - 150, 'block2');
		blocks = boxes.create(400, game.world.height - 175, 'block2');
		blocks = boxes.create(650, game.world.height - 125, 'block2');
	}
	if(level === 15){
	
	}
	if(level === 16){
		blocks.kill();
		blocks = boxes.create(200, game.world.height - 125, 'block2');
		blocks = boxes.create(200, game.world.height - 150, 'block2');
		blocks = boxes.create(325, game.world.height - 125, 'block2');
		blocks = boxes.create(325, game.world.height - 150, 'block2');
		blocks = boxes.create(600, game.world.height - 125, 'block2');
		blocks = boxes.create(625, game.world.height - 150, 'block2');	
		blocks = boxes.create(625, game.world.height - 125, 'block2');
		blocks = boxes.create(650, game.world.height - 125, 'block2');
		blocks = boxes.create(650, game.world.height - 150, 'block2');
		blocks = boxes.create(650, game.world.height - 175, 'block2');
		blocks.body.immovable = true;		
	}
	if(level === 17){
		blocks.kill();
		game.add.text(300, 200, "Beware of the lava!", { fontSize: '32px', fill: '#c0392b' });
		blocks = boxes.create(275, game.world.height - 125, 'block2');
		blocks = boxes.create(275, game.world.height - 150, 'block2');
		lava = boxes.create(300, game.world.height - 125, 'lava');
		lava = boxes.create(325, game.world.height - 125, 'lava');
		lava = boxes.create(350, game.world.height - 125, 'lava');
		lava = boxes.create(375, game.world.height - 125, 'lava');
		lava = boxes.create(400, game.world.height - 125, 'lava');
		blocks = boxes.create(425, game.world.height - 125, 'block2');
		blocks = boxes.create(425, game.world.height - 150, 'block2');
		blocks = boxes.create(625, game.world.height - 125, 'block2');
		lava = boxes.create(650, game.world.height - 125, 'lava');
		blocks = boxes.create(675, game.world.height - 125, 'block2');
	}
	if(level === 18){
		blocks.kill();
		blocks = boxes.create(250, game.world.height - 125, 'block2');
		blocks = boxes.create(275, game.world.height - 125, 'block2');
		blocks = boxes.create(275, game.world.height - 150, 'block2');
		lava = boxes.create(300, game.world.height - 125, 'lava');
		lava = boxes.create(300, game.world.height - 150, 'lava');
		lava = boxes.create(325, game.world.height - 125, 'lava');
		lava = boxes.create(325, game.world.height - 150, 'lava');
		lava = boxes.create(350, game.world.height - 125, 'lava');
		lava = boxes.create(350, game.world.height - 150, 'lava');
		blocks = boxes.create(375, game.world.height - 150, 'block2');
		blocks = boxes.create(375, game.world.height - 125, 'block2');
		blocks = boxes.create(400, game.world.height - 125, 'block2');
		blocks = boxes.create(675, game.world.height - 125, 'block2');
		lava = boxes.create(675, game.world.height - 150, 'lava');
		blocks = boxes.create(675, game.world.height - 175, 'block2');
	}
	if(level === 19){
		lava = boxes.create(350, game.world.height - 125, 'lava');
		lava = boxes.create(375, game.world.height - 125, 'lava');
		lava = boxes.create(375, game.world.height - 150, 'lava');
		lava = boxes.create(375, game.world.height - 175, 'lava');
		blocks = boxes.create(400, game.world.height - 125, 'block2');
		blocks = boxes.create(400, game.world.height - 150, 'block2');
		lava = boxes.create(400, game.world.height - 175, 'lava');
		lava = boxes.create(425, game.world.height - 175, 'lava');
		lava = boxes.create(425, game.world.height - 150, 'lava');
		lava = boxes.create(425, game.world.height - 125, 'lava');
		lava = boxes.create(450, game.world.height - 125, 'lava');
		lava = boxes.create(725, game.world.height - 125, 'lava');
		lava = boxes.create(750, game.world.height - 125, 'lava');
		lava = boxes.create(750, game.world.height - 150, 'lava');
	}
	if(level === 20){
		
	}
	
	if(level === 21){
		lava = boxes.create(350, game.world.height - 125, 'lava');
		lava = boxes.create(375, game.world.height - 125, 'lava');
		lava = boxes.create(400, game.world.height - 125, 'lava');
		lava = boxes.create(425, game.world.height - 125, 'lava');
		lava = boxes.create(450, game.world.height - 125, 'lava');
		lava = boxes.create(475, game.world.height - 125, 'lava');
		lava = boxes.create(350, game.world.height - 150, 'lava');
		lava = boxes.create(400, game.world.height - 150, 'lava');
		lava = boxes.create(412.5, game.world.height - 175, 'lava');
		lava = boxes.create(425, game.world.height - 150, 'lava');
		lava = boxes.create(475, game.world.height - 150, 'lava');
		lava = boxes.create(350, game.world.height - 250, 'lava');
		lava = boxes.create(412.5, game.world.height - 275, 'lava');
		lava = boxes.create(475, game.world.height - 250, 'lava');
	}
	if(level === 22){
		game.add.text(300, 200, "Don't touch the laser!", { fontSize: '32px', fill: '#c0392b' });
		blocks.kill();
		blocks = boxes.create(100, game.world.height - 151, 'block2');
		lazer = boxes.create(125, game.world.height - 151, 'lazer');
		lazer = boxes.create(150, game.world.height - 151, 'lazer');
		lazer = boxes.create(175, game.world.height - 151, 'lazer');
		lazer = boxes.create(200, game.world.height - 151, 'lazer');
		blocks = boxes.create(225, game.world.height - 151, 'block2');
		blocks = boxes.create(400, game.world.height - 125, 'block2');
		blocks = boxes.create(400, game.world.height - 150, 'block2');
		lazer = boxes.create(425, game.world.height - 150, 'lazer');
		lazer = boxes.create(450, game.world.height - 150, 'lazer');
		lazer = boxes.create(475, game.world.height - 150, 'lazer');
		lazer = boxes.create(500, game.world.height - 150, 'lazer');
		lazer = boxes.create(525, game.world.height - 150, 'lazer');
		lazer = boxes.create(550, game.world.height - 150, 'lazer');
		blocks = boxes.create(575, game.world.height - 125, 'block2');
		blocks = boxes.create(575, game.world.height - 150, 'block2');
	}
	if(level === 23){
		blocks.kill();
		blocks = boxes.create(200, game.world.height - 125, 'block2');
		blocks = boxes.create(200, game.world.height - 150, 'block2');
		lazer = boxes.create(225, game.world.height - 150, 'lazer');
		lazer = boxes.create(250, game.world.height - 150, 'lazer');
		lazer = boxes.create(275, game.world.height - 150, 'lazer');
		lazer = boxes.create(300, game.world.height - 150, 'lazer');
		blocks = boxes.create(325, game.world.height - 125, 'block2');
		blocks = boxes.create(325, game.world.height - 150, 'block2');
		blocks = boxes.create(450, game.world.height - 150, 'block2');
		blocks = boxes.create(475, game.world.height - 150, 'block2');
		blocks = boxes.create(600, game.world.height - 125, 'block2');
		blocks = boxes.create(625, game.world.height - 150, 'block2');	
		blocks = boxes.create(625, game.world.height - 125, 'block2');
		blocks = boxes.create(650, game.world.height - 150, 'block2');
		blocks = boxes.create(650, game.world.height - 175, 'block2');
	}
	if(level === 24){
		blocks.kill();
		blocks = boxes.create(200, game.world.height - 125, 'block2');
		lazer = boxes.create(200, game.world.height - 137.5, 'lazer');
		lazer = boxes.create(225, game.world.height - 137.5, 'lazer');
		lazer = boxes.create(250, game.world.height - 137.5, 'lazer');
		lazer = boxes.create(275, game.world.height - 137.5, 'lazer');
		lazer = boxes.create(300, game.world.height - 137.5, 'lazer');
		blocks = boxes.create(300, game.world.height - 125, 'block2');
		blocks = boxes.create(550, game.world.height - 125, 'block2');
		blocks = boxes.create(575, game.world.height - 125, 'block2');
		blocks = boxes.create(575, game.world.height - 150, 'block2');
		lazer = boxes.create(600, game.world.height - 137.5, 'lazer');
		lazer = boxes.create(625, game.world.height - 137.5, 'lazer');
		lazer = boxes.create(650, game.world.height - 137.5, 'lazer');
		lazer = boxes.create(675, game.world.height - 137.5, 'lazer');
		blocks = boxes.create(675, game.world.height - 125, 'block2');
	}
	if(level === 25){
		blocks.kill();
		blocks = boxes.create(200, game.world.height - 150, 'block2');
		blocks = boxes.create(200, game.world.height - 175, 'block2');
		lazer = boxes.create(225, game.world.height - 150, 'lazer');
		lazer = boxes.create(250, game.world.height - 150, 'lazer');
		lazer = boxes.create(275, game.world.height - 150, 'lazer');
		lazer = boxes.create(300, game.world.height - 150, 'lazer');
		blocks = boxes.create(325, game.world.height - 150, 'block2');
		blocks = boxes.create(325, game.world.height - 175, 'block2');
		blocks = boxes.create(500, game.world.height - 125, 'block2');
		blocks = boxes.create(500, game.world.height - 150, 'block2');
		blocks = boxes.create(525, game.world.height - 125, 'block2');
		blocks = boxes.create(550, game.world.height - 125, 'block2');
		blocks = boxes.create(575, game.world.height - 125, 'block2');
		blocks = boxes.create(575, game.world.height - 150, 'block2');
		lazer = boxes.create(525, game.world.height - 137.5, 'lazer');
		lazer = boxes.create(550, game.world.height - 137.5, 'lazer');	
		blocks = boxes.create(625, game.world.height - 125, 'block2');
		blocks = boxes.create(625, game.world.height - 150, 'block2');
	}
	if(level === 26){
		blocks.kill();
		blocks = boxes.create(200, game.world.height - 150, 'block2');
		blocks = boxes.create(225, game.world.height - 150, 'block2');
		blocks = boxes.create(400, game.world.height - 125, 'block2');
		blocks = boxes.create(400, game.world.height - 150, 'block2');
		blocks = boxes.create(400, game.world.height - 175, 'block2');
		blocks = boxes.create(625, game.world.height - 150, 'block2');
		blocks = boxes.create(650, game.world.height - 150, 'block2');		
	}
	if(level === 27){
		blocks.kill();
		blocks = boxes.create(250, game.world.height - 125, 'block2');
		blocks = boxes.create(300, game.world.height - 125, 'block2');
		blocks = boxes.create(300, game.world.height - 150, 'block2');
		lava = boxes.create(325, game.world.height - 125, 'lava');
		lava = boxes.create(325, game.world.height - 150, 'lava');
		lava = boxes.create(350, game.world.height - 125, 'lava');
		lava = boxes.create(350, game.world.height - 150, 'lava');
		lava = boxes.create(375, game.world.height - 125, 'lava');
		lava = boxes.create(375, game.world.height - 150, 'lava');
		blocks = boxes.create(400, game.world.height - 125, 'block2');
		blocks = boxes.create(400, game.world.height - 150, 'block2');
		lazer = boxes.create(300, game.world.height - 226, 'lazer');
		lazer = boxes.create(325, game.world.height - 226, 'lazer');
		lazer = boxes.create(350, game.world.height - 226, 'lazer');
		lazer = boxes.create(375, game.world.height - 226, 'lazer');
		lazer = boxes.create(400, game.world.height - 226, 'lazer');
		blocks = boxes.create(550, game.world.height - 125, 'block2');
		lazer = boxes.create(575, game.world.height - 125, 'lazer');
		lazer = boxes.create(600, game.world.height - 125, 'lazer');
		lazer = boxes.create(625, game.world.height - 125, 'lazer');
		lazer = boxes.create(650, game.world.height - 125, 'lazer');
		blocks = boxes.create(675, game.world.height - 125, 'block2');
	}
	if(level === 28){
		blocks.kill();
		blocks = boxes.create(250, game.world.height - 125, 'block2');
		blocks = boxes.create(275, game.world.height - 125, 'block2');
		blocks = boxes.create(275, game.world.height - 150, 'block2');
		lava = boxes.create(300, game.world.height - 125, 'lava');
		lava = boxes.create(325, game.world.height - 125, 'lava');
		lava = boxes.create(350, game.world.height - 125, 'lava');
		lava = boxes.create(375, game.world.height - 125, 'lava');
		lazer = boxes.create(300, game.world.height - 150, 'lazer');
		lazer = boxes.create(325, game.world.height - 150, 'lazer');
		lazer = boxes.create(350, game.world.height - 150, 'lazer');
		lazer = boxes.create(375, game.world.height - 150, 'lazer');
		blocks = boxes.create(400, game.world.height - 125, 'block2');
		blocks = boxes.create(400, game.world.height - 150, 'block2');
		blocks = boxes.create(600, game.world.height - 125, 'block2');
		lava = boxes.create(575, game.world.height - 125, 'lava');
		lava = boxes.create(575, game.world.height - 150, 'lava');
		lava = boxes.create(600, game.world.height - 150, 'lava');
		blocks = boxes.create(625, game.world.height - 125, 'block2');
		blocks = boxes.create(625, game.world.height - 150, 'block2');
		blocks = boxes.create(650, game.world.height - 125, 'block2');
		lava = boxes.create(650, game.world.height - 175, 'lava');
		lava = boxes.create(650, game.world.height - 150, 'lava');
		lava = boxes.create(675, game.world.height - 125, 'lava');
		lava = boxes.create(675, game.world.height - 150, 'lava');
		
	}
	if(level > 28){
		blocks.kill();	
	}					
}
