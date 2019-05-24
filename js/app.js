// Common class
class Creature {
  constructor(sprite) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
      // Multiplies any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers
      this.x = this.x + this.speed * dt;
      // TODO: reset the enemy once it goes off screen
  };
  // Draws the enemy on the screen
  render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
      // TODO: add more parameters for game statistic
  };
}


// class of Enemy with inherited base Creature class
class Enemy extends Creature { // how to extend

}



class Player extends Creature{
  // changegs location of the player when certain keys are pressed
  handleInput() {
    // TODO: switch statement for up, right, bottom and left keypresses ?
  }
}


// # Objects instantiation:
// All enemy objects in an array called allEnemies
// Player object in a variable called player
let allEnemies = [];
let player = Object.create(player);

// TODO: allEnemies instantiation

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
