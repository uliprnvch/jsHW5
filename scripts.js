let productOfBank = []

class Product {
    constructor(name, percent, timeOfCap){
        this.name = name;
        this.percent = percent;
        this.timeOfCap = timeOfCap;
    }
}

function addProduct() {
    let newProduct
    newProduct = new Product (
        document.querySelector('.bank_name').value,
        document.querySelector('.bank_percent').value,
        document.querySelector('.bank_cap-term').value
    )
    productOfBank.push(newProduct)
}