import Product from "./7_product.js";
class Inventory {
    constructor() {
        this.products = [];
    }

    addProducts(product) {
        product = new Product(...product);
        this.products.push(product);
    }

    getTotalValue() {
        return this.products.reduce((acc, product) => acc + product.price, 0);
    }

    findProductByName(name) {
        return this.products.find(product => product.name === name);
    }

    getDetails() {
        return this.products.map(product => product.getDetails());
    }

    applyDiscount(percentage) {
        this.products.forEach(product => product.applyDiscount(percentage));
    }
}

export default Inventory;