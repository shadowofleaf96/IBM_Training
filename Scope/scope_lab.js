
// Global scope
var globalVar = "i'm a global variable"
let globalLet = "i'm also global, but scoped with let"
const globalConst = "i'm a global constant"


{
    // Block scope
    var blockVar = "i'm a block-scoped var"
    let blockLet = "i'm a block-scoped let"
    const blockConst = "i'm a block-scoped const"
}

console.log(globalVar)
console.log(globalLet)
console.log(globalConst)
console.log(blockVar)
// console.log(blockLet)

function show(){
    var functionVar = "i'm a block-scoped var"
    let functionLet = "i'm a block-scoped let"
    const functionConst = "i'm a block-scoped const"
}

show()

console.log(functionVar)
console.log(functionLet)
console.log(functionConst)