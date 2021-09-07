import audios from "./data.js";
import { path } from "./utils.js";
import elements from "./playerElements.js";

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default {
  audioData: audios,
  currentAudio: {},
  currentPlaying: 0,
  isPlaying: false,

  start(position) {
    this.currentPlaying = position;

    elements.get.call(this);

    this.update();

    this.volumeControl.value = 10;
    this.audio.volume = 10 / 100

  },
  play() {
    this.isPlaying = true;
    this.audio.play();
    this.playPause.innerText = "pause";
  },
  pause() {
    this.isPlaying = false;
    this.audio.pause();
    this.playPause.innerText = "play_arrow";
  },
  stop() {
    this.isPlaying = false;
    this.audio.stop();
    this.playPause.innerText = "play_arrow";
  },
  togglePlayPause() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  },
  next() {
    ++this.currentPlaying;

    if (this.currentPlaying === this.audioData.length) {
      this.currentPlaying = 0;
    }
    this.pause();
    this.update();
    this.play();
  },
  back() {
    --this.currentPlaying;

    if (this.currentPlaying === -1) {
      this.currentPlaying = this.audioData.length - 1;
    }

    this.pause();
    this.update();
    this.play();
  },
  toggleMute() {
    this.audio.muted = !this.audio.muted;
    this.volume.innerHTML = this.audio.muted ? "volume_mute" : "volume_up";
  },
  setVolume(value) {
    this.audio.volume = value / 100;
  },
  update() {
    this.currentAudio = this.audioData[this.currentPlaying];

    elements.createAudioElement.call(this, path(this.currentAudio.file));

    this.audio.onloadeddata = () => {
      elements.actions.call(this);
      this.audio.play();
      this.playPause.innerText = "pause";
      this.isPlaying = true;
    };
  },
};