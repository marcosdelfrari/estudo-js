function multiplicar(x,y,z) {
    return x * y * z;
}

const mult = multiplicar(3,3,3)

console.log(mult)

function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true) {
        console.log ("pode")
    } else {
        console.log ("nao pode")
    }
}
console.log(podeDirigir(23,0))

console.log(podeDirigir(23,1))

console.log(podeDirigir(16,true))