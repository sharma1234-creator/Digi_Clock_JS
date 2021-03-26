const clock = () => {
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var period = "AM";
    if(hrs == 0){
      hrs = 12;
    }
    else if(hrs>=12){
      hrs = hrs - 12;
      period = "PM";
    }
   hrs = hrs < 10 ? "0" + hrs : hrs;
   min = min < 10 ? "0" + min : min;
   sec = sec < 10 ? "0" + sec: sec;

   var can = `${hrs}:${min}:${sec}:${period}`;
   
   document.getElementById("clock").innerText = can;
   setTimeout(clock,1000);
};
clock();