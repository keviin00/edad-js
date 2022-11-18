let edad = parseFloat(prompt("ingresa tu edad"));

if (edad < 18) {
    alert("Sos menor de 18");
}
else if ((edad => 18) && (edad < 60 )) {
    alert("Ya podes laburar");
}
else if ((edad => 60) && (edad <= 99 )){
    alert("jubilate");
}
else if(edad =>100){
    alert("No entiendo como vivis");
}
