// for each loop using in Array
let num = [1,2,3,4]
num.forEach=((Element) => {
    console.log(Element*Element)
})
// Array.from used to convert the objects to Array

let a  = "Asutosh sahoo"
let arr = Array.from(a)
console.log(arr)

// for .. of (used as a for loop to access the array elements)

for(let i of num){
    console.log(i)
}

// for -- in (used to access the keys of the array elements)


for(let i in num){
    console.log(i)
}


// we can also access the array elements by for in


for(let i in num){
    console.log(num[i])
}


// Array Map function (it's uses is same as the for each loop but in Map function it will create a new array )

let arr1 = [12,23,34,45,56]
let a1 = arr1.map((value,index,array) => {
    console.log(value,index,array)
    console.log(typeof value)
    return value + 1
})
console.log(a1)


// Filter function is used to filter the array and create a new array

let arr1 = [12,23,34,45,56,5,3,2,6,67,11,23]
let a1 = arr1.filter((value) => {
    return value > 5
})
console.log(a1)


//  Reduce function (it's basically add the elements)

let ar = [1,2,3,4,5,6,6,7,8,9]
let a3 = ar.reduce((h1,h2) => {
    return h1+h2
})
console.log(a3)