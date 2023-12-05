const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

window.onload = function generateString() {
    let result = Math.floor(Math.random() * 10);
    console.log(result);
    document.getElementById("frase").innerHTML = result.toString;
}
