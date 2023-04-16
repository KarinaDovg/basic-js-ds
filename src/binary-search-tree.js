const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.array = [];
  }
  root() {
    if(this.array.length == 0){
      return null;
    } else {
      return {data : this.array[0]}
    }
  }

  add(data) {
    return this.array.push(data);
  }
  has(data) {
    if(this.array.includes(data)){
      return true;
    } else {
      return false;
    }
  }

  find(data) {
    if(this.array.includes(data)){
      return {data : data};
    } else {
      return null;
    }
  }

  remove(data) {
    return this.array = this.array.map(i => {return i == data ? null : i}).filter(a => a !== null);
  }

  min() {
    return this.array.length == 0 ? null : this.array.sort((a, b) => a - b)[0];
  }

  max() {
    return this.array.length == 0 ? null : this.array.sort((a, b) => b - a)[0];
  }
}
module.exports = {
  BinarySearchTree
};