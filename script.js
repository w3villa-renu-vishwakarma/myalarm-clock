let time = document.getElementById('time')
let clock = document.getElementById('clockContainer')
let alarm = document.getElementById('alarm')
let now = new Date();

let year = now.getFullYear();
    let month = now.getMonth() + 1; // getMonth() returns 0-11
    let date = now.getDate();

setInterval(() => {
    let now = new Date();
    // get the date and time components
    let year = now.getFullYear();
    let month = now.getMonth() + 1; // getMonth() returns 0-11
    let day = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let datetime = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

    time.innerHTML = datetime;
}, 1000);

let input_time = document.getElementById('')

setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
    
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
    }, 1000);
// for input

// For Minutes:
for (let i = 0; i < 60; i++) {
    mins.innerHTML = mins.innerHTML + `<option value="${i}" id="">${i}</option> `;
  }
  
  // For secs:
  for (let i = 0; i < 60; i++) {
    secs.innerHTML = secs.innerHTML + `<option value="${i}" id="">${i}</option> `;
  }
  
  // For hours:
  for (let i = 0; i < 24; i++) {
    hrs.innerHTML =
      hrs.innerHTML + `<option value="${i}" id="">${i}</option> `;
  }
  const setAlarm = document.getElementById("btn");

// play audio
const audio = new Audio("./sound.mp3");
setAlarm.addEventListener("click", () => {
    alarmDate = new Date(
      `${year}-${month}-${date} ${hrs.value}:${mins.value}:${secs.value}`
    );
  
    timeforAlarm = new Date();
  
    alarmTime = alarmDate - timeforAlarm;
    console.log(alarmTime);
    if (alarmTime >= 0) {
      alert(`Your alarm is set`);
    } else {
      alert(`Please check time clearly`);
    }
  
    if (alarmTime >= 0) {
      setTimeout(() => {
        bell();

      }, alarmTime);
    }
  });
  let image = document.getElementById('image');
let new_url = "wakeup.gif"
  function bell() {
    audio.play();
    setTimeout(() => {
    //   img.src = "wakeup.gif";
    clock.style.display = 'none';
    time.style.display = 'none';
    alarm.style.display = 'none';
    image.style.display ='block';
    image.innerHTML = `<img src="wakeup.gif">`

    }, 0);
  }
//Clear Alarm
const clearAlarm = document.getElementById("clearAlarm");

clearAlarm.addEventListener("click", () => {
  audio.pause();
  alert("Alarm Cleared");
//   img.src = "clock.png";
clock.style.display = 'block';
    time.style.display = 'block';
    alarm.style.display = 'block';
    image.style.display = 'none'

});