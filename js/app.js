class Creature {
  constructor(x=0, y, wdth, hght, sprite) {
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
  constructor(x, y, wdth=100, hght=60, sprite="images/enemy-bug.png") {
    super(x, y, wdth, hght, sprite);
  }

  update(dt) {
    this.x += 200 * dt;

    if (this.x >= 550) {
      this.x = 0;
    }
    if (this.x < player.x + player.width &&
      this.x + this.width > player.x &&
      this.y < player.y + player.height &&
      this.y + this.height > player.y)
      {
        player.x = 200;
        player.y = 473;

        this.x = 0;
        this.y = 55;
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
        if (this.x < 1) {
          this.x = 0;
        }
        break;
      case 'right':
        this.x = this.x + 100;
        if (this.x >= 400) {
          this.x = 400;
        }
        break;
      case 'up':
        if (this.y > 0) {
          this.y = this.y - 85;
        }
        if (this.y == -25) {
          console.log(this.y + ' game over');
          // TODO: player can\'t move anymore
        }
        break;
      case 'down':
        this.y = this.y + 83;   // fix bug
        if (this.y >= 473) {
          this.y = 473;
        }
        break;
    }
  };
}
// player appears in the middle and at the bottom of the screen
const player = new Player(200, 473, 75, 60, "images/char-cat-girl.png");

// const enemy = new Enemy(0, 55, 75, 60);
// const enemy2 = new Enemy(0, 140, 75, 60);
// const enemy3 = new Enemy(0, 225, 75, 60);
// const enemy4 = new Enemy(0, 305, 75, 60);
// const enemy5 = new Enemy(0, 390, 75, 60);

// const allEnemies = [enemy, enemy2, enemy3, enemy4];

const enemiesFactory = function (enemiesAmount) {
  const enemiesArray = [];
  let yVal = 55;

  let i = 0;
  while (i < enemiesAmount) {
    enemiesArray.push(new Enemy(0, yVal));
    yVal += 60;
    i ++;
  }
  return enemiesArray;
}

const allEnemies = enemiesFactory(5);




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
