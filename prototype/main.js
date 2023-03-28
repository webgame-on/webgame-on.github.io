/*

TO DO:
- alert if tile is close to bottom

- chunk randomizer, flipx, flipy, generate chunk pool
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
        tick: 1, 
        range: 100,
        background: [
            {r: 128, g: 205, b: 255},
            {r: 182, g: 157, b: 255}, 
            {r: 255, g: 161, b: 216}, 
            {r: 255, g: 146, b: 151},
            {r: 255, g: 221, b: 116},
            {r: 142, g: 255, b: 142}
        ],
        tile: [
            0x40B3FF,
            0x6965FF,
            0xFA4DB6,
            0xFF6B51,
            0xFFB638,
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
            top: -520,
            first: {
                top: -240
            },
            spawn: -240
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
        limit: 5
    },
    tile: {
        size: 40,
        speed: 0.3,
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
        ],
        shapes: [
            [[1]],// dot/0
            [[1,1],[1,1]],// o0
            [[1],[1],[1],[1]],// i0
            [[1,1,1,1]],// i1
            [[1,0],[1,1],[0,1]],// s0
            [[0,1,1],[1,1,0]],// s1
            [[0,1],[1,1],[1,0]],// z0
            [[1,1,0],[0,1,1]],// z1
            [[1,0],[1,1],[1,0]],// t0
            [[1,1,1],[0,1,0]],// t1
            [[0,1],[1,1],[0,1]],// t2
            [[0,1,0],[1,1,1]],// t3
            [[1,0],[1,0],[1,1]],// l0
            [[1,1,1],[1,0,0]],// l1
            [[1,1],[0,1],[0,1]],// l2
            [[0,0,1],[1,1,1]],// l3
            [[0,1],[0,1],[1,1]],// j0
            [[1,0,0],[1,1,1]],// j1
            [[1,1],[1,0],[1,0]],// j2
            [[1,1,1],[0,0,1]]// j3   
        ]
    },
    chunks: [
        [0,0,6,0,1,16,0,3,15,0,5,16,0,7,1,0,8,16,0,10,15,0,12,16,2,1,15,2,3,16,2,5,15,2,8,15,2,10,16,3,0,2,3,11,16,3,13,2,4,1,17,4,4,5,4,6,16,4,8,1,5,8,15,6,1,3,0,0,0,0,3,0,0,4,0,0,10,0,0,11,0,4,2,0,5,6,0,6,5,0,6,11,0,6,12,0],
        [0,0,5,0,2,16,0,4,12,0,5,11,0,7,19,0,9,16,0,11,4,0,12,14,1,6,15,2,0,4,2,9,15,3,1,16,3,3,8,3,4,7,3,6,19,3,10,15,3,12,16,4,0,12,4,5,15,4,8,11,5,2,15,5,9,15,6,5,3,0,0,0,0,5,0,1,2,0,2,1,0,6,12,0,6,13,0],
        [0,0,14,0,2,13,0,3,15,0,5,16,0,7,2,0,8,6,0,9,16,0,11,1,0,12,16,1,0,2,2,1,5,2,3,6,2,9,15,3,4,15,3,7,10,3,10,15,3,12,16,4,0,5,4,8,16,5,0,15,5,3,3,5,5,15,5,10,7,0,8,0,3,5,0,6,3,0,6,4,0,6,10,0,6,13,0],
        [0,0,4,0,1,14,0,3,10,0,5,14,0,7,16,0,9,8,0,10,19,0,12,16,1,4,16,1,10,6,2,0,17,2,2,16,3,4,15,3,6,16,3,8,11,3,10,16,3,12,6,4,0,10,5,2,17,5,3,19,5,6,15,5,9,17,0,3,0,0,7,0,1,7,0,3,8,0,3,12,0,4,0,0,5,13,0,6,0,0,6,12,0,6,13,0],
        [0,0,11,0,2,14,0,4,3,0,6,15,0,8,16,0,10,16,0,12,8,1,3,16,1,5,8,2,0,12,2,1,1,2,6,10,2,11,15,3,7,16,3,9,1,4,0,15,4,2,16,4,4,8,4,5,14,4,9,15,4,11,16,6,7,3,0,0,0,0,10,0,0,13,0,1,10,0,4,13,0,5,13,0,6,0,0,6,1,0,6,5,0,6,13,0],
        [0,0,18,0,1,6,0,2,16,0,4,2,0,5,10,0,7,16,0,9,17,0,10,3,1,10,15,1,12,16,2,4,16,2,7,15,3,0,3,3,5,16,3,8,15,3,10,16,4,0,16,4,2,7,4,6,16,4,11,16,5,2,17,5,8,1,0,5,0,0,7,0,1,7,0,4,0,0,4,13,0,5,0,0,5,13,0,6,5,0,6,10,0,6,13,0],
        [0,0,1,0,1,16,0,3,4,0,4,19,0,6,16,0,8,6,0,9,16,0,11,19,1,4,16,1,10,16,1,12,12,2,0,17,2,2,16,3,4,15,3,6,16,3,8,17,4,0,17,4,9,15,4,11,16,5,1,15,5,4,1,5,6,15,0,8,0,2,13,0,3,9,0,4,1,0,4,13,0,5,13,0,6,0,0,6,9,0,6,10,0,6,13,0],
        [0,0,8,0,1,9,0,3,15,0,5,16,0,7,17,0,8,3,0,10,15,0,12,16,2,0,11,2,2,19,2,5,15,2,7,16,2,9,17,3,1,15,3,10,15,3,12,16,4,0,12,4,2,15,4,4,16,4,6,12,4,7,15,5,8,15,5,11,17,0,4,0,2,10,0,2,11,0,5,1,0,6,2,0,6,3,0],
        [0,0,3,0,2,15,0,4,16,0,6,15,0,8,16,0,10,9,0,12,16,1,0,14,1,9,16,2,0,2,2,1,16,2,3,17,2,5,16,2,7,8,2,10,16,3,11,16,3,13,2,4,1,15,4,3,16,4,6,15,4,8,16,5,5,17,5,10,17,0,6,0,0,7,0,1,12,0,6,0,0,6,1,0,6,2,0],
        [0,0,18,0,1,5,0,3,6,0,4,16,0,6,4,0,7,14,0,9,11,0,11,7,2,0,6,2,1,16,2,4,15,2,7,15,2,9,16,2,11,17,3,2,16,4,3,16,4,5,5,4,7,6,4,9,15,4,11,16,5,0,7,0,9,0,0,13,0,2,12,0,2,13,0,4,5,0,4,13,0,5,13,0,6,0,0,6,5,0,6,6,0,6,8,0,6,9,0,6,10,0,6,13,0]
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
    
    init(data) {
        console.log('Prototype started!');
        
        // Variables 
        this.score = 0;
        this.highscore = data.highscore || 0;
        this.scorepool = 0;
        this.comboscore = 0;
        
        this.tilesCounter = 0;
        this.tilesSpeed = gameOptions.tile.speed;
        
        this.currentColor = data.currentColor || 0;
        this.currentTick = data.currentTick || 0;
    
        this.bgColor = [];
        for (let i = 0; i < gameOptions.colors.background.length; i++) {
            let colorObj = gameOptions.colors.background[i];
            this.bgColor[i] = new Phaser.Display.Color(colorObj.r, colorObj.g, colorObj.b);
        }
        
        this.changeBackgroundColor(true);
    };
    
    create() {        
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
        
        //this.physics.add.collider(this.balls, undefined, this.hitBall, null, this);
        this.physics.add.collider(this.balls, this.platform, this.hitPlatform, null, this);
        this.physics.add.collider(this.balls, this.tilesBody, this.hitTile, null, this);
        
        
        // Resize
        this.scale.on('resize', this.reposition, this);
        this.reposition();
        
        
        // Prepare level
        this.spawnBall(this.platform.x, this.platform.y, true);
        this.spawnChunk(true);
        
        this.updateUI();
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
        
        this.updateUI();
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
        
        this.collectScore();
    };
    
    collectScore() {
        this.score += this.comboscore;
        this.scorepool = 0;
        this.comboscore = 0;
        
        this.updateUI();
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
        
        let skipName = tileBody.name;
        
        this.killTile(tileBody.name, ball.x, ball.y);
        this.increaseScore();
        
        let killPool = this.checkLeftoverTiles(skipName);
        for (let i = 0; i < killPool.length; i++) {
            this.killTile(killPool[i], ball.x, ball.y);
            this.increaseScore();
        }
        
        this.increaseTileSpeed();
        this.changeBackgroundColor();
    };
    
    increaseTileSpeed() {
        this.tilesSpeed += gameOptions.tile.speedIncrement;
        this.tilesSpeed = Math.round(this.tilesSpeed * 1000) / 1000;    
    };
    
    changeBackgroundColor(skipTick) {
        if (skipTick != true) {
            this.currentTick += gameOptions.colors.tick;    
        }
        
        if (this.currentTick > gameOptions.colors.range) {
            this.currentTick = 0;
            
            this.currentColor += 1;
            if (this.currentColor >= this.bgColor.length) {
                this.currentColor = 0;
            }
        }
        
        let color1 = this.currentColor;
        let color2 = (this.currentColor + 1 == this.bgColor.length) ? 0 : this.currentColor + 1;
        
        let newRGB = new Phaser.Display.Color.ObjectToColor(Phaser.Display.Color.Interpolate.ColorWithColor(this.bgColor[color1], this.bgColor[color2], gameOptions.colors.range, this.currentTick));
        
        document.body.style.backgroundColor = newRGB.rgba;
    };
    
    increaseScore() {
        this.scorepool += 1;  
        this.comboscore = this.scorepool * this.scorepool;
        
        this.updateUI();
    };
    
    killTile(tileName, x, y) {
        let tile = this.tiles.getMatching('name', tileName);
        
        let newFrame = 'tile/hover/' + gameOptions.tile.shape[tile[0].getData('id')];
        tile[0].setFrame(newFrame);
        
        if (tile[0].getData('special') == true) {
            this.spawnBall(x, y, false);
        }
        
        let bodies = this.tilesBody.getMatching('name', tileName);
        for (let i = 0; i < bodies.length; i++) {
            bodies[i].setActive(false)
            bodies[i].setName(-1);
            bodies[i].disableBody();
        }
        
        this.tweens.add({
            targets: tile[0],
            alpha: 0,
            ease: 'Linear',
            duration: 200,
            onComplete: this.killTileComplete,
        });
    };
    
    killTileComplete(tween, targets) {
        let target = targets[0];
        
        target.setName(-1);
        target.setActive(false);
        target.setVisible(false);
    };
    
    checkLeftoverTiles(skipName) {
        let tiles = this.tiles.getMatching('active', true);
        
        let marginX = 20;
        let marginY = 0;
        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i].y < marginY) {
                marginY = tiles[i].y;
            }   
        }
        
        let col = 0;
        let row = 0;
        let gridData = [];
        
        for (let i = 0; i < tiles.length; i++) {
            let tile = tiles[i];
            
            if (tile.name == skipName) {
                continue;
            }
            
            let x = Math.round((tile.x - marginX) / gameOptions.tile.size);
            let y = Math.round((tile.y - marginY) / gameOptions.tile.size);
            let id = tile.getData('id');
            let name = tile.name
            
            if (x > col) {
                col = x;
            }
            
            if (y > row) {
                row = y;
            }
            
            gridData.push({x: x, y: y, id: id, name: name});
        }
        
        row += 5;
        
        let grid = [];
        for (let i = 0; i <= row; i++) {
            let row = [];
            for (let i = 0; i <= col; i++) {
                row.push(-1);
            }
            grid.push(row);
        }
        
        for (let i = 0; i < gridData.length; i++) {
            let data = gridData[i];
            
            let gridRow = data.y;
            let gridCol = data.x;
            let name = data.name;
            let shape = gameOptions.tile.shapes[data.id];

            for (let shapeRow = 0; shapeRow < shape.length; shapeRow++) {
                for (let shapeCol = 0; shapeCol < shape[0].length; shapeCol++) {

                    if (shape[shapeRow][shapeCol] == 0) {
                        continue;
                    }
                
                    grid[gridRow+shapeRow][gridCol+shapeCol] = name;
                }
            }
        }
        
        let gridStack = [];
        
        gridStack.push({row: 0, col: 0});
        
        while(gridStack.length > 0) {
            let coords = gridStack.pop();
            
            if (coords.row < 0 || coords.row > row || coords.col < 0 || coords.col > col) {
                continue;    
            }
            
            if (grid[coords.row][coords.col] == -1) {
                continue;
            }
            
            grid[coords.row][coords.col] = -1;
            
            gridStack.push({row: coords.row + 1, col: coords.col});
            gridStack.push({row: coords.row - 1, col: coords.col});
            gridStack.push({row: coords.row, col: coords.col + 1});
            gridStack.push({row: coords.row, col: coords.col - 1});
            
        }
        
        let leftovers = [];
        
        for (let y = 0; y <= row; y++) {
            for (let x = 0; x <= col; x++) {
                
                if (grid[y][x] != -1 && !leftovers.includes(grid[y][x])) {
                    leftovers.push(grid[y][x]);
                }
            }
        }
        
        return leftovers;
    };
    
    spawnChunk(first) {
        console.log('Spawned new chunk!');
        
        let chunk = gameOptions.chunks[Phaser.Math.Between(0, gameOptions.chunks.length - 1)];   
        let chunkLength = chunk.length / 3;
        let specialTile = Phaser.Math.Between(0, chunkLength - 1);
            
        for (let i = 0; i < chunkLength; i++) {
            let row = chunk[i * 3];
            let col = chunk[i * 3 + 1];
            let id = chunk[i * 3 + 2];
            let special = (i == specialTile && this.balls.countActive() < gameOptions.ball.limit) ? true : false;
            
            this.spawnTile(row, col, id, special, first);
        }
    };
    
    spawnTile(row, col, id, special, first) {
        let sprite = (special == true) ? 'tile/stripe/' : 'tile/blank/';
        let shape = gameOptions.tile.shape[id];
        let bodyShape = gameOptions.tile.body[id];
        let color = gameOptions.colors.tile[this.tilesCounter % gameOptions.colors.tile.length];
        let chunkMargin = (first == true) ? gameOptions.margin.chunk.first.top : gameOptions.margin.chunk.top;
        
        let tile = this.tiles.get(col * gameOptions.tile.size + gameOptions.margin.tile.left, row * gameOptions.tile.size + chunkMargin);
        tile.setOrigin(0, 0);
        tile.setTexture('atlas', sprite + shape);
        tile.setTint(color);
        tile.setVisible(true);
        tile.setAlpha(1);
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
            
            if (tile.y < gameOptions.margin.chunk.spawn) {
                spawn = false;
            }
            
            if (tile.getBottomLeft().y >= this.platform.y) {
                over = true;
            }
        }, this);
        
        if (spawn == true) {
            this.spawnChunk(false);    
        }
        
        if (over == true) {
            console.log('Blocks on the bottom!');
            this.restartGame();
        }
    };
    
    restartGame() {
        console.log('GAME OVER');
        
        if (this.score > this.highscore) {
            this.highscore = this.score;
        }
        
        this.scene.restart({currentColor: this.currentColor, currentTick: this.currentTick, highscore: this.highscore});    
    };
    
    update(time, deltaTime) {
        this.checkBalls();
        this.checkTiles();
    };
    
    updateUI() {
        let scoreText = document.getElementsByClassName('btmLeft');
        scoreText[0].innerHTML = this.score;
        
        let comboscoreText = document.getElementsByClassName('btmCenter');
        comboscoreText[0].innerHTML = 'COMBO x' + this.comboscore;
        
        let highscoreText = document.getElementsByClassName('btmRight');
        highscoreText[0].innerHTML = this.highscore;
    };
};