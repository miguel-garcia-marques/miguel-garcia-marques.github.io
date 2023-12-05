const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

window.onload =function generateString() {
    let result = Math.floor(Math.random() * charactersLength);
    document.getElementById("frase").innerHTML = result.toString;
}
