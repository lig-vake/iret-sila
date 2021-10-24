function getPause(){
  document.querySelector("#needle").classList.remove("needle-shake");
  document.querySelector(".shadow").classList.remove("shadow-shake");
  document.querySelector('.btn-off').style.display = '';

  setTimeout(() => {
    document.querySelector("#needle").classList.remove("needle-on");
    document.querySelector(".shadow").classList.remove("shadow-rotate");
    document.querySelector('.play-2').pause();
  }, 10);

  setTimeout(() => {
    document.querySelector('.play-1').pause();
    document.querySelector('.spin').style.webkitAnimationPlayState = "paused";

    document.querySelector('.btn-on').style.display = '';
  }, 1000);
}