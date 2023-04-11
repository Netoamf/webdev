/*
    TIPOS DE DADOS

    Primitimos
        String //"ABC"
        number //1 2 3
        boolean //true false
        undefined // indefinido
        symbol
        BigInt

    Estruturais
        Objects
            array
            map
            set
            date
            ...
        Function

    Primitivo Estrutural / Structural root primitive

    *null
*/

/*
    String
    Cadeia de caracteres

    "" // aspas duplas

    '' // aspas simples

    `` // template literals ou template strings

*/ 

/*
    Number
        *números
    33 // inteiros
    12.5 // reais - float
    noN // not a number
    Infinity // infinito
*/

/*
    Boolean
        * somente 2 valores
        true //verdadeiro
        false // falso
*/

/*
    undefined // indefinido

    null
        nulo
        objeto não possui valor dentro
        diferente de indefinido
*/

/*
    Object
        objeto
        propriedades / atributos
        funcionalidades / métodos

    {propriedade: "valor"}
    
    console.log({
        name: "antonio",
        idade: "23",
        andar: function(){
            console.log('andar')
        }
    })
*/

/*
    Array (vetores)
        Uma lista
        agrupamento de dados

        ['antonio', 23]
*/

/* variaveis
    //var
    var clima = "quente"
    clima = "frio"
    console.log(clima)
    
    //let
    let clima = "quente"
    clima = "frio"
    console.log(clima)

    //const <- não pode mudar. É uma constante
    const clima = "quente"
    console.log(clima)

*/

/*
var é global e também local

console.log('>existe x antes do bloco?', x)

{
    var x = 0
}

console.log('> existe x depois do bloco?', x)

*/

//declaration
let nameOf 
//assignment
nameOf = "Tony"

//console.log(typeof name)

let age, isHuman 

age = 23
isHuman = true

console.log(name, age, isHuman)