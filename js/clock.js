
let nickName = prompt("Lütfen isminizi giriniz...");
let nameChanger = document.querySelector("#myName");

let fullName= `${nickName[0].toUpperCase()}${nickName.slice(1)}`; 

nameChanger.innerHTML = fullName;

function showTime() {
    let date = document.querySelector("#myClock");
    let tarih = new Date().toLocaleString("tr-TR")
    date.innerHTML= tarih;
    setInterval(showTime, 1000); 
}