
// 1)let num1 = -3; // Puedes cambiar este valor para probar diferentes casos

// if (num1 > 0) {
//     console.log("EL NUMERO ES POSITIVO");
// } else if (num1 < 0) {
//     console.log("EL NUMERO ES NEGATIVO");
// } else {
//     console.log("EL NUMERO ES CERO");
// }


// 2)let num = 10;

// if (num % 2 === 0) {
//     console.log("El número es par");
// } else {
//     console.log("El número es impar");
// }

// 3)for (let i = 1; i < 11; i++) {
//     console.log(i); 
//     }
// 1,2,3,4,5,6,7,8,9,10

// 4)for (let i = 1; i < 11; i++) {
//     if (i % 2 == 0){ 
//         console.log(i)}
//  } 2 4 6 8 10
      
// 5)let i = 10;
// while (i > 0) {
// console.log(i); 
// i--;
// }

// 6)let suma = 0;
// for (let i = 1; i <= 100; i++) {
//     suma += i;
//     console.log(suma);
// }
// console.log("La suma de los números del 1 al 100 es:", suma);

// 7)let arreglo= [0,1,2,3,4,5,6,7,0]
// num=0
// for(let i = 0; i < arreglo.length; i++){
//        if(arreglo[i]>num )
//        num=arreglo[i]
// }
// console.log(arreglo[num])

// 8)let arreglo= ["a","ab","abc","abcd"]
// for(let i=0;i < arreglo.length;i++){
//        if(arreglo[i].length > 3 ){
//        console.log("la frase "+ arreglo[i]+ " tiene más de 3 caracteres " )}
//        else {console.log("no tiene mas de 3 caracteres")}
// }

// 9)let num = 10
// for(let i=0; i<=num;i++){
//        if(i%2==0){ console.log(i)}   
// }

// 10)let num=10
// let suma=0
// for(let i=1; i<=num; i++){
//        if(i%2!=0){suma+=i}      
// }
// console.log(suma)

// 11)let arreglo = [0, 0, 0, 0, 0, 0];
// let todosIguales = true;
// for (let i = 1; i < arreglo.length; i++) {
//     if (arreglo[i] !== arreglo[0]) {
//         todosIguales = false;
//         break;
//     }
// }
// if (todosIguales) {
//     console.log("Todos los elementos son iguales.");
// } else {
//     console.log("No todos los elementos son iguales.");
// }


// 12) let arreglo= ["ahí","abominable","abc","abcd"]
// let palabramaslarga= arreglo[0]
// for(leti=0 ;i < arreglo.length;i++){
//        if(arreglo[i].length>palabramaslarga.length ){
//        palabramaslarga=arreglo[i]}
// }
// console.log("la palabra mas larga es "+ palabramaslarga)

// 13) let i=0
// while(i<10){
//     if(i % 2 != 0){
//         console.log(i)
//     }
//     i++
// }

// 14) let i = 0;
// let usuario = "";
// let contraseña = "";
// while (i < 3) {
//     usuario = prompt("Ingrese usuario:");
//     if (usuario === "admin") {
//         contraseña = prompt("Ingrese contraseña:");
//         if (contraseña === "asdf") {
//             alert("BIENVENIDO GORDITO LECHERO");
//             break; 
//         } else {
//             alert("Contraseña incorrecta");
//         }
//     } else {
//         alert("Usuario incorrecto");
//     }
//     i++;
// }
// if (i === 3) {
//     alert("Número máximo de intentos alcanzado. Acceso denegado.");
// }


// 15) let a = 0
// let b = 0
// let arreglo = [-4,-3,-2,-1,-5,1,2,3,4,5]
// for(let i = 0; i < arreglo.length; i++ ){
//     if(arreglo[i]>=0){
//         a +=arreglo[i]
//     }
// else {
//     b +=arreglo[i]
// }
// }
// console.log(a)
// console.log(b)

// 16) let a = 20
// let num = 0

// for(let i = 1 ; i<= 10; i++){
//    num = a * i 
//    console.log(` ${i} x ${a} = ${num}`)
// }


