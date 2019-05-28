class Creature {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  };
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

class Enemy extends Creature {
  constructor() {
    super(x, y);
    this.sprite = "images/enemy-bug.png";
  }
}

// Player class with update(), render() and
// a handleInput() methods.
class Player extends Creature {
  constructor(x, y) {
    super(x, y);
    this.sprite = "images/char-cat-girl.png";
  }

  handleInput(direction_moves) {

    switch(direction_moves) {
      case 'left':
        this.x = this.x - 100;
        if (this.x < 1) { // blocks player going off the screen
          this.x = 0;
        }
        break;
      case 'right':
        this.x = this.x + 100;
        if (this.x >= 400) { // blocks player going off the screen
          this.x = 400;
        }
        break;
      case 'up':
        if (this.y > 0) { // blocks player going off the screen
          this.y = this.y - 83;
        }
        if (this.y == -15) { // once player gets to -15, game ends
          console.log(this.y + ' game over');
          // TODO: player can\'t move anymore
        }
        break;
      case 'down':
        this.y = this.y + 83;
        if (this.y == 483) { // blocks player going off the screen
          this.y = 400;
        }
        break;
    }
  };
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player(200, 400);


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
