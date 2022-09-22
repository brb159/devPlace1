let lista = [1,5,50,60,70,89]

function listaEnteros(l,n){
    for( i = 0 ; i < l.length; i++){
        if(l[i] == n){
delete(l[i])
        }
    }
    return l;
    };


function reemplazar(pila,viejo,nuevo){
    let lista = [];
    for(i = 0 ; i <= pila.length ; i++){
          num = pila.pop();
        if(num == viejo){
            lista.push(nuevo)
        }else{
            lista.push(num)
        }
    }
    return console.log(pila);
};

class Password{
    constructor(a, b){
        this.longitud = longitud,
        this.contraseña = contraseña
        }
    };

const pas = new Password("10", "hola");
console.log(pas);