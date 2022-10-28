//manipular el dom : es el documento html

/*let cualquierElemento = document.images;*/

const d = document; // se crea esta variable para evotar copiar document varias veces
// hay 3 selectores en JS, el primero ya va de salida 
//que es seleccionar por clases
//getElementsByClassname

const container = document.getElementsByClassName('card')
console.log(container)

//seleccionar por ID: se hace con 
//getElementById unico elemento 

const gorras = d.getElementById('gorras')
const carrito = d.getElementById('carrito')

console.log(gorras)
console.log(carrito)

// la tercera forma de seleccionar en JS 
//la moderna es 
//querySelector()

const tarjeta = d.querySelector('.card')
console.log(tarjeta)

// ya que podemos solucionar elementos 
//podemos modificarlos tambien

let titulo = d.querySelector('main h6').innerText;

/*titulo = "Gorras Juan"
console.log(titulo)*/

titulo.innerText = "Gorras Juan"
console.log(titulo)


let titulo1 = d.querySelector('main h1').innerText;
// la unica diferencia es cuando css tenga visibility:hidden
let titulo2 = d.querySelector('main h1').textContent;
let titulo3 = d.querySelector('main h1').innerHTML;

console.log(titulo1)
console.log(titulo2)
console.log(titulo3)
