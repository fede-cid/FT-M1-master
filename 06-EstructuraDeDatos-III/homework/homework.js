"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value){
  this.value= value;
  this.right= null;
  this.left= null;
}

BinarySearchTree.prototype.insert=function(value){
  
  if(this.value < value) {
   if(this.right=== null ){
    this.right = new BinarySearchTree(value);
   }else { this.right.insert(value)
   }
} else{
  if(this.left===null) {
    this.left = new BinarySearchTree(value);
  }
  else {
    this.left.insert(value);
}
 }
}

BinarySearchTree.prototype.contains=function(value){
 if (this.value === null) return false;
    if (this.value=== value) return true;

      if(value> this.value){ 
        if(this.right === null)return false;
          else return  this.right.contains(value)
}
      if(value < this.value){
        if(this.left === null) return false;
           else return this.left.contains(value)
}

}


BinarySearchTree.prototype.size=function(){
  if(this.right === null && this.left === null) return 1
  if(this.right !== null && this.left === null) return 1 + this.right.size()
  if(this.right === null && this.left !== null) return 1 + this.left.size()
  if(this.right !== null && this.left !== null) return 1 + this.left.size() + this.right.size()
}

BinarySearchTree.prototype.depthFirstForEach = function(f, order){
if(order === "pre-order"){
f(this.value);
if(this.left !== null) this.left.depthFirstForEach(f, order);
if(this.right !== null) this.right.depthFirstForEach(f, order);
      }
else if(order==="post-order"){
if(this.left !== null) this.left.depthFirstForEach(f, order);
if(this.right !== null) this.right.depthFirstForEach(f, order);
f(this.value);
      }else{
if(this.left !== null) this.left.depthFirstForEach(f, order);
f(this.value);
if(this.right !== null) this.right.depthFirstForEach(f, order);
    } 
    }

// BinarySearchTree.prototype.breadthFirstForEach = function (f, array = []) {
//       if (this.left) {
//         array.push(this.left);
//       }
    
//       if (this.right) {
//         array.push(this.right);
//       }
    
//       f(this.value);
//       if (array.length > 0) {
//         array.shift().breadthFirstForEach(f, array);
//       }
//     };

BinarySearchTree.prototype.breadthFirstForEach = function (saver, result = []){

      // Le decimos a nuestro saver que guarde el root.
      saver(this.value);
  
      // Si a la izquierda del root hay algo, lo guardamos en nuestro array.
      if(this.left){
        result.push(this.left);
      }
  
      // Si a la derecha del root hay algo, lo guardamos en nuestro array.
      if(this.right){
        result.push(this.right);
      }
  
      // En caso de que nuestro array no esté vacío:
      if(result.length){
        //Le sacamos a nuestro array el elemento izquiero y lo guardamos en nuestro saver cuando recursemos.
        result.shift().breadthFirstForEach(saver, result);
      }
    }
    let arbolito = new BinarySearchTree(5)
    arbolito.insert(10)
    arbolito.insert(3)
    arbolito.insert(4)
    arbolito.insert(15)
    arbolito.insert(25)
    arbolito.insert(18)
    arbolito.insert(5)
    arbolito.insert(9)
    arbolito.insert(35)
    arbolito.insert(27)
    arbolito.insert(2)
    arbolito.insert(8)
    arbolito.insert(1)
    arbolito.breadthFirstForEach()
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
