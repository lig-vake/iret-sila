function getPlay(){
  document.querySelector("#needle").classList.add("needle-on");
  document.querySelector(".shadow").classList.add("shadow-rotate");
  document.querySelector("p").style.display = 'none';
  document.querySelector("#needle").style.background = 'transparent';
  document.querySelector('.btn-on').style.display = '';

  setTimeout(() => {
    document.querySelector("#needle").classList.add("needle-shake");
    document.querySelector(".shadow").classList.add("shadow-shake");
    document.querySelector('#record').classList.add("spin");
    document.querySelector('#record').style.webkitAnimationPlayState = "running";
    document.querySelector('.play-1').play();
  }, 1000);

  setTimeout(() => {
    document.querySelector('.play-2').play();
    document.querySelector('.btn-off').style.display = '';
  }, 2000);
}