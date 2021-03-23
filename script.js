class Product {
    constructor(count, size = 2, material = "glossy", type) {
        this.count = count;
        this.size = size;
        this.material = material;
        this.arr = undefined;
        this.type = type;
    }


}

class Size {
    constructor(width, height) { // values from inputs & from select {A2, A1, A0, 50x70, 40x50, 60x90, 60x80, 100x70}
        this.width = width;
        this.height = height;
        if (this.width < this.height) {
            this.getSize(this.width, this.height);
        } else {
            this.getSize( this.height, this.width);
        }

    }

    getSize(smallerSize, biggerSize) {
        if ((smallerSize <= 420) && (biggerSize <= 600)) {
            return 0; // index of price Array -> A2
        }
        else if ((smallerSize <= 600) && (biggerSize <= 900)) {
            return 1; // index of price Array -> A1
        }
        else if ((smallerSize <= 900) && (biggerSize <= 1200)) {
            return 2; // index of price Array -> A0
        }
    }


}

class Calculator {
    constructor() {
        this.size;
        this.count;
        this.material;
        this.type;
        this.priceArray =[];
    }

    addProduct(product) {
        this.size = product.size;
        this.count = product.count;
        this.material = product.material;
        this.type = product.type;
        this.findSize();
        this.findType();


    }

    findSize() {
        if (this.size === 0) {
            console.log(0);
            return 0;

        } else if (this.size === 1) {
            console.log(1);
            return 1;

        } else {
            console.log(2);
            return 2;
        }
    }

    findType() {
        if (this.type === "poster"){
            this.priceArray = posterArr;
        } else if (this.type === "photo"){
            this.priceArray = photoArr;
        } else if  (this.type === "blueprints"){
            this.priceArray = blueprintsArr;
        } else if (this.type === "blueprintsColor"){
            this.priceArray  = blueprintsColorArr;
        }
        console.log(this.priceArray);
    }
    // findMaterial() {
    //     return this.material === "glossy" ? 1 : 0;
    // }
}


let calculation = new Calculator;
calculation.addProduct(new Product(22, new Size(400, 600), "glossy", "poster"));


// console.log(poster.materialFinder());
