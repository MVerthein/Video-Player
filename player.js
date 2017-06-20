// var overlay         = document.getElementById('vid-play-overlay'),
//     video           = document.getElementById('video'),
//     videoPlaying    = false;
//
// function hideOverlay() {
//     overlay.style.display = "none";
//     videoPlaying = true;
//     video.play();
// }
//
// function showOverlay() {
//     // this check is to differentiate seek and actual pause
//     if (video.readyState === 4) {
//         overlay.style.display = "block";
//         videoPlaying = true;
//     }
// }

window.onload = function() {

  // Video
  var video = document.getElementById("video");

  // Buttons
  var playButton = document.getElementById("play-pause");
  var muteButton = document.getElementById("mute");
  var fullScreenButton = document.getElementById("full-screen");

  // Sliders
  var seekBar = document.getElementById("seek-bar");
  var volumeBar = document.getElementById("volume-bar");


// Event listener for the play/pause button
playButton.addEventListener("click", function() {
  if (video.paused == true) {
    // Play the video
    video.play();

    // Update the button text to 'Pause'
    playButton.innerHTML = "Pause";
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    playButton.innerHTML = "Play";
  }
});

}

video.addEventListener('pause', showOverlay);
overlay.addEventListener('click', hideOverlay);
