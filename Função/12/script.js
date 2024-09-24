const recursao = (n) => {
    if (n - 1 < 2){
        console.log("numero par")
    } else if (n % 2 != 0) {
        console.log("numero impar " + n)
        recursao(n - 1)
    } else {
        console.log("numero par " + n)
        recursao(n - 2)
        
    }
}

recursao(3)
recursao(1)
recursao(23)
recursao(22)