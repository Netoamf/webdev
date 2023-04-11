# Scope 
* Escopo determina a visibilidade de alguma variável no JS

# Block Statement

```` js
{

}

## var 
``` JavaScript
// var é global e poderá funcionar fora de um escopo de bloco

console.log('>existe x antes do bloco?', x)

{
    var x = 0
}

console.log('> existe x depois do bloco?', x)
````

## let e const 
* const e let são locais e só funcionam no escopo onde foram criadas.
``` JavaScript
console.log('existe y antes do bloco?', y)

{
    let y = 0
}

console.log('existe y depois do bloco?', y)