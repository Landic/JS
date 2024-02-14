function Task1(){
    let img = new Array("img/0.gif","img/1.gif","img/2.gif","img/3.gif","img/4.gif","img/5.gif","img/6.gif","img/7.gif","img/8.gif","img/9.gif");
    const hour = document.getElementsByClassName("hour");
    const minutes = document.getElementsByClassName("minute");
    const seconds = document.getElementsByClassName("second");
    const time = new Date();
    let h = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    function GetImage(timeUnit2){
        const timeStr = timeUnit2.toString().padStart(2, '0');
        const timeInts = timeStr.split('').map(digit => parseInt(digit));
        return [img[timeInts[0]], img[timeInts[1]]];
    }
    function SetInitialImages() {
        const [h1, h2] = GetImage(h);
        hour[0].src = h1;
        hour[1].src = h2;
        
        const [m1, m2] = GetImage(min);
        minutes[0].src = m1;
        minutes[1].src = m2;
    
        const [s1, s2] = GetImage(sec);
        seconds[0].src = s1;
        seconds[1].src = s2;
    }
    function Time(){
        const time2 = new Date();
        let currentHour = time2.getHours();
        let currentMinute = time2.getMinutes();
        let currentSecond = time2.getSeconds();
        if(currentSecond !== sec){
            sec = currentSecond;
            seconds[0].src = GetImage(currentSecond)[0];
            seconds[1].src = GetImage(currentSecond)[1];
        }
        if(currentMinute !== min){
            min = currentMinute;
            minutes[0].src = GetImage(currentMinute)[0];
            minutes[1].src = GetImage(currentMinute)[1];
        }
        if(currentHour !== h){
            h = currentHour;
            hour[0].src = GetImage(currentHour)[0];
            hour[1].src = GetImage(currentHour)[1];
        }
    }

    setInterval(Time, 1000);
    SetInitialImages();
}

Task1();