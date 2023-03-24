function converterParaKm() {
    var valorElemento = document.getElementById("distancia");
    var distancia = valorElemento.value;
    var valorAnosLuz = parseFloat(distancia);
    
    var ValorEmKm = valorAnosLuz * 9000000000000;
    var elementoValorEmKm = document.getElementById("valorConvertidoParaKm");
    var valorKmFinal = "O resultado em Km é aproximadamente  " + ValorEmKm;
    
    elementoValorEmKm.innerHTML = valorKmFinal;
    
    console.log(ValorEmKm);
} 