class Product{
    constructor(name, price, category){
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percentage){
        this.price = this.price - (this.price * percentage / 100);
    }

    getDetails(){
        return `Product: ${this.name}, Price: ${this.price}, Category: ${this.category}`;
    }
}


export default Product;