

let hourEl = document.querySelector('.hour');
let minuteEl = document.querySelector('.minute');
let secondEl = document.querySelector('.second');

let ticker = () => {

    let today = new Date();

    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    let hdeg = Math.round(((h/12)*360));
    let mdeg = Math.round(((m/60)*360));
    let sdeg = Math.round(((s/60)*360));

    hourEl.style.transform = `rotate(${hdeg}deg)`;
    minuteEl.style.transform = `rotate(${mdeg}deg)`;
    secondEl.style.transform = `rotate(${sdeg}deg)`;
}

setInterval(ticker, 1000);

