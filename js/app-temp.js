// Common class
class Creature {
  // constructor(x, y, img) {
  constructor(x, y) {
    this.positionX = x;
    this.positionY = y;
    // this.sprite = img;
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update() {};
  // Draws the enemy on the screen
  render() {};
}


// class of Enemy with inherited base Creature class
class Enemy extends Creature { // how to extend
  // super(sprite)
}



class Player extends Creature{

  this.sprite = "../images/char-cat-girl.png";

  // changegs location of the player when certain keys are pressed
  handleInput() {
  };

  update() {

  };

  render() {
    console.log(this.x, this.y);
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };


  // TODO: overwrite update and render functions
}

// # Objects instantiation:
// All enemy objects in an array called allEnemies
// Player object in a variable called player

let allEnemies = [];
let player = new Player();
let enemy = new Enemy();

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
