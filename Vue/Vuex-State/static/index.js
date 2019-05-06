console.log("Hello, Vue! ")

let arr = [
    "hello, world",
    "hello, darkness..."
]

console.log(arr)
console.log(arr[0])
console.log(arr[1])

let obj1 = {
    key1: "val1", // or "key1"
    key2: "val2"
}

console.log(obj1)
console.log(obj1.key1)
// console.log(obj1.key2)
// console.log(obj1["key1"])
// console.log(obj1["key2"])

let obj2 = {
    obj3: {
        key1: 'val1',
        key2: 'val2'
    },
}

console.log(obj2)
console.log(obj2.obj3)
console.log(obj2.obj3.key1)
console.log(obj2.obj3.key2)
console.log(obj2.obj3["key1"])
console.log(obj2.obj3["key2"])

if (false) {
    console.log("if")
} else if (false) {
    console.log("else if")
} else {
    console.log("else")
}

false ? console.log(true) : console.log(false)

for (let x = 0; x < 3; x++) {
    console.log(x)
}

for (let msg of ["how", "are", "you"]) {
    console.log(msg)
}

function fun(arg) {
    if (!arg) {
        arg = "world"
    }
    return "hello, " + arg + "!" 
}

console.log(fun)
// console.log(fun())
// console.log(fun("js"))