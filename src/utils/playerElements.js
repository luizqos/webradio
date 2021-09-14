/* eslint-disable import/no-anonymous-default-export */
export default {
  get() {
    this.title = document.querySelector(".card-content h5");
    this.station = document.querySelector(".station");
    this.playPause = document.querySelector("#play-pause");
    this.volume = document.querySelector("#volume-icon");
    this.volumeControl = document.querySelector("#volume-control");
  },
  createAudioElement(audio) {
    this.audio = new Audio(audio);
  },
  actions() {
    this.playPause.onclick = () => this.togglePlayPause();
    this.audio.onended = () => this.next();

    this.volume.onclick = () => this.toggleMute();
    this.volumeControl.oninput = () => this.setVolume(this.volumeControl.value);
    this.volumeControl.onchange = () =>
      this.setVolume(this.volumeControl.value);

  },
};
