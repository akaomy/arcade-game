let popupTransparentBkg = document.querySelector(".congrat-popup-bkg");
let closePopup = document.querySelector(".close-popup");

const showCongratPopup = () => {
   popupTransparentBkg.style.display = "block";
};

const closeCongratPopup = () => {
  popupTransparentBkg.style.display = "none";
};

// close popup and resets the game
closePopup.addEventListener('click', function() {
  closeCongratPopup();
  player.x = 200;
  player.y = 473;

  resetEnemies();
});
