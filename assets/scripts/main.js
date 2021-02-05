// main.js

partyHornForm = document.getElementById('party-horn-form')
volumeImage = document.getElementById("volume-image");
volumeNumber = document.getElementById("volume-number");
volumeSlider = document.getElementById("volume-slider");
hornSound = document.getElementById("horn-sound");
soundImage = document.getElementById("sound-image");
radioAirHorn = document.getElementById("radio-air-horn");
radioCarHorn = document.getElementById("radio-car-horn");
radioPartyHorn = document.getElementById("radio-party-horn");

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

radioAirHorn.addEventListener("mouseup", function() {
  hornSound.src = ".assets/media/audio/air-horn.mp3";
  soundImage.src = "./assets/media/images/air-horn.svg";
});

radioCarHorn.addEventListener("mouseup", function() {
  hornSound.src = ".assets/media/audio/car-horn.mp3";
  soundImage.src = "./assets/media/images/car.svg";
});

radioPartyHorn.addEventListener("mouseup", function() {
  hornSound.src = ".assets/media/audio/party-horn.mp3";
  soundImage.src = "./assets/media/images/party-horn.svg";
});

