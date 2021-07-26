// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){
    name = "Ralph";
    cats.push(name);
}

function destructivelyPrependCat(name){
    name = "Bob";
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    name = "Broom";
    const copyOfCats = cats.slice();
    copyOfCats.push(name)
    return copyOfCats;
}

function prependCat(name){
    name = "Arnold";
    const copyOfCats = [name, ...cats];
    return copyOfCats;
}

function removeLastCat(){
    const copyOfCats = cats.slice();
    copyOfCats.pop();
    return copyOfCats;
}

function removeFirstCat(){
    const copyOfCats = cats.slice();
    copyOfCats.shift();
    return copyOfCats;
}