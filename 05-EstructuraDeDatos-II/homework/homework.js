"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
//HEAD // {NODO VALUE 1 NEXT: {value:2 , NEXT:{VALUE:3 NEXT:NULL}}}}

function LinkedList() {
  this.head=null;
  }
  
  function Node(value) {
    this.value=value;
    this.next=null;
  }
  LinkedList.prototype.add=function(value){
    const nodito = new Node(value)
    if(!this.head){
      this.head= nodito
    }else{
      let current = this.head
      while(current.next){
        current=current.next
      }
      current.next= nodito
      return nodito
    }
  }

LinkedList.prototype.remove= function(){
  if(this.head==null){
  return null;
  }if(this.head.next==null){ // si mi primer nodo su next es null
    let save= {}//
    save = this.head.value// guarda el valor de ese node en save cortando la funcion
    this.head= null// estas borrando el primer nodo
    return save
  }else {//si el primer nodo si tiene un valor en next ejecuto esto
    let current = this.head//me posiciono en le primer nodo sabeiendo que existe un segundo
    let save = {}
    while(current.next){//si existe current. next hace...
      if(!current.next.next== null) //si current.next.next es distinto de null
      current=current.next//posiciona a current en el sigueinte nodo
      else (current.next.next== null)//si current.next.next es igual a null 
       save = current.next.value//guarda y devolveme el valor de current. next
       current.next= null
       return save

    }
  }
}

/*
HEAD = NULL ------------------devuelve null
HEAD -> 1 -> 2-> 5 

SERCH(2) ---------------------devuelve 2
HEAD -> value:1 next:{value:2 next:{value:3 next:null}
SERCH (CB) -------------------devuelve cb
HEAD -> value:1 next:{value:2 next:{value:3 next:{value:cb() next: null}}
SERCH(7)----------------------DEVUELVE NULL*/


//search(10)
LinkedList.prototype.search= function(value){
  if(!this.head) return null;// si el head es null devolveme null
  let current= this.head;//creamos nuestro posicionador diciendo que current es head
  while(current){//mientras current existe o es true
    //HEAD -> value:1 next:{value:2 next:{value:3 next:{value:cb() next: null}}
    if(current.value=== value) // 
    return current.value;// deveolveme ese valor
    else if(typeof value == 'function') {//
      if(value(current.value)){//
        return current.value// return la funcion
      }
    }
    current = current.next//
  } 
  return null//
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)*/



function HashTable(buckets){
  this.numBuckets= buckets || 35;
  this.data = new Array(this.numBuckets);
};


HashTable.prototype.hash = function(key) {
  let sumar= 0;
  for (let i = 0; i < key.length; i++) {
     sumar += key.charCodeAt(i);
    
  }
  return sumar%35
}

HashTable.prototype.set = function(key,value) {
 if(typeof key !== "string") throw new TypeError('Keys must be strings');
  let j = this.hash(key);

 if(this.data[j]=== undefined){
  this.data[j]= {};
 }
 this.data[j][key] = value;
}
HashTable.prototype.get = function(key) {
let j = this.hash(key)
return this.data[j][key]
}
HashTable.prototype.hasKey = function(key) {
  let j = this.hash(key)
return this.data[j].hasOwnProperty(key);
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
