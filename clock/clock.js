  function updateClock() {
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hours = now.getHours();

    const secAngle = second * 6 ; 
    const minAngle = minute * 6 + second*0.1
    const hrAngle = (hours%12)*30 + minute*0.1

    document.getElementById("sec").style.transform = `rotate(${secAngle}deg)`;
    document.getElementById("min").style.transform = `rotate(${minAngle}deg)`;
    document.getElementById("hour").style.transform = `rotate(${hrAngle}deg)`;

    document.getElementById('d-sec').textContent = `${second}`
    document.getElementById('d-min').textContent = `${minute}:`
    document.getElementById('d-hrs').textContent = hours<10?`0${hours}`:`${hours}`
  }
  setInterval(updateClock, 1000);
  updateClock()