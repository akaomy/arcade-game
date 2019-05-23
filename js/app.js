// object prototype of Enemy
const enemy = {
    // Enemy coordinates
    this.x = x,
    this.y = y,
    // this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png'
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // Multiplies any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers
    this.x = this.x + this.speed * dt;
    // TODO: reset the enemy once it goes off screen
};

// Draws the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    // TODO: add more parameters for game statistic
};


// TODO: create functionality for handling collision

// Object prototype player
const player = {
  this.startX = 150;
  this.startY = 150;
  this.x = this.startX;
  this.y = this.startY;
  this.sprite = 'images/char-cat-girl.png';
}

// updates position of the Player
Player.prototype.update = function() {
}

// renders player on the screen
Player.prototype.render = function() {
  ctx.drawImage(Resources(this.sprite), this.x, this.y);
}

// changegs location of the player when certain keys are pressed
Player.prototype.handleInput = function() {
  // TODO: switch statement for up, right, bottom and left keypresses ?
}

// # Objects instantiation:
// All enemy objects in an array called allEnemies
// Player object in a variable called player
let allEnemies = [];
let player = Object.create(player);

// TODOL: allEnemies instantiation


// TODO: how to use factory function to instantiate the enemies?
// Note: classes are better in performance than factory functions if there are 10000+
// instances


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
