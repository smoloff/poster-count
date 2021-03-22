class Product {
    constructor(count, size = 2, material = "glossy", type) {
        this.count = count;
        this.size = size;
        this.material = material;
        this.arr = undefined;
        this.type = type;
        this.typeFinder(this.type, this.materialFinder);
        console.log(this.arr);
    }

    materialFinder(){
        let i;
        this.material === "glossy" ? i = 1 : i = 0;
        return i;
        console.log(i);
    }

    typeFinder(element1, element2) {
        let a = element2;

        if (element1 === "poster") {
            this.arr = posterArr;
            console.log("element2 ${}" + a )
            // console.log(`arr =  ${this.arr}`)
        }
    }
}


let poster = new Product(22, 1, "glossy", "poster");

console.log(poster.materialFinder());
