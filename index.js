// Write your solution here!
// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}
destructivelyAppendCat("Ralph")

function destructivelyPrependCat(name){
    cats.unshift(name)
}
destructivelyPrependCat("Bob")

function destructivelyRemoveLastCat(){
    cats.pop()
}
destructivelyRemoveLastCat()
function destructivelyRemoveFirstCat(){
    cats.shift()

}
destructivelyRemoveFirstCat()

function appendCat(name){
    return [...cats,name]
}
appendCat("Broom")

function prependCat(name){
    return [name,...cats]
}
prependCat("Arnold")

function removeLastCat(){
    const newCats =cats.slice(0,cats.length-1)
    return newCats
}
removeLastCat()

function removeFirstCat(){
    const newCats =cats.slice(1)
    return newCats
}
removeFirstCat()