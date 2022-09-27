/**
 * Sets Data Structure is like an array ecxcept there is no duplicate
 * items and the values are in a particular order
 * it is usually used to check the presence of an item
 */

function mySet() {
  // this will hold the set
  let collection = [];
  //to check the presence of an element and returm true or false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };
  //this metthod will return all the values in the set
  this.values = function () {
    return collection;
  };
  //this method will addd an element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  //this method will remove an element from a set
  this.delete = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };
  //this method will return the size of the collection
  this.size = function () {
    return collection.length;
  };
  //this method will return the union ofsets
  this.union = function (otherSet) {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };
  //this method will return the intersection for two sets as a new set
  this.intersection = function (otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      intersectionSet.add(e);
    });
    return intersectionSet;
  };
  //this method will return the difference of two sets as a new set
  this.differenceSet = function (otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };
  this.subset = function (otherSet) {
    let firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}
let setA = new mySet();
let setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.differenceSet(setA).values());

var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));
