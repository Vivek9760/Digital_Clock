function Clock() {

let count = false;
let month = document.getElementById('month');
let year = document.getElementById('year');
let date = document.getElementById('date');

let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let day = document.getElementById('day');
let weekday = ['SUN','MON','TUE','WED','THU','FRI','SAT']

setInterval(() => {
    x = new Date();

    hours = x.getHours();
    if(hours <= 12){
        if(hours < 10){
            hour.innerText = `0${hours}`
        }else{
            hour.innerText = hours;
        }
        if(hours != 12 ){
        document.getElementById('am').checked = true}
        else{
        document.getElementById('pm').checked = true
        }
    }
    else{
        hours = hours-12
        if(hours < 10){
            hour.innerText = `0${hours}`
        }else{
            hour.innerText = hours;
        }
        document.getElementById('pm').checked = true
    }

    let minutes = x.getMinutes();
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
            console.log(i)
            i.style.visibility = 'hidden' 
        });
        count=false;
    }else{
        arr.forEach((i) => {
            i.style.visibility = 'visible'; 
        });
        count=true;
    }

},500)
}

Clock();
