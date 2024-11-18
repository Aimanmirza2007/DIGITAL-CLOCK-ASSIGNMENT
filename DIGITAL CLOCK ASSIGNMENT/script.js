

const time = document.getElementById("time");
const timeformat = document.getElementById("timeformat");

let isBackgroundChanged = false;

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime, 1000);
});

const showTime = () => {
    let date = new Date();

    let hours = date.getHours();
    let mint = date.getMinutes();
    let sec = date.getSeconds();

    let ampm = hours >= 12 ? 'PM' : 'AM';


    if (hours > 12) {
        hours = hours - 12
    }

    if (hours === 0) {
        hours = 12;
    }


    hours = hours < 10 ? `0${hours} ` : hours;
    mint = mint < 10 ? `0${mint} ` : mint;
    sec = sec < 10 ? `0${sec} ` : sec;




    time.innerHTML = `${hours} : ${mint} : ${sec}`
    timeformat.innerText = ampm;
}

// function button() {
//     const back = document.getElementById("back");
//     const clock = document.getElementById("clock");
//     const btn = document.getElementById("btn")
//     back.style.background = "linear-gradient(to bottom , lightcoral, lightseagreen , white)";
//     clock.style.background = "linear-gradient(to top ,  teal , white)";
//     clock.style.boxShadow = "10px 10px 7px white"
//     clock.style.border = "2px solid teal"
//     btn.style.background = "linear-gradient(to left , lightcoral, white)";
//     btn.style.border = "3px solid  white"
//      btn.style.color = "  palevioletred"
//      btn.style.boxShadow = "10px 10px 7px palevioletred"
// }



function button() {
    const back = document.getElementById("back");
    const clock = document.getElementById("clock");
    const btn = document.getElementById("btn");

    if (isBackgroundChanged) {
        // Revert to original background
        back.style.background = "linear-gradient(to top, rgba(255, 255, 255, 0.829), rgba(38, 147, 236, 0.877)), url(back7.png)";
        back.style.backgroundRepeat ="no-repeat"
        back.style.backgroundSize ="cover"
        back.style.backgroundPosition ="center"
        clock.style.background = "linear-gradient(to top, rgba(255, 255, 255, 0.753), rgba(98, 98, 241, 0.863))";
        clock.style.boxShadow = "12px 12px 8px blue";
        clock.style.border = "2px solid white";
        btn.style.background = "skyblue";
        btn.style.border = "2px solid white";
        btn.style.color = "darkblue";
        btn.style.boxShadow = "10px 10px 8px lightblue";
    } else {
        // Change to new background
        back.style.background = "linear-gradient(to bottom , lightcoral, lightseagreen , white)";
        clock.style.background = "linear-gradient(to top , teal , white)";
        clock.style.boxShadow = "10px 10px 7px white";
        clock.style.border = "2px solid teal";
        btn.style.background = "linear-gradient(to left ,rgba(247, 132, 132, 0.918), white)";
        btn.style.border = "3px solid white";
        btn.style.color = "palevioletred";
        btn.style.boxShadow = "10px 10px 8px palevioletred";
    }

    // Toggle the flag
    isBackgroundChanged =! isBackgroundChanged;
}