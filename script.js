let celciusInput = document.querySelector('#celcius > input');
let farenheitInput = document.querySelector('#farenheit > input');
let kelvinInput = document.querySelector('#kelvin > input');
let reset=document.querySelector('.reset');

celciusInput.addEventListener("input", function () {
    let cTemp = parseFloat(celciusInput.value);
    let ftemp = (cTemp * (9 / 5)) + 32;
    let kTemp = ((cTemp) + 273.15);

    farenheitInput.value = ftemp;
    kelvinInput.value = kTemp.toFixed(2);
})

farenheitInput.addEventListener("input", function () {
    let fTemp = parseFloat(farenheitInput.value);
    let ctemp = (fTemp - 32) * (5 / 9);
    let kTemp = (fTemp - 32) * (5 / 9) + 273.15

    celciusInput.value = ctemp.toFixed(2);
    kelvinInput.value = kTemp.toFixed(2);
})

kelvinInput.addEventListener("input", function () {
    let kTemp = parseFloat(kelvinInput.value);
    let ctemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15) * (9 / 5) + 273.15;

    celciusInput.value = ctemp.toFixed(2);
    farenheitInput.value = fTemp.toFixed(2);
})

reset.addEventListener("click",function(){
    celciusInput.value="";
    farenheitInput.value="";
    kelvinInput.value="";
})