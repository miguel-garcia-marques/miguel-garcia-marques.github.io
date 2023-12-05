const frases = ["Deus ama-te", "Tira um tempo para estar na presença de Deus hoje!", "Entrega as tuas ansiedades aos pés de Deus."];

window.onload =function generateString() {
    let result = ' ';
    const charactersLength = frases.length;
    result = frases[Math.floor(Math.random() * charactersLength)];
    document.getElementById("frase").innerHTML = result;
}
