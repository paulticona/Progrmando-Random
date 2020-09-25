        /*operadores logicos
        let a=5;
        let b=5;*/

        /*console.log((a+b)/3);
        console.log(a-b);
        console.log(a*b);
        console.log(a/b);
        console.log(a%b);*/
        

        /*console.log(a++);
        console.log(a);
        console.log(--b);
        console.log(b);*/

       /*let c=10;

        c+=3;
        console.log(c);
        c-=3;
        console.log(c);
        c*=3;
        console.log(c);
        c/=3;
        console.log(c);
        c%=3;
        console.log(c);*/
        
        /*Propiedades
        length:: devuelve la longitus de la cadena*/
        // let cadena="cadenaXD";
         //console.log(cadena.length);
        /*toUpperCase()*/
        // console.log(cadena.toUpperCase());
         /*si quisiera guardal este resultado en una variable
         sria asi:*/
         //let cadenaMayus=cadena.toUpperCase();
        
         
/*operador ternario
let age = parseInt(prompt('dime tu edad'), 10)
if(age){
let isAdult = age >= 18
             ? 'Eres mayor de edad'
             : 'Eres menor de edad'
alert(isAdult)
}else{
        age = parseInt(prompt('dime tu edad en nunmeros'), 10)
}*/
/*
//operdaodr de corto circuito  
let = null || 20   //le asigana 20
let = null && 20   //le asigna lo contrario

let edad = prompt('Dime tu edad')
if(edad <= 18){
        console.log('Eres menor de edad')
}else if(edad >=18){
        console.log('Eres mayor de edad')

}else{
        console.log('Ingresa un numero porfavor')
}
*/

/*

let afirmacion = prompt('¿Se siente usted culpable?')
if(afirmacion == 'si'){
        console.log('Culpable')
}else if(afirmacion == 'no'){
        console.log('Inocente')
}else{
        afirmacion = prompt('¿Se siente usted culpable? Responda SI o NO')
}
*/
/*
//funcion normal
function saludar(persona, sexo){
        let saludo = sexo === 'm'
                ? 'Bienvenido '
                : 'Bienvenida '
        return saludo + 'a EDteam, ' + persona
}

console.log(saludar('Paul','m'))

//funcion flecha
const Bienvenida = (p, sx) => {
        let s = sx == 'm'
                ? 'Bienvenido '
                : 'Bienvenida '
        return s + 'a Edteam, ' + p
}

console.log(Bienvenida('Danna', 'f'))

//funcion sumple
const suma = (a, b) => a+b
console.log(suma(1, 3))

//suma con parametro infinito REST
const sumarTodos = (...numeros) => {
        let resultado = 0
        for(let i = 0; i < numeros.length; i++){
                resultado = resultado + numeros[i]
        }
        return resultado
}

console.log(sumarTodos(1,11,1,1,2,2,2,546,4,684,654,864,6534,653,43))


//clousure 
let c = console.log
const sumar = (x) =>{
        return function(y){
                return x + y
        }
}

c(sumar(10)(10))

const multiplicar = n =>  m => n * m
c(multiplicar(5)(5))


//Array
let arrayDatos = ['hola', 'amigos', 'de', 'EDteam']
let [v1,v2,v3,v4,v5] = arrayDatos
console.log(arrayDatos)
console.log(v2)

//Manipulacion de arrays
arrayDatos.push('!!!')//agrega al final
console.log(arrayDatos)
arrayDatos.pop()        //elimina el final
console.log(arrayDatos)
arrayDatos.unshift('1')//agrega al inicio
console.log(arrayDatos)
arrayDatos.shift()      //quita al inicio
console.log(arrayDatos)

//splice
let paises = ['pru', 'colombia', 'mexico', 'italia']
c(paises)
c(paises.splice(2,0,'NuevaZelanda'))
c(paises)
//slice
c(paises.slice(1,4))

//ordenar
let numbers  = [2, 6, 4, 10, 15, 11, 33,100,300]
c(numbers)
//reverse 
c(numbers.reverse())
//sort
c(numbers.sort((a,b)=>a-b))

//convertir arrays a string y juntarlos
let numbers2 = [55,6,66,54,5,100,300]
c(numbers2)

c(numbers2.join(';'))
//juntar dos arrays
c(numbers.concat(numbers2))
//encontrar elemnetos
c(numbers2.indexOf(5))
c(numbers.find(number => number > 100))
c(numbers.findIndex(number => number > 100))


//FGuncion que elimina ITEMS REPETIDOS
const removeDuplicates = arr => [...new Set(arr)]
c(removeDuplicates([2, 3, 2]))

//recorre un array
for(let i = 0; i < numbers.length; i++){
        console.log(numbers[i])
}       

for (const num of numbers) {
        console.log(num + ' MR')
}

numbers2.forEach((recorre, i)  => {
        console.log(recorre)
        console.log(i)
        console.log(numbers2)
});

let teachers = ['Paul', 'Fernando', 'Einstein', 'Mr.Robot']

//some() every()
c(teachers.some(el => el === 'Paul'))
c(teachers.every(el => el.length >= 3 )) 

//.map()  .filter()   .reduce()
let newArray = numbers2.map(el => el * el)
console.log(newArray)

let otherArray = newArray.filter(el => el > 10000)
c(otherArray)

//OBJETOSS  >>>>>>>>>>>>>>>>>>>>>>v>>>>>>>>
let Paul = {
        Nombre: 'Paul',
        Edad:    25,
        Sexo:   'Masculino',
        Donante: true,

        Caminar(){
                c(this.Nombre + ' Camina')
        },

        
        donarOrganos(){
              if(this.Donante === true){
                      c(Paul.Caminar() + ' hacia la sala de operaciones')
              }  
        }
}
Paul.donarOrganos()

//hasOwnProperty : esta propiedad es de este objeto=???
for (let property in Paul) {
        if (Paul.hasOwnProperty(property)) {
                c(property)
        }
}
*/





//Ejercicios  Practica
/*
let edad = parseInt(prompt('Ingrese su edad'), 10)
if(edad <= 18){
        c('usted no puede conducir aun')
}else if(edad >= 18){
        c('ustede si pude conducir')
}else{
        c('ingrese Un numero')
}
*/
/*
let nota = parseInt(prompt('Ingrese su nota'), 10)
if(nota >= 0){
        if(nota < 3){
                c('Muy deficiente')
        }else if(nota >= 3){
                if(nota < 5){
                        c('Insuficiente')
                }else if(nota >= 5){
                        if(nota < 6){
                                c('Suficiente')
                        }else if(nota >=6){
                                if(nota < 7){
                                        c('Bien')
                                }else if(nota >= 7){
                                        if(nota < 8){
                                                c('Notable')
                                        }else if(nota >=8){
                                                if(nota <=10){
                                                        c('Sobresaliente')
                                                }
                                        }
                                }
                        }
                }
        }
}
*/
/*
do {
        let nota = parseInt(prompt('Ingrese su nota'), 10)
        if(Number(nota) == nota){
                if(nota >=0 && nota <=10){
                        if(nota < 3){
                                c('Muy deficiente')
                        }else if(nota < 5){
                                c('Insuficiente')
                        }else if(nota < 6){
                                c('Suficiente')
                        }else if(nota < 7){
                                c('Bien')
                        }else if(nota < 9){
                                c('Notable')
                        }else if(nota <= 10){
                                c('Sobresaliente')
                        }
                }else{
                        c('Nota erronea')
                }
        }else{
                alert('Introdusca un numero valido')
        }
            
} while (nota = );

*/

/*
//recibir cadenas hasta que cancelar
let caja = ''
do {
        let cadena = prompt('Ingrese cadenas')
        if(caja == ''){
                caja = caja + cadena
        }else{
                caja = caja + '-' + cadena
        }
        
} while (confirm('Desea seguir?'));
c(caja)
*/

/*      
//recibir numeros y sumarlos
let sumas = 0
let nums
do {
        let nums = parseInt(prompt('Ingrese numeros:'), 10)
        if(Number(nums)){
                sumas = sumas + nums
        }else{
                if(nums != undefined){
                        alert(nums + ' Esto no es un numero')
                }
        }   
} while (confirm('Desea continuar'));
c(sumas)
*/
/*
let resto = 0
let letra = ''
let numero
do {
        numero = parseInt(prompt('Ingrese su DNI: '), 10)
        if(Number(numero) == numero){
                numero = Number(numero)
                if(numero >= 0 && numero <= 99999999){
                        resto = numero % 23

                        switch(resto){
                                case 0:
                                        letra = 'T'
                                        break
                                case 2:
                                        letra = 'R'
                                        break
                                case 3:
                                        letra = 'W'
                                        break
                                case 4:
                                        letra = 'A'
                                        break
                                case 5:
                                        letra = 'G'
                                        break
                                case 6:
                                        letra = 'M'
                                        break
                                case 7:
                                        letra = 'Y'
                                        break
                                case 8:
                                        letra = 'F'
                                        break
                                case 9:
                                        letra = 'P'
                                        break
                                case 10:
                                        letra = 'D'
                                        break
                                case 11:
                                        letra = 'X'
                                        break
                                case 12:
                                        letra = 'B'
                                        break
                                case 13:
                                        letra = 'N'
                                        break
                                case 14:
                                        letra = 'J'
                                        break
                                case 15:
                                        letra = 'Z'
                                        break
                                case 16:
                                        letra = 'S'
                                        break
                                case 17:
                                        letra = 'Q'
                                        break
                                case 18:
                                        letra = 'V'
                                        break
                                case 19:
                                        letra = 'H'
                                        break
                                case 20:
                                        letra = 'L'
                                        break
                                case 22:
                                        letra = 'C'
                                        break
                                default:
                                        alert('Numero erroneo')
                        }
                }
                alert('Numero: ' + numero + ' Letra: ' + letra)
        }else{
                if(numero != undefined){
                        alert(numero + ' No es un numero')
                }
        }
} while (confirm('Desea continuar'));

c(resto)

*/


/*
let nombre = window.prompt('Introduce tu nombre: ')
let resultado = `hola, como estas ${nombre}`
c(resultado)
*/

/*
//llamar y mostar resultados en una layaut mediante su ID o clase
let num, data
data = prompt('Ingrese un numero')
num = parseInt(data)

let resultado = num * 2

document.getElementById('salida').innerHTML = (`El doble es:  ${resultado}`)
*/
//document.getElementById('salida').innerHTML = ('Hola Html')

/*
let num1 = parseInt(prompt('Ingrese un numero 1:'))
let num2 = parseInt(prompt('Ingrese un numero 2:'))
let res = num1 - num2
let mul = num1 * num2
document.write(`La resta es: ${res} </br>` + `La multiplicacion es: ${mul}`)
*/

/*
let contador = 1

while(contador > 0){

        let ingresar = parseInt(prompt('Ingrese un numero: '))

        if(ingresar === 7){
                document.write('Game over')
                break 
        }else{
                document.write(`CODE:  ${ingresar} </br>`)
        }
}
*/

/*
let n1 = parseInt(prompt('Ingrese #1: ')) 
let n2 = parseInt(prompt('Ingrese #2: '))

 n1 > n2 
        ? document.write(' Mayor N1: ' + `${n1}`)
        : n2 > n1
                ? document.write(' Mayor N2: ' + `${n2}`)
                : document.write(' Iguales')
*/



/*
alert(`Productos:
         - Ford  
                * fiesta.
                * focus.
         - Otros`)
let precioFordFiesta = 30000;
let precioFordFocus = 40000;
let descuento = 0
let marca = prompt('Ingrese la Marca: ')
let modelo = prompt('Ingrese Modelo')

if((marca == 'ford') && (modelo == 'fiesta')){
        descuento = precioFordFiesta * 0.05
        document.write(`${marca}</br> ${modelo}</br>Su descuento es de: ${descuento}`)
}else if((marca == 'ford') && (modelo == 'focus')){
        descuento = precioFordFocus * 0.10
        document.write(`${marca}</br> ${modelo}</br>Su descuento es de: ${descuento}`)
}
*/

/*
let iterar = 1
 while(iterar > 0){
        let años = parseInt(prompt('Ingrese su edad: '))
        if(años >= 18){
                document.write('Ingreso realizado')
                break
        }else{
                alert('Es menor de edad')
        }
}
*/
let iterar = 1
/*
alert(`CIVA:
         - Palma  
                * Barcelona.
                * Madrid.
                * Valencia.
`)

do{
let origen = prompt('Ingrese su origen: ')
let destino = prompt('Ingrese su destino:').fontsize(20)
if(origen == 'palma'){
        if(destino == 'barcelona'){
                document.write(`Su boleto es para: ${destino}`)
                break
        }else if(destino == 'madrid'){
                document.write(`Su boleto es para: ${destino}`)
                break
        }else{
                document.write(`Su boleto es para: ${destino}`)  
                break
        }
}else{
        alert('Elija su destino de la lista')
}
}while(iterar > 0)
*/

/*
let edd = prompt('Edad?: ', '0'), final
if(isNaN(edd)){
        final = 'Error. no es un numero'
}else{
        final = edd < 18 ? 'Demaciado joeven'
                         : 'Mayor de edad'
}
document.write(final)
*/
/*
do{
        let mes = parseInt(prompt('Ingrese # mes: '))
        if(isNaN(mes)){
                alert('Error. no es un numero')
        }else if(mes >= 1 && mes  <= 12){
                switch(mes){
                        case 1:
                                document.write('Enero: 31 dias')
                                break
                        case 2:
                                document.write('Febreo: 29 dias')
                                break
                        case 3:
                                document.write('Marso: 30 dias')
                                break
                        case 4:
                                document.write('Abril: 31 dias')
                                break
                        case 5:
                                document.write('Mayo: 30 dias')
                                break
                        case 6:
                                document.write('Junio: 30 dias')
                                break
                        case 7:
                                document.write('Julio: 29 dias')
                                break
                        case 8:
                                document.write('Agosto: 31 dias')
                                break
                        case 9:
                                document.write('Septembre: 40 dias')
                                break
                        case 10:
                                document.write('Octubre: 41 dias')
                                break
                        case 11:
                                document.write('Noviembre: 20 dias')
                                break
                        case 12:
                                document.write('Diciembre: 80 dias')
                                break
                        default:
                                       
                }

                break
        }else{
                alert('De 1 a 12 meses Porfavor.')
        }
}while(iterar > 0)
*/

/*
let mes = parseInt(prompt('Ingrese # mes: '))

if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || 
        mes == 8 || mes == 10 || mes == 12 ){
                document.write('Este mes tiene 31 dias ')
}else{
        if(mes == 2){
                document.write('Este mes puede tener 30 dias')
        }else{
                document.write('Este mes tiene 30 dias')
        }
}
*/

/*
//con una sola funcion
const inicia = () => {
        let numer = parseInt(document.getElementById('txt1').value)
        if(numer >= 5){
                alert('Aprobado')
        }else if(numer <= 5){
                alert('Desaprobado')
        }else{
                alert('Error')
        }
}

let boton1 = document.querySelector('#bot_inicia')
boton1.addEventListener('click', inicia)
*/

/*
//Interaccion de funciones
const verNota = (numer) => {
        let result = numer >= 5 ? 'Aprobado'
                                : 'Desaprobado'
        alert(result)
}
const inicia = () => {
        let valor1 = parseInt(document.getElementById('txt1').value)
         verNota(valor1)
}

let boton1 = document.querySelector('#bot_inicia')
boton1.addEventListener('click', inicia)
*/


/*
const mayorQue = (a, b) => {
        let result = a > b ? ' Mayor' + a 
                           : ' Mayor' + b
         alert(result)
}

let inicia = () => {
        const valor1 = parseInt(document.getElementById('tex1').Value)
        const valor2 = parseInt(document.getElementById('tex2').Value)
        mayorQue(valor1, valor2)
}
let boton1 = document.querySelector('#bot_inicia')
boton1.addEventListener('click', inicia)
*/





//        JavaScript EN LA WEB



/*
//          El DOM         


//si quiero utilizar los metodos .map comvierto la lista a ARRAY
const nodeList = Array.from(document.querySelectorAll('li')) 
nodeList.map(el => el.style.background = 'yellow')
*/

/*
//O tambien podemos recorrer la lista con FOR OF
//.trim().toUpperCase() son para quitar y comvertir a mausculas el texto
const nodeList = Array.from(document.querySelectorAll('li')) 
for(let el of nodeList){
        if(el.textContent.trim().toUpperCase() === 'OBJET'){
                el.remove()
        }
}
*/
/*
//Crear eleemento o etiquetas en el DOM con document.createElment()
//E introducirlos al HTML con appendChild()

const teacher = document.createElement('p')
const teacherContainer = document.getElementById('teacher')

teacher.textContent = 'Paul Ticona'
teacher.classList.add('teacher')

document.body.appendChild(teacher)

//esta condicional sirve para validar las variables y no haya ningun error
if(teacherContainer && teacherContainer.querySelector('span')){
        //con querySlector seleciono la etiqueta y appendChild para
        //agregar un contenido
        teacherContainer.querySelector('span').appendChild(teacher)
}
*/
/*
//       Eventos

//Escuchando eventos de teclado
let x = 0, y = 0
addEventListener('keyup', e =>{
        const ball = document.getElementById('ball')//selecciono el objeot etiqueta
        const move = direccion => {//funcion para mover
                switch(direccion){
                        case 'up':
                                y--
                                break
                        case 'down':
                                y++
                                break
                        case 'left':
                                x--
                                break
                        case 'right':
                                x++
                                break
                        default:
                                break
                }
                ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`
        }

        switch(e.key){
                case 'ArrowUp':
                        move('up')
                        break
                case 'ArrowDown':
                        move('down')
                        break
                case 'ArrowLeft':
                        move('left')
                        break
                case 'ArrowRight':
                        move('right')
                        break
                default:
                        break
        }

})
*/

/*
//eventos de formulario change, focus, blur, reset
const form = document.getElementById('form')
const rememberPassword = document.getElementById('remember-password')

form.addEventListener('submit', () => {
        console.log('Ha enviado el formulario')
})

rememberPassword.addEventListener('change', e => {
      if(e.target.checked){
              console.log('El usuario quiere recordar su contraseña')
      }else{
              console.log('El usuario NO quiere cordar su contraseña')
      }
})
*/
/*
//seleccionamos elementos
const video = document.getElementById('video'),
      playButtton = document.getElementById('play'),
      pauseButton = document.getElementById('pause')

playButtton.addEventListener('click', () => {
        video.play()
})

pauseButton.addEventListener('click', () => {
        video.pause()
})


//seleccionamos los div
//este ejemplo es para detener la propagacion de eventos
const div1 = document.getElementById('div-1')
const div2 = document.getElementById('div-2')
const div3 = document.getElementById('div-3')

document.querySelectorAll('.div-box').forEach(el => {
        el.addEventListener('click', e => {
                console.log('click')
// la propagacion de elementos(es cuando se produce una cadena de un evento a todos sus padres) es true
                e.stopPropagation()//con esta funcion lo denemos stopPropagation()
        })
})


//manejo de galleria con delegacion de eventos
const gallery = document.getElementById('gallery')

gallery.addEventListener('click', elementsgallery => {
        const t = elementsgallery.target,
              images = Array.from(gallery.querySelectorAll('img'))
              i = images.indexOf(t)
        console.log(`Hiciste click en la imagen ${i + 1}`)
})
*/
/*/
//      Manipular el DOM

const parent = document.getElementById('parent')
//.children: me devuelve hijos y no nietos; querySlectroAll():me devuelve
//hijos y nietos; childNodes: me devuelve hijos y texto; firstChid;lastChild
//firstElement;lastElement; hasChildDodes(tienes nodos de hijos??)

- Hijos
  - childNodes
  - children
  - firstChild
  - firstElementChild
  - lastChild
  - lastElementChild
  - hasChildNodes()
- Hermanos
  - nextSibling
  - nextElementSibling
  - previousSibling
  - previousElementSibling
- Padre
  - parentNode
  - parentElement

console.log(parent.childNodes)
*/

/*
//Ejercicio practico 2
let notaMedia = (x, y, z) => {
        let media = (x + y + z)/3
        let resultado = media > 5 ? 'Aprobado' : 'Desaprobado'
        alert(resultado)
}
        
let inicia = () => {
        const valor1 = Number(document.getElementById('text1').value)
        const valor2 = Number(document.getElementById('text2').value)
        const valor3 = Number(document.getElementById('text3').value)
        if(valor1 > 0 && valor1 > 0 && valor1 > 0){
                notaMedia(valor1, valor2, valor3)
        }else{
                alert('Error Ingrese mayores a 0')
        }
}

const boton1 = document.querySelector('#button_inicia')
boton1.addEventListener('click', inicia)
*/


/*
//Ejercicio 3
let mayorQue = (a,b) => {
        if(a > b){
                alert('mayor es el primero ' + a)
        }else{
                if(b > a){
                        alert('mayor es el segundo ' + b)
                }else{
                        alert('son iguales')
                }
        }
}

let inicia = () => {
        const valor1 = Number(document.getElementById('text1').value)
        const valor2 = Number(document.getElementById('text2').value)
        mayorQue(valor1, valor2)
} 

let buton1 = document.querySelector('#button_inicia')
buton1.addEventListener('click', inicia)
*/
/*
//Ejercicio 4
let comparar = (marca, modelo) => {
        marca == 'ford' || marca == 'Ford' 
                ? (descuento = 5) : marca == 'seat' 
                                  ? (descuento = 15) : (descuento = 10)
        alert(descuento)
}

let inicia = () => {
        const valor1 = (document.getElementById('text1').value)       
        const valor2 = Number(document.getElementById('text2').value)       
}
*/

/*

*/



