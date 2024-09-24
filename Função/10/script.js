
const id = (x, y) => console.log("seu nome é" + x + "e seu id é" + x + y );

console.log(id("marcos",22))


const id2 = (x, y=2) => {
    if (y == undefined) {
        console.log("seu nome é " + x + "  nao cadastrou id");
    } else {
        console.log("seu nome é" + x + "e seu id é" + x + y );
    }
}
id2("marcos",22)
id2("marcos")