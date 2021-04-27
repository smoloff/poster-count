class Product {
    constructor(count, size, material, type) {
        this.count = count;
        this.size = size;
        this.material = material;        
        this.type = type;
        this.arr = undefined;
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
            console.log("A2");
            return 0; // index of price Array -> A2
        }
        else if ((smallerSize <= 600) && (biggerSize <= 900)) {
            console.log("A1");
            return 1; // index of price Array -> A1
        }
        else if ((smallerSize <= 700) && (biggerSize <= 1000)) {
            console.log("A0");
            return 2; // index of price Array -> A0
        }
        else {
            console.log("size is out of dimensions");
        }
    }
}

class Type {
    constructor(type) {
        this.type = type;
        this.getType();
    }

    getType(type) {
        if (type === "poster") {            
            return posterArr
        } else if ( type === "photo") {            
            return photoArr
        } else if (type === "blueprint") {            
            return blueprintsArr
        } else if (type === "blueprintcolor") {            
            return blueprintsColorArr
        }
    }
}

class Material {
    constructor(material){
        this.material = material;
        this.getMaterial();
    }

    getMaterial(material) {
        if (material === "matt") {
            return 0 //matte
        } else if (material === "glossy")  {
            return 1;
        } else if (material === "vatman") {
            return 2;
        } else if (material === "superglossy")  {
            return 3;
        } else if (material === "offset") {
            return 4;
        }
    }
}

class Count {
    counstructor (count){
        this.count = count
        this.getCount();
        }

        getCount(count) {
            if (count > 1 && count <=10) {
                return 0
            } else if (count >= 11 && count <= 30) {
                return 1
            }
            else if (count >= 31) {
                return 2
            }
        }
    }

let count = new Count 
count.getCount(31);

let material = new Material;
material.getMaterial("matt");

let type = new Type;
type.getType("poster");
// let calculation = new Calculator;
// calculation.addProduct(new Product(22, new Size(400, 600), "glossy", "poster"));