class Creature {
  constructor(x, y, wdth, hght, sprite) {
    this.x = x;
    this.y = y;
    this.width = wdth;
    this.height = hght;
    this.sprite = sprite;
  }
  update(dt) {
  };
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

class Enemy extends Creature {
  constructor(x, y, wdth=100, hght=60, sprite) {
    super(x, y, wdth, hght, sprite);
  }

  update(dt) {
    this.x += 200 * dt;

    if (this.x >= 550) { // bugs run start
      this.x = 0;
    }
    if (this.x < player.x + player.width &&
      this.x + this.width > player.x &&
      this.y < player.y + player.height &&
      this.y + this.height > player.y) {
      console.log('bug collided');
    }
  }
}

// Player class with update(), render() and
// a handleInput() methods.
class Player extends Creature {
  constructor(x, y, wdth=100, hght=60, sprite) {
    super(x, y, wdth, hght, sprite);
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

const player = new Player(200, 400, 100, 60, "images/char-cat-girl.png");

const enemy = new Enemy(0, 55, 100, 60, "images/enemy-bug.png");
const enemy2 = new Enemy(0, 140, 100, 60, "images/enemy-bug.png");
const enemy3 = new Enemy(0, 225, 100, 60, "images/enemy-bug.png");
const enemy4 = new Enemy(0, 305, 100, 60, "images/enemy-bug.png");
const enemy5 = new Enemy(0, 390, 100, 60, "images/enemy-bug.png");

const allEnemies = [enemy, enemy2, enemy3, enemy4, enemy5];

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
