
// ---Modulo Algoritmos ---
// EJERCICIO 1
let numero1 = prompt("Hola!. Escribe un número") //genero una variable para almacenar el dato

primo = true; //genero un true para evaluar la condición

for (i = 2 ; i < numero1; i++){//Recorro el número para que cuente desde 2 y evalúe si el resto es cero,para que se divida por si mismo.
    if(numero1 % i == 0){
        primo = false
    }
    
}
if(primo){
    alert("Tu número es Primo");
}else{
    alert("El numero no es primo");
}


// EJERCICIO 2
let pass = ""; //dato necesario
let test1 = "";//dato para evaluar lo ingresado por teclado
let contador = 0;//establezco un contador para generar un ciclo

pass = prompt("Hola, ingresa una contraseña")
while(contador<3){//genero un ciclo que mientras el contador sea menor a 3, se repita la instrucción
    test1 = prompt("Volvé a escribir tu contraseña para ingresar.")
if(pass == test1 ){//Si da la igualdad, informo
    alert("Felicitaciones, recordas tu contraseña.");
    break; //interrumpo el ciclo while
}
if(pass!=test1){//evalúo que no haya igualdad
    contador++//si  no hay igualdad, el contador suma e informo.
    alert("Tenes que ejercitar tu memoria");
}
};


// EJERCICIO 3

let varhora,nombre, antAnos, hsTrabajadas; //establezco nombre de variable para los datos requeridos.

let aCobrar = 0; // contador para el resultado necesario

varhora = prompt("Ingresar el Valor hora en número")
nombre = prompt("Ingrese el nombre del empleado")
antiguedad = prompt("Antiguedad en años")
hsTrabajadas = prompt("Horas trabajadas")

if(antAnos >10){//si la antiguedad es menor a 10, se ejecuta este bloque.
    plusAntiguedad= antAnos * 30 ;//genero variable para usar en el bloque
    aCobrar = varhora * hsTrabajadas + plusAntiguedad; //uso el contador inicial para calcular
    
    alert(`${nombre},vas a cobrar $${aCobrar}   según tu antiguedad de ${antAnos} años por tus ${hsTrabajadas} horas trabajadas.`);
}//uso backticks para usar mis variables en lugar de concatenar con "" y +
else{//como solo hay dos opciones en el programa, uso un else para los que no tienen mayor antiguedad.
aCobrar = varhora * hsTrabajadas;
alert(`${nombre}, vas a cobrar $${aCobrar}  según tu antiguedad de ${antAnos} por tus ${hsTrabajadas} horas trabajadas.`);
};

// EJERCICIO 4 

let numero = parseInt(Math.random()* (1000 - 0)); /*uso el objeto math para 
encontrar un número aleatorio y lo multiplico por el rango de números que necesito, 
ya que el objeto devuelve números entre 0 y 1 y establezco que sea entero con
parseint*/
let test=""; //variable para evaluar condiciones
let registro = []; /*genero un array para guardar y usar el registro, como la suma
requerida o verificar el mayor o menor*/ 
let sumaTotal = 0 ;//suma total
console.log(numero);//Uso un log para ver en consola el número
while( numero != test){//Mientras el número no sea el generado, el ciclo continúa.
let test = parseInt(prompt("Ingresa un número entre 0 y 1000 para divinar el generado"));
/*solicito un número entero usando parseint ya que de otra forma el número puede
ingresarse como string y concatenarse en caso de sumar con otro*/
if(test > numero){
console.log("El número es menor")
registro.push(test);
}
else if(test < numero){/*uso else if para que evalúe si la primer condicion no 
    fue true*/
    console.log("El número es mayor")
    registro.push(test);//ingreso el registro en la lista de registros
}
else if( test == numero){//En caso de adivinar el número, respondo según la actividad
    console.log("Acertaste!")
    let suma = test + numero;//sumo los números generados
    console.log(registro);//muestro todos los números ingresados
    console.log(`La suma de los números es ${suma}`)
    let minimo = Math.min(...registro);//de los números ingresados, uso el objeto math para evaluar cual es el menor en el array
    let maximo = Math.max(...registro);// esto tambien se puede evaluar con un for como mas adelante.
    console.log(`El valor minimo ingresado es ${minimo}`);
    console.log(`El Mayor número ingresado es ${maximo}`);
    for( i = 0 ; i < registro.length; i++){/*hago un for para recorrer mi
    array de registros calculando la longitud total y sumando cada registro según
    su indice*/ 
        sumaTotal += registro[i]
    }
    console.log(`La suma de los numeros ingresados es ${sumaTotal}`)
    break;
}
};



