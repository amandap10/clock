function update(){
    let display = document.querySelector('.display');

    let now = new Date();
    let hours = correctTime(now.getHours()) + ":" + correctTime(now.getMinutes()) + ":" + correctTime(now.getSeconds());


display.textContent = hours;
}

function correctTime(numbers){
    if(numbers < 10){
        numbers = '0' + numbers;
    }
    return numbers;
}

correctTime();
setInterval(update, 1000);