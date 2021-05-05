class Size {
    static getSize(width, height) {
        if (width > height) {
            this.chooseSize(width, height)
        }

        if ((width <= 420) && (height <= 600)) {

            return 0; // index of price Array -> A2
        }
        else if ((width <= 600) && (height <= 900)) {

            return 1; // index of price Array -> A1
        }
        else if ((width <= 700) && (height <= 1000)) {

            return 2; // index of price Array -> A0
        }
        else {
            console.log("size is out of dimensions");
        }
    }

    chooseSize(width, height) {
        if (width < height) {
            width = height + width;
            height = width;
            width = width - height;
        }
    }
}

class Type {

    static getType(type) {
        if (type === "poster") {
            return posterArr
        } else if (type === "photo") {
            return photoArr
        } else if (type === "blueprint") {
            return blueprintsArr
        } else if (type === "blueprintcolor") {
            return blueprintsColorArr
        }
    }
}

class Material {

    static getMaterial(material) {
        if (material === "matt") {
            return 0 //matte
        } else if (material === "glossy") {
            return 1;
        } else if (material === "vatman") {
            return 2;
        } else if (material === "superglossy") {
            return 3;
        } else if (material === "offset") {
            return 4;
        }
    }
}

class Count {
    static getCount(count) {
        if (count > 1 && count <= 10) {
            return 0
        } else if (count >= 11 && count <= 30) {
            return 1
        } else if (count >= 31) {
            return 2
        }
    }
}



let count = Count.getCount(31)
console.log(`count = ${count}`);


let material = Material.getMaterial("matt");
console.log(`material = ${material}`);

let size = Size.getSize(594, 594);
console.log(`size = ${size}`);

let type = Type.getType("poster");

let pricePerOne = type[size][material][count]
console.log(pricePerOne);


