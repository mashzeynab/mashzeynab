"use strict";

const gender = "male";
const timeOclock = 4

if (gender == "male") {
  console.log("سلام آقا خوش امدید");
} else if (gender == "women") {
  console.log("سلام خانوم خوش امدید");
}

if(timeOclock > 1 && timeOclock <= 12){
    console.log("صبح بخیر")
}else if(timeOclock > 12 && timeOclock <= 16){
    console.log("ظهر بخیر")
}else if(timeOclock > 16 && timeOclock <= 19){
    console.log("عصر بخیر")
}else {
    console.log("شب بخیر")
}