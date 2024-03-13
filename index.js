// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
  cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
}

function appendCat(name) {
  let catList = [...cats];
  catList.push(name);
  return catList;
}

console.log(appendCat("rawa"));
console.log(cats);

function prependCat(name) {
  let catList = [...cats];
  catList.unshift(name);
  return catList;
}

function removeFirstCat(name) {
  let catList = [...cats];
  catList.shift(name);
  return catList;
}

function removeLastCat(name) {
  let catList = [...cats];
  catList.pop(name);
  return catList;
}
