var game = new Phaser.Game(750, 600, Phaser.AUTO, 'canvas', { preload: preload, create: create, update: update });
var lives = 3;
	function preload(){
		// preload assets(images,sound)
		game.load.image('block', '/assets/images/block.png');
		game.load.image('turquoise', '/assets/images/t-block.png');
		game.load.image('blue', '/assets/images/b-block.png');
		game.load.image('emerald', '/assets/images/e-block.png');
		game.load.image('purple', '/assets/images/p-block.png');
		game.load.image('line', '/assets/images/line.png');
		game.load.image('block2', '/assets/images/block2.png');
		game.load.image('end', '/assets/images/end.png');
		game.load.image('lava', '/assets/images/lava.png');
		game.load.image('lazer', '/assets/images/lazer.png');
		game.load.audio('jump', '/assets/sounds/jump.wav');
		game.load.audio('lose', '/assets/sounds/lose.wav');
		game.load.audio('win', '/assets/sounds/win.wav');
	}
0
	function create() {
		// scale game for mobile devices
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignVertically = true;
		this.scale.pageAlignHorizontally = true;
		game.scale.refresh();
	
		game.physics.startSystem(Phaser.Physics.ARCADE);			
		group = game.add.group();
		group.enableBody = true;
		
		var ground = group.create(0, game.world.height - 100, 'line');
		ground.scale.setTo(2, 2); 
		ground.body.immovable = true;
		game.stage.backgroundColor = '#3498db';
		player = game.add.sprite(0, game.world.height - 125, 'block');

		game.physics.arcade.enable(player);

		player.body.bounce.y = 0.6;
		player.body.gravity.y = 250;
		player.body.collideWorldBounds = true;			
		levels(level);
		
		end = game.add.group();
		end.enableBody = true;
		var endingBlock = end.create(725, game.world.height - 150, 'end');
		endingBlock.body.immovable = true;
		scoreText = game.add.text(16, 16, level, { fontSize: '32px', fill: '#ecf0f1' });
		livesText = game.add.text(16, 48, 'Lives ' + lives, { fontSize: '32px', fill: '#ecf0f1' });
		
		saveHighScore();
		var highScore = store.get('highScore');
		highScoreText = game.add.text(16, 80, 'Best ' + highScore, { fontSize: '32px', fill: '#ecf0f1' });
	}
	function update() {
		//handle collisions
		game.physics.arcade.collide(player, group);
		game.physics.arcade.collide(player, boxes, collisionHandler, null, this);
		game.physics.arcade.collide(player, end, levelEnd, null, this);
		//player speed
		player.body.velocity.x= 250;
		// if space or mouse is clicked, jump
		jump = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);	
		if ((jump.isDown || game.input.pointer1.isDown || game.input.mouse.button==0) && player.body.touching.down){
			jumpAudio = game.add.audio('jump');
			jumpAudio.play();
			player.body.velocity.y = -250;
			player.body.bounce.y = 0.0;
			player.body.gravity.y = 350;
		}
	}
	//on collision subtract 1 life, play audio, and restart level
	function collisionHandler(obj1, obj2) {
		lives = lives - 1;
		if(lives === 0){
			level = 1;
			lives = 3;
		}
		loseAudio = game.add.audio('lose');
		loseAudio.play();
		game.state.start(game.state.current);		
	}
	// play sound and goto next level
	function levelEnd(){
		winAudio = game.add.audio('win');
		winAudio.play();
		lives++;
		level++;
		levels(level);
		game.state.start(game.state.current);
	}
	// saves highscore with local storage
	function saveHighScore(){
		if(store.enabled){
			if(store.get('highScore')){
				if(level > store.get('highScore')){
					store.set('highScore', level);
				}
			}
			else
				store.set('highScore', level);
		}
	}
	function pause(){
		game.input.disabled = true;
	}
	