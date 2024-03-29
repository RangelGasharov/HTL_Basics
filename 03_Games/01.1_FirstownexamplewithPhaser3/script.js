var config = {
    type: Phaser.AUTO,
    width: 1540, //800   
    height: 750, //600   //854
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 550
            },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var diamonds;
var bombs;
var platforms;
var platforms2;
var platforms3;
var platforms4;
var platforms5;
var platforms6;
var platforms7;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;
var isSpeedboosting = false;

var game = new Phaser.Game(config);

function preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('ground2', 'assets/platform2.png');
    this.load.image('ground3', 'assets/platform3.png');
    this.load.image('ground4', 'assets/platform4.png');
    this.load.image('ground5', 'assets/platform5.png');
    this.load.image('ground6', 'assets/platform6.png');
    this.load.image('diamond', 'assets/diamond.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 'assets/dude.png', {
        frameWidth: 32,
        frameHeight: 48
    });
}

function create() {
    //  A simple background for our game
    this.add.image(800, 325, 'sky'); //400 //300 //.setOrigin(0,0)

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = this.physics.add.staticGroup();
    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    platforms.create(200, 700, 'ground').setScale(1).refreshBody();

    //  Now let's create some ledges
    platforms.create(0, 200, 'ground');
    platforms.create(700, 250, 'ground');
    platforms.create(150, 300, 'ground');
    platforms.create(1250, 300, 'ground');
    platforms.create(650, 400, 'ground');
    platforms.create(150, 450, 'ground');
    platforms.create(1150, 450, 'ground');
    platforms.create(650, 550, 'ground');
    platforms.create(150, 600, 'ground');
    platforms.create(600, 700, 'ground');
    platforms.create(1000, 700, 'ground');
    platforms.create(1400, 700, 'ground');


    platforms2 = this.physics.add.staticGroup();
    platforms2.create(420, 600, 'ground2');
    platforms2.create(920, 550, 'ground2');

    platforms3 = this.physics.add.staticGroup();
    platforms3.create(950, 330, 'ground3');


    platforms4 = this.physics.add.staticGroup();
    platforms4.create(820, 100, 'ground4');
    platforms4.create(1470, 600, 'ground4');

    platforms5 = this.physics.add.staticGroup();
    platforms5.create(590, 150, 'ground5');
    platforms5.create(620, 150, 'ground5');
    platforms5.create(650, 150, 'ground5');
    platforms5.create(680, 150, 'ground5');

    platforms6 = this.physics.add.staticGroup();
    platforms6.create(590, 370, 'ground6');
    platforms6.create(620, 370, 'ground6');
    platforms6.create(650, 370, 'ground6');
    platforms6.create(680, 370, 'ground6');
    platforms6.create(710, 370, 'ground6');

    // The player and its settings
    player = this.physics.add.sprite(100, 450, 'dude');

    //  Player physics properties. Give the little guy a slight bounce.
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', {
            start: 0,
            end: 3
        }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [{
            key: 'dude',
            frame: 4
        }],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', {
            start: 5,
            end: 8
        }),
        frameRate: 10,
        repeat: -1
    });

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();

    //  Some diamonds to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
    diamonds = this.physics.add.group({
        key: 'diamond',
        repeat: 20,
        setXY: {
            x: 12,
            y: 0,
            stepX: 70
        }
    });

    diamonds.children.iterate(function(child) {

        //  Give each diamond a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    bombs = this.physics.add.group();

    //  The score
    scoreText = this.add.text(16, 16, 'score: 0', {
        fontSize: '32px',
        fill: '#EE3B3B'
    });

    //  Collide the player and the diamonds with the platforms
    this.physics.add.collider(player, platforms, walkPlatform, null, this);
    this.physics.add.collider(diamonds, platforms);
    this.physics.add.collider(bombs, platforms);

    this.physics.add.collider(player, platforms2, walkPlatform2, null, this);
    this.physics.add.collider(diamonds, platforms2);
    this.physics.add.collider(bombs, platforms2);

    this.physics.add.collider(player, platforms3);
    this.physics.add.collider(diamonds, platforms3);
    this.physics.add.collider(bombs, platforms3);

    this.physics.add.collider(player, platforms4, walkPlatform4, null, this);
    this.physics.add.collider(diamonds, platforms4);
    this.physics.add.collider(bombs, platforms4);

    this.physics.add.overlap(player, platforms5, walkPlatform5, null, this);
    this.physics.add.overlap(diamonds, platforms5);
    this.physics.add.overlap(bombs, platforms5);

    this.physics.add.overlap(player, platforms6, walkPlatform6, null, this);
    this.physics.add.overlap(diamonds, platforms6);
    this.physics.add.overlap(bombs, platforms6);

    //  Checks to see if the player overlaps with any of the diamonds, if he does call the collectDiamond function
    this.physics.add.overlap(player, diamonds, collectDiamond, null, this);

    this.physics.add.collider(player, bombs, hitBomb, null, this);


}

function update() {

    if (gameOver) {
        return;
    }
    if (cursors.left.isDown) {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);

        player.anims.play('right', true);
    } else {
        if (!isSpeedboosting) {
            player.setVelocityX(0);

            player.anims.play('turn');
        }

    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
    }
}

function collectDiamond(player, diamond) {
    diamond.disableBody(true, true);

    //  Add and update the score
    score += 10;
    scoreText.setText('Score: ' + score);

    if (diamonds.countActive(true) === 0) {
        //  A new batch of diamonds to collect
        diamonds.children.iterate(function(child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;

    }
}

function hitBomb(player, bomb) {
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    gameOver = true;
}


function walkPlatform(player, platforms) {
    isSpeedboosting = false;


}

function walkPlatform2(player, platforms2) {
    isSpeedboosting = false;
    player.setVelocityY(-660);


}



function walkPlatform4(player, platforms4) {
    isSpeedboosting = false;
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play('turn');

    gameOver = true;

}


function walkPlatform5(player, platforms5) {
    isSpeedboosting = true;
    player.setVelocityX(-660);
}

function walkPlatform6(player, platforms6) {
    isSpeedboosting = true;
    player.setVelocityX(990);
}



function pauseorresume() {
    this.scene.pause();
    this.scene.launch(DialogueBoss);
}