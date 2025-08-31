  function updateClock() {
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hours = now.getHours();

    const secAngle = second * 6; 
    const minAngle = minute * 6
    const hrAngle = hours*30 

    document.getElementById("sec").style.transform = `rotate(${secAngle}deg)`;
    document.getElementById("min").style.transform = `rotate(${minAngle}deg)`;
    document.getElementById("hour").style.transform = `rotate(${hrAngle}deg)`;
  }
  setInterval(updateClock, 1000);