// main.js

partyHornForm = document.getElementById('party-horn-form')
volumeImage = document.getElementById("volume-image");
volumeNumber = document.getElementById("volume-number");
volumeSlider = document.getElementById("volume-slider");
hornSound = document.getElementById("horn-sound");
soundImage = document.getElementById("sound-image");

partyHornForm.addEventListener('submit', function(e) {
    e.preventDefault();
}, false);

volumeNumber.addEventListener("change", function () {
  hornSound.volume = volumeNumber.value / 100; 
  volumeSlider.value = volumeNumber.value;

  let n = (volumeNumber.value == 0) ? 0 : ((volumeNumber.value / 33.4) >> 0) + 1;
  volumeImage.src = `./assets/media/icons/volume-level-${n}.svg`;
});

volumeSlider.addEventListener("mouseup", function() {
  hornSound.volume = volumeSlider.value / 100; 
  volumeNumber.value = volumeSlider.value;

  let n = (volumeNumber.value == 0) ? 0 : ((volumeNumber.value / 33.4) >> 0) + 1;
  volumeImage.src = `./assets/media/icons/volume-level-${n}.svg`;
});

