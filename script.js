function Clock() {

let count = false;
let month = document.getElementById('month');
let year = document.getElementById('year');
let date = document.getElementById('date');

let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let period = document.getElementById('apm');

let day = document.getElementById('day');
let weekday = ['SUN','MON','TUE','WED','THU','FRI','SAT']
let minutes;
let hours;
setInterval(() => {
    x = new Date();

    hours = x.getHours();

    if(hours == 0){
        hour.innerText = 12;
        period.innerText= "AM";
    }
    else if(hours <= 12){
        if(hours < 10){
            hour.innerText = `0${hours}`
        }else{
            hour.innerText = hours;
        }
        if(hours != 12 ){
            period.innerText= "AM"; }
            else{
                period.innerText= "PM";
            }
        }
        else{
            hours = hours-12
        if(hours < 10){
            hour.innerText = `0${hours}`
        }else{
            hour.innerText = hours;
        }
        if(hours != 12 ){
            period.innerText="PM"}
            else{
        period.innerText="AM"}
    }

    minutes = x.getMinutes();
    if(minutes<10){
        minute.innerText = `0${minutes}`;
    }else{
        minute.innerText = minutes;
    }

    let seconds = x.getSeconds();
    if(seconds<10){
        second.innerText = `0${seconds}`;
    }else{
        second.innerText = seconds;
    }

    day.innerText = weekday[x.getDay()];
    
    let y = x.getFullYear()
    y = y.toString()
    year.innerText = y.slice(2)

    month.innerText = `0${x.getMonth()+1}`;

    date.innerText = x.getDate()


}, 1000);

setInterval(()=>{
    let arr =document.querySelectorAll('.semi')
    if(count===true){
       arr.forEach((i) => {
            i.style.visibility = 'hidden' 
        });
        count=false;
    }else{
        arr.forEach((i) => {
            i.style.visibility = 'visible'; 
        });
        count=true;
    }

},500);

let audio = new Audio('./Alarm_Tone.mp3');

document.querySelector('#btn1').addEventListener('click',()=>{
    
    let totalTime = 0
    let alarm = document.querySelector('#time').value;
    alarm = alarm.split(':');
    alarm.forEach((i,index)=>{
        alarm[index]=Number(i)
    })
    

    let y = setInterval(()=>{
        if(alarm[0]==hours && alarm[1]==minutes){
             audio.play();
             setTimeout(()=>{
                audio.pause();
             },60000)
             clearInterval(y);
            }
      
    },1000)

    document.querySelector('#btn2').addEventListener('click',()=>{
        clearInterval(y);
        document.querySelector('#time').value ="";
        audio.pause();

    })

})
}

Clock();
