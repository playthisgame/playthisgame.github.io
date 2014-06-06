		var game = new Phaser.Game(750, 600, Phaser.AUTO, 'canvas', { preload: preload, create: create, update: update });

		
		function preload(){
			game.load.image('block', '/assets/images/block.png');
			game.load.image('line', '/assets/images/line.png');
			game.load.image('block2', '/assets/images/block2.png');
			game.load.image('end', '/assets/images/end.png');
			game.load.image('lava', '/assets/images/lava.png');
			game.load.image('lazer', '/assets/images/lazer.png');
			game.load.audio('jump', '/assets/sounds/jump.wav');
			game.load.audio('lose', '/assets/sounds/lose.wav');
			game.load.audio('win', '/assets/sounds/win.wav');
		}
	
		function create() {

			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			this.scale.minWidth = 320;
			this.scale.minHeight = 480;
			if(screen.width <= 540){
			this.scale.maxWidth = 320;
			this.scale.maxHeight = 480;			
			}else{
			this.scale.maxWidth = 768;
			this.scale.maxHeight = 1152;
			}
			this.scale.pageAlignVertically = true;
			this.scale.pageAlignHorizontally = true;
			game.scale.refresh();
		
			game.physics.startSystem(Phaser.Physics.ARCADE);			
			group = game.add.group();
			game.stage.backgroundColor = '#3498db';
			group.enableBody = true;
			
			var ground = group.create(0, game.world.height - 100, 'line');
			ground.scale.setTo(2, 2); 
			ground.body.immovable = true;
				
			player = game.add.sprite(0, game.world.height - 125, 'block');

			game.physics.arcade.enable(player);

			player.body.bounce.y = 0.6;
			player.body.gravity.y = 250;
			player.body.collideWorldBounds = true;
			
			player.animations.add('left', [0, 1, 2, 3], 10, true);

			cursors = game.input.keyboard.createCursorKeys();
			jump = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);			
			
			levels(level);

			end = game.add.group();
			end.enableBody = true;
			var endingBlock = end.create(725, game.world.height - 150, 'end');
			endingBlock.body.immovable = true;
			saveHighScore();
			game.add.text(16, 16, level, { fontSize: '32px', fill: '#ecf0f1' });
			game.add.text(16, 32, highScore, { fontSize: '32px', fill: '#ecf0f1' });

		}
		function update() {
			game.physics.arcade.collide(player, group);
			game.physics.arcade.collide(player, boxes, collisionHandler, null, this);
			game.physics.arcade.collide(player, end, levelEnd, null, this);
			player.body.velocity.x= 250;
				
			if ((jump.isDown || game.input.pointer1.isDown || game.input.mouse.button==0) && player.body.touching.down){
				jumpAudio = game.add.audio('jump');
				jumpAudio.play();
				player.body.velocity.y = -250;
				player.body.bounce.y = 0.0;
				player.body.gravity.y = 350;
			}
		}
		function collisionHandler(obj1, obj2) {
			loseAudio = game.add.audio('lose');
			loseAudio.play();
			game.state.start(game.state.current);
			
		}
		
		function levelEnd(){
			winAudio = game.add.audio('win');
			winAudio.play();
			level++;
			levels(level);
			game.state.start(game.state.current);
		}
		
		function saveHighScore(){
			if(store.get('highScore')){
				if(level > store.get('highScore')){
					store.set('highScore', level);
					var highScore = store.get('highScore');
				}
			}
			else
				store.set('highScore', level);
		}
		function pause(){
			game.paused = true;
		}
		