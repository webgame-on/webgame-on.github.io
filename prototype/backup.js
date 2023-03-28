/*

TO DO:
- alert if tile is close to bottom
- remove stuck in air tiles
- tile animation out
- chunk randomizer, flipx, flipy
- score system 
- changing background colors
- game ui, score, buttons, pause, mute
- add particles
- ad breakes
- game over menu
- main menu
- title + logo
- sound and music

*/

let game;

let gameOptions = {
    maxWidth: 600,
    minHeight: 600,
    colors: {
        background: [
            0x80CDFF,
            0xB69DFF,
            0xFFA1D8,
            0xFF9297,
            0xFFBC80,
            0xFFF882,
            0x8EFF8E
        ],
        tile: [
            0x40B3FF,
            0x6965FF,
            0xFA4DB6,
            0xFF5151,
            0xFF9638,
            0xFFF53F,
            0x47FF47
        ]
    },
    margin: {
        platform: {
            bottom: 150,
            left: 78,
            right: 522,
            limit: 800
        },
        platformBg: {
            bottom: 50,
            limit: 900
        },
        gridBg: {
            top: 4
        },
        world: {
            left: 30,
            right:  570
        },
        tile: {
            left: 20
        },
        chunk: {
            top: -280
        }
    },
    animFrameRate: 20,
    ball: {
        radius: 14,
        velocity: {
            x: 20,
            y: 400,
            angular: 5,
            horizontal: 8
        },
        limit: 3
    },
    tile: {
        size: 40,
        speed: 0.2,
        speedIncrement: 0.001,
        shape: ['dot/0','o/0','i/0','i/1','s/0','s/1','z/0','z/1','t/0','t/1','t/2','t/3','l/0','l/1','l/2','l/3','j/0','j/1','j/2','j/3'],
        body: [
            [0,0,1,1],
            [0,0,2,2],
            [0,0,1,4],
            [0,0,4,1],
            [0,0,1,2,1,1,1,2],
            [1,0,2,1,0,1,2,1],
            [0,1,1,2,1,0,1,2],
            [0,0,2,1,1,1,2,1],
            [0,0,1,3,1,1,1,1],
            [0,0,3,1,1,1,1,1],
            [0,1,1,1,1,0,1,3],
            [1,0,1,1,0,1,3,1],
            [0,0,1,3,1,2,1,1],
            [0,0,3,1,0,1,1,1],
            [0,0,1,1,1,0,1,3],
            [2,0,1,1,0,1,3,1],
            [0,2,1,1,1,0,1,3],
            [0,0,1,1,0,1,3,1],
            [0,0,2,1,0,1,1,2],
            [0,0,3,1,2,1,1,1]
        ]
    },
    chunks: [
       [0, 0, 12, 0, 1, 9, 0, 3, 10, 0, 5, 10, 0, 7, 11, 0, 9, 19, 0, 11, 16, 0, 13, 2, 1, 8, 15, 2, 0, 15, 2, 2, 16, 2, 4, 16, 2, 6, 10, 3, 7, 16, 3, 9, 17, 3, 10, 19, 4, 0, 1, 4, 4, 15, 4, 11, 15, 5, 0, 15, 5, 3, 17, 5, 7, 15, 5, 10, 17, 0, 5, 0, 0, 7, 0, 1, 1, 0, 3, 4, 0, 6, 6, 0, 6, 13, 0]
    ]
};

function resize(event) {
    let maxWidth = gameOptions.maxWidth;
    let minHeight = gameOptions.minHeight;
    
    let marginTop = 0;
    let marginLeft = 0;
    let gameWidth = 0;
    let gameHeight = 0;
    let styleWidth = 0;
    let styleHeight = 0;
    
    if (window.innerWidth >= maxWidth) {
        if (window.innerHeight >= minHeight) {
            gameWidth = maxWidth;
            gameHeight = window.innerHeight;
            styleWidth = maxWidth;
            styleHeight = window.innerHeight;
            marginTop = 0;
            marginLeft = Math.floor((window.innerWidth - styleWidth) * 0.5);
        } else {
            gameWidth = maxWidth;
            gameHeight = minHeight;
            styleWidth = maxWidth * (window.innerHeight / minHeight);
            styleHeight = window.innerHeight;
            marginTop = 0;
            marginLeft = Math.floor((window.innerWidth - styleWidth) * 0.5);
        }      
    } else {
        if (window.innerHeight >= minHeight) {
            gameWidth = maxWidth;
            gameHeight = window.innerHeight / (window.innerWidth / maxWidth);
            styleWidth = window.innerWidth;
            styleHeight = window.innerHeight;
            marginTop = 0;
            marginLeft = Math.floor((window.innerWidth - styleWidth) * 0.5);
        } else {
            if (window.innerWidth / window.innerHeight < maxWidth / minHeight) {
                gameHeight = window.innerHeight / (window.innerWidth / maxWidth);
                styleWidth = window.innerWidth;   
            } else {
                gameHeight = minHeight;
                styleWidth = maxWidth * (window.innerHeight / minHeight);
            }
            gameWidth = maxWidth;
            styleHeight = window.innerHeight;
            marginTop = 0;
            marginLeft = Math.floor((window.innerWidth - styleWidth) * 0.5);
        }
    }
    game.canvas.style.marginTop = marginTop + 'px';
    game.canvas.style.marginLeft = marginLeft + 'px';
    game.canvas.style.width = styleWidth + 'px';
    game.canvas.style.height = styleHeight + 'px'; 
    game.scale.resize(gameWidth, gameHeight);   
};
window.addEventListener('resize', resize, false);

window.onload = function() {
    let gameConfig = {
        type: Phaser.WebGL,
        transparent: true,
        scale: {
            mode: Phaser.Scale.NONE,
            parent: '',
            width: gameOptions.maxWidth,
            height: gameOptions.minHeight
        },
        scene: [
            preloadScene,
            prototypeScene
        ],
        physics: {
            default: 'arcade',
            arcade: {
                debug: false,
                debugShowBody: true,
                debugShowVelocity: true
            }
        }
    };
    
    game = new Phaser.Game(gameConfig);
};

class preloadScene extends Phaser.Scene {
    constructor() {
        super('preloadScene');
    };
    
    init() {
        console.log('Preload started!')
        resize();  
    };
    
    preload() {
        this.load.atlas('atlas', 'atlas.png', 'atlas.json');
    };
    
    create() {
        this.scene.start('prototypeScene');
    };
};

class prototypeScene extends Phaser.Scene {
    constructor() {
        super('prototypeScene');
    };
    
    init() {
        console.log('Prototype started!');
    };
    
    create() {    
        // Variables 
        this.tilesCounter = 0;
        this.tilesSpeed = gameOptions.tile.speed;
        
        // Background sprites
        this.gridBg = this.add.sprite(0, 0, 'atlas', 'grid');
        this.gridBg.setOrigin(0.5, 0);
        this.gridBg.setAlpha(0.05);
        
        this.platformBg = this.add.sprite(0, 0, 'atlas', 'platform/background');
        this.platformBg.setOrigin(0.5, 1);
        
        this.borderLeft = this.add.tileSprite(0, 0, 0, 0, 'atlas', 'border/0');
        this.borderLeft.setOrigin(0, 0);
        this.borderLeft.setFlipX(true);
        
        this.borderLeftAnim = this.add.sprite(0, 0, 'atlas', 'border/0');
        this.borderLeftAnim.setVisible(false);
        this.borderLeftAnim.on('animationupdate', function (anim, frame, sprite, frameKey) {
            this.borderLeft.setFrame(frameKey);
        }, this);
        
        this.borderRight = this.add.tileSprite(0, 0, 0, 0, 'atlas', 'border/0');
        this.borderRight.setOrigin(1, 0);
        
        this.borderRightAnim = this.add.sprite(0, 0, 'atlas', 'border/0');
        this.borderRightAnim.setVisible(false);
        this.borderRightAnim.on('animationupdate', function (anim, frame, sprite, frameKey) {
            this.borderRight.setFrame(frameKey);
        }, this);
        
        
        // Balls
        this.balls = this.physics.add.group();
        
        
        // Platform
        this.platform = this.physics.add.sprite(0, 0, 'atlas', 'platform/0');
        this.platform.setDepth(1);
        this.platform.setOrigin(0.5, 0);
        this.platform.body.setImmovable();
        this.platform.body.checkCollision.down = false;
        this.platform.body.checkCollision.left = false;
        this.platform.body.checkCollision.right = false;
        
        
        // Tiles
        this.tiles = this.add.group();
        this.tilesBody = this.physics.add.group();
        
        
        // Animations
        this.anims.create({
            key: 'platformBlink',
            frames: this.anims.generateFrameNames('atlas', { prefix: 'platform/', end: 1}),
            frameRate: gameOptions.animFrameRate,
            yoyo: true,
            repeat: 0
        });
        
        this.anims.create({
            key: 'ballBlink',
            frames: this.anims.generateFrameNames('atlas', { prefix: 'ball/', end: 1}),
            frameRate: gameOptions.animFrameRate,
            yoyo: true,
            repeat: 0
        });
        
        this.anims.create({
            key: 'borderBlink',
            frames: this.anims.generateFrameNames('atlas', { prefix: 'border/', end: 1}),
            frameRate: gameOptions.animFrameRate,
            yoyo: true,
            repeat: 0
        });
        
        
        // Controls
        this.input.on('pointermove', this.movePlatform, this);
        this.input.on('pointerdown', this.shootBall, this);

        
        // Physics
        this.physics.world.setBoundsCollision(true, true, true, false);
        this.physics.world.on('worldbounds', this.hitWorldbouds, this);
        
        this.physics.add.collider(this.balls, undefined, this.hitBall, null, this);
        this.physics.add.collider(this.balls, this.platform, this.hitPlatform, null, this);
        this.physics.add.collider(this.balls, this.tilesBody, this.hitTile, null, this);
        
        
        // Resize
        this.scale.on('resize', this.reposition, this);
        this.reposition();
        
        
        // Prepare level
        this.spawnBall(this.platform.x, this.platform.y, true);
        this.spawnChunk();
    };
    
    reposition(gameSize) {
        this.gridBg.setPosition(game.scale.width * 0.5, gameOptions.margin.gridBg.top);
            
        this.platformBg.setPosition(game.scale.width * 0.5, game.scale.height - gameOptions.margin.platformBg.bottom);
        this.platformBg.y = (this.platformBg.y > gameOptions.margin.platformBg.limit) ? gameOptions.margin.platformBg.limit : this.platformBg.y;
        
        this.borderLeft.setPosition(0, 0);
        this.borderLeft.setDisplaySize(this.borderLeft.width, game.scale.height);
        
        this.borderRight.setPosition(game.scale.width, 0);
        this.borderRight.setDisplaySize(this.borderLeft.width, game.scale.height);

        this.platform.setPosition(game.scale.width * 0.5, game.scale.height - gameOptions.margin.platform.bottom);
        this.platform.y = (this.platform.y > gameOptions.margin.platform.limit) ? gameOptions.margin.platform.limit : this.platform.y;
        
        if (this.balls.countActive() == 1 && this.balls.getFirstAlive().getData('onPlatform') == true) {
            this.balls.getFirstAlive().setPosition(this.platform.x, this.platform.y);
        }
    };
    
    spawnBall(x, y, first) {        
        let ball = this.balls.get(x, y, 'atlas', 'ball/0');
        ball.body.setCollideWorldBounds(true);
        ball.body.setBounce(1, 1);
        ball.body.onWorldBounds = true;
        ball.body.setCircle(gameOptions.ball.radius);
        ball.body.setMaxSpeed(gameOptions.ball.velocity.y);
        
        ball.setActive(true);
        
        if (first == true) {
            ball.setData('onPlatform', true);
        } else {
            ball.setVelocity(Phaser.Math.Between(-gameOptions.ball.velocity.x, gameOptions.ball.velocity.x), -gameOptions.ball.velocity.y);
            ball.setAngularVelocity(ball.body.velocity.x * gameOptions.ball.velocity.angular);    
        }
    };
    
    shootBall() {
        if (this.balls.countActive() == 1 && this.balls.getFirstAlive().getData('onPlatform') == true) {
            let ball = this.balls.getFirstAlive();
            ball.setData('onPlatform', false);
            ball.setVelocity(Phaser.Math.Between(-gameOptions.ball.velocity.x, gameOptions.ball.velocity.x), -gameOptions.ball.velocity.y);
            ball.setAngularVelocity(ball.body.velocity.x * gameOptions.ball.velocity.angular);
        }
    };
    
    checkBalls() {
        this.balls.getChildren().forEach(function(ball) {
            if (ball.y > game.scale.height) {
                this.balls.kill(ball);
                ball.setActive(false);
            }
        }, this);
        
        if (this.balls.countActive() == 0) {
            console.log('Balls left: ' + this.balls.countActive());
            this.restartGame();
        }
    };
    
    movePlatform(pointer) {
        this.platform.x = Phaser.Math.Clamp(pointer.x, gameOptions.margin.platform.left, gameOptions.margin.platform.right);
        
        if (this.balls.countActive() == 1 && this.balls.getFirstAlive().getData('onPlatform') == true) {
            this.balls.getFirstAlive().setPosition(this.platform.x, this.platform.y);
        }
    };
    
    hitWorldbouds(body, up, down, left, right) {
        body.gameObject.play('ballBlink');
        if (left == true) {
            this.borderLeftAnim.play('borderBlink');
        } else if (right == true) {
            this.borderRightAnim.play('borderBlink');     
        }
    };
    
    hitPlatform(platform, ball) {
        if (ball.getData('onPlatform') == true) {
            return;
        }
        
        let distance = Math.abs(ball.x - platform.x);
        
        if (ball.x < platform.x) {
            ball.setVelocityX(distance * -gameOptions.ball.velocity.horizontal);
        } else if (ball.x > platform.x) {
            ball.setVelocityX(distance * gameOptions.ball.velocity.horizontal);
        } else {
            ball.setVelocityX(Phaser.Math.Between(-gameOptions.ball.velocity.x, gameOptions.ball.velocity.x)); 
        }
        
        ball.setVelocityY(-gameOptions.ball.velocity.y);
        ball.setAngularVelocity(ball.body.velocity.x * gameOptions.ball.velocity.angular);
        
        platform.play('platformBlink');
        ball.play('ballBlink');
    };
    
    hitBall(ball1, ball2) {
        if (ball1.body.velocity.y <= 0) {
            ball1.setVelocityY(-gameOptions.ball.velocity.y);
        } else {
            ball1.setVelocityY(gameOptions.ball.velocity.y);
        }
        
        ball1.setAngularVelocity(ball1.body.velocity.x * gameOptions.ball.velocity.angular);
        ball1.play('ballBlink');
        
        if (ball2.body.velocity.y <= 0) {
            ball2.setVelocityY(-gameOptions.ball.velocity.y);
        } else {
            ball2.setVelocityY(gameOptions.ball.velocity.y);
        } 
        
        ball2.setAngularVelocity(ball2.body.velocity.x * gameOptions.ball.velocity.angular);
        ball2.play('ballBlink');
    };
    
    hitTile(ball, tileBody) {
        if (ball.getData('onPlatform') == true) {
            return;
        }
            
        if (ball.body.velocity.y <= 0) {
            ball.setVelocityY(-gameOptions.ball.velocity.y);
        } else {
            ball.setVelocityY(gameOptions.ball.velocity.y);
        }  

        ball.setAngularVelocity(ball.body.velocity.x * gameOptions.ball.velocity.angular);
        ball.play('ballBlink');
        
        
        let tile = this.tiles.getMatching('name', tileBody.name);
        for (let i = 0; i < tile.length; i++) {
            tile[i].setName(-1);
            tile[i].setActive(false);
            tile[i].setVisible(false);
            
            if (tile[i].getData('special') == true) {
                this.spawnBall(ball.x, ball.y, false);
            }
        }
        
        let bodies = this.tilesBody.getMatching('name', tileBody.name);
        for (let i = 0; i < bodies.length; i++) {
            bodies[i].setActive(false)
            bodies[i].setName(-1);
            bodies[i].disableBody();
        }
        
        console.log('Tiles Left: ' + this.tiles.countActive());
        console.log('Bodys total: ' + this.tilesBody.getChildren().length)
        console.log('Tiles total: ' + this.tiles.getChildren().length)
        console.log('');
        
        this.tilesSpeed += gameOptions.tile.speedIncrement;
        console.log('new tile speed: ' + this.tilesSpeed)
    };
    
    spawnChunk() {
        console.log('Spawned new chunk!');
        
        let chunk = gameOptions.chunks[0];   
        let chunkLength = chunk.length / 3;
        let specialTile = Phaser.Math.Between(0, chunkLength - 1);
            
        for (let i = 0; i < chunkLength; i++) {
            let row = chunk[i * 3];
            let col = chunk[i * 3 + 1];
            let id = chunk[i * 3 + 2];
            let special = (i == specialTile && this.balls.countActive() < gameOptions.ball.limit) ? true : false;
            
            this.spawnTile(row, col, id, special);
        }
    };
    
    spawnTile(row, col, id, special) {
        let sprite = (special == true) ? 'tile/stripe/' : 'tile/blank/';
        let shape = gameOptions.tile.shape[id];
        let bodyShape = gameOptions.tile.body[id];
        let color = gameOptions.colors.tile[this.tilesCounter % gameOptions.colors.tile.length];
        
        let tile = this.tiles.get(col * gameOptions.tile.size + gameOptions.margin.tile.left, row * gameOptions.tile.size + gameOptions.margin.chunk.top);
        tile.setOrigin(0, 0);
        tile.setTexture('atlas', sprite + shape);
        tile.setTint(color);
        tile.setVisible(true);
        tile.setActive(true);
        tile.setName(this.tilesCounter);
        this.tilesCounter += 1;
        
        tile.setData('id', id);
        tile.setData('special', special);
        
        for (let i = 0; i < bodyShape.length; i += 4) {
            let x = bodyShape[i];
            let y = bodyShape[i+1];
            let width = bodyShape[i+2];
            let height = bodyShape[i+3];
            
            let body = this.tilesBody.get();
            body.setOrigin(0);
            body.enableBody();
            body.setVisible(false);
            body.setActive(true);
            body.setImmovable(true);
            
            body.setPosition(tile.x + x * gameOptions.tile.size, tile.y + y * gameOptions.tile.size);
            body.setDisplaySize(width * gameOptions.tile.size, height * gameOptions.tile.size);
            
            body.setName(tile.name);
        }
    };
    
    checkTiles() {
        let tiles = this.tiles.getMatching('active', true);
        
        let spawn = true;
        let over = false;
        
        tiles.forEach(function(tile) {
            tile.y += this.tilesSpeed;
            
            let body = this.tilesBody.getMatching('name', tile.name);
            let bodyShape = gameOptions.tile.body[tile.getData('id')];
            
            for (let i = 0; i < body.length; i++) {
                let x = bodyShape[i * 4];
                let y = bodyShape[i * 4 + 1];   
                
                body[i].setPosition(tile.x + x * gameOptions.tile.size, tile.y + y * gameOptions.tile.size);
            }
            
            if (tile.y < 0) {
                spawn = false;
            }
            
            if (tile.getBottomLeft().y >= this.platform.y) {
                over = true;
            }
        }, this);
        
        if (spawn == true) {
            this.spawnChunk();    
        }
        
        if (over == true) {
            console.log('Blocks on the bottom!');
            this.restartGame();
        }
    };
    
    restartGame() {
        console.log('GAME OVER');
        this.scene.restart();    
    };
    
    update(time, deltaTime) {
        this.checkBalls();
        this.checkTiles();
    };
};