// main.js


// form element
partyHornForm = document.getElementById('party-horn-form')

// volume elements
volumeImage = document.getElementById("volume-image");
volumeNumber = document.getElementById("volume-number");
volumeSlider = document.getElementById("volume-slider");
hornSound = document.getElementById("horn-sound");

// audio selection elements
soundImage = document.getElementById("sound-image");
radioAirHorn = document.getElementById("radio-air-horn");
radioCarHorn = document.getElementById("radio-car-horn");
radioPartyHorn = document.getElementById("radio-party-horn");

// honk button element
honkButton = document.getElementById("honk-btn");


// volume event listeners
partyHornForm.addEventListener('submit', function(e) {
    e.preventDefault();
}, false);

volumeNumber.addEventListener("input", function () {
  hornSound.volume = volumeNumber.value / 100; 
  volumeSlider.value = volumeNumber.value;
  let n = (volumeNumber.value == 0) ? 0 : ((volumeNumber.value / 33.4) >> 0) + 1;
  volumeImage.src = `./assets/media/icons/volume-level-${n}.svg`;
});

volumeSlider.addEventListener("input", function() {
  hornSound.volume = volumeSlider.value / 100; 
  volumeNumber.value = volumeSlider.value;
  let n = (volumeNumber.value == 0) ? 0 : ((volumeNumber.value / 33.4) >> 0) + 1;
  volumeImage.src = `./assets/media/icons/volume-level-${n}.svg`;
});

// audio selection event listeners
radioAirHorn.addEventListener("click", function() {
  hornSound.src = "./assets/media/audio/air-horn.mp3";
  soundImage.src = "./assets/media/images/air-horn.svg";
});

radioCarHorn.addEventListener("click", function() {
  hornSound.src = "./assets/media/audio/car-horn.mp3";
  soundImage.src = "./assets/media/images/car.svg";
});

radioPartyHorn.addEventListener("click", function() {
  hornSound.src = "./assets/media/audio/party-horn.mp3";
  soundImage.src = "./assets/media/images/party-horn.svg";
});

// honk button event listener
honkButton.addEventListener("click", function() {
  hornSound.play();
});

