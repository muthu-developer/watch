var date = document.getElementById("date");
date.innerHTML = new Date().toDateString()

function timer() {
    var time = document.getElementById("time");
    let session_tag = document.getElementById("session");

    let hours = new Date().getHours();
    let minits = new Date().getMinutes();
    let second = new Date().getSeconds();
    let session = "AM"

    if(hours == 0){
        hours = 12;
    }
    if(hours > 12){
        hours -= 12;
        session = "PM";
    }


    time.innerHTML = `${hours} : ${minits} : ${second}`;
    session_tag.innerHTML = session; 
    
    setTimeout(timer, 1000)
}
timer()