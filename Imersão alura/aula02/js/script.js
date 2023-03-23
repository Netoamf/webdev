function converterParaReal() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorNumerico = parseFloat(valor);
    
    var ValorEmReal = valorNumerico * 5;
    var elementoValorConcertido = document.getElementById("valorConvertidoParaReal");
    var valorConvertido = "O resultado em real é R$ " + ValorEmReal;
    
    elementoValorConcertido.innerHTML = valorConvertido;
    
    console.log(ValorEmReal);
} 

function converterParaEuro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorNumerico = parseFloat(valor);
    
    var ValorEmEuro = valorNumerico * 0.92;
    var ValorEmEuroFixed =ValorEmEuro.toFixed(1)
    var elementoValorConcertido = document.getElementById("valorConvertidoParaEuro");
    var valorConvertido = "O resultado em Euro é EUR " + ValorEmEuroFixed;
    
    elementoValorConcertido.innerHTML = valorConvertido;
    
    console.log(ValorEmEuroFixed);
} 

function converterParaYuan() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorNumerico = parseFloat(valor);
    
    var ValorEmYuan = valorNumerico * 6;
    var ValorEmYuanFixed =ValorEmYuan.toFixed(1)
    var elementoValorConcertido = document.getElementById("valorConvertidoParaYuan");
    var valorConvertido = "O resultado em Yuan é CNY " + ValorEmYuanFixed;
    
    elementoValorConcertido.innerHTML = valorConvertido;
    
    console.log(ValorEmYuanFixed);
} 