class Product {
    constructor(name) {
        this.name = name
    }
    somefunc(){
        let a = this.name;
        return a;
    }
}

let human = new Product("Ivan");
console.log(human.somefunc());