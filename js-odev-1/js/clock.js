
    // İsim kısmı
var isim = document.getElementById("myName");
isim.innerHTML = prompt("İsminizi Girin, Saate Yazdıralım");

// saat kısmı
function showTime(){  
var saat = new Date();
var gun = new Array(7); //arraylar indexi 0'dan başlar
gun[0] = "Pazar";
gun[1] = "Pazartesi";
gun[2] = "Salı";
gun[3] = "çarşamba";
gun[4] = "Perşembe";
gun[5] = "Cuma";
gun[6] = "Cumartesi";

var haftaGun = gun[saat.getDay()];

    var saat1 = saat.getHours();
    var dakika1 = saat.getMinutes();
    var saniye1 = saat.getSeconds();
    if(saat1 < 10){
            saat1 = `0${saat1}`;        
    }
    if(dakika1 < 10){
            dakika1 = `0${dakika1}`;    
    }  
    if(saniye1 < 10){
            saniye1 = `0${saniye1}`;     
    }

var saatHesap = 
`${saat1}:${dakika1}:${saniye1} - `;
    var toplam = saatHesap.concat(haftaGun);
    document.getElementById("myClock").innerHTML = toplam;

    var time;
    time = setInterval('showTime()', 1000);
}
