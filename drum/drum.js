function check() {
  const ids = ['tom','snare','ride','crash','hats','bass','kick'];
  const music = ['tom.mp3','snare.mp3','ride.mp3','crash.mp3','hats.mp3','bass.mp3','kick.mp3'];

  window.addEventListener('keydown', (e) => {
    let sound;
    let elem;

    if (e.key === 'a' || e.key === 'A') {
      sound = new Audio(music[0]);
      sound.play();
      elem = document.getElementById(ids[0]);
    }
    else if (e.key === 's' || e.key === 'S') {
      sound = new Audio(music[1]);
      sound.play();
      elem = document.getElementById(ids[1]);
    }
    else if (e.key === 'd' || e.key === 'D') {
      sound = new Audio(music[2]);
      sound.play();
      elem = document.getElementById(ids[2]);
    }
    else if (e.key === 'f' || e.key === 'F') {
      sound = new Audio(music[3]);
      sound.play();
      elem = document.getElementById(ids[3]);
    }
    else if (e.key === 'g' || e.key === 'G') {
      sound = new Audio(music[4]);
      sound.play();
      elem = document.getElementById(ids[4]);
    }
    else if (e.key === 'h' || e.key === 'H') {
      sound = new Audio(music[5]);
      sound.play();
      elem = document.getElementById(ids[5]);
    }
    else if (e.key === 'j' || e.key === 'J') {
      sound = new Audio(music[6]);
      sound.play();
      elem = document.getElementById(ids[6]);
    }
    else {
      console.log('Blaah');
    }


    if (elem) {
      elem.style.color = 'red';
      setTimeout(() => {
        elem.style.color = '';
      }, 200);
    }
  });
}

check();
