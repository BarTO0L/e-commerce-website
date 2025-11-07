class Product {
    constructor(name, price, description, image, id = null) {
        this.id = id || Date.now();
        this.name = name;
        this.price = parseFloat(price) || 0;
        this.description = description || "No description provided.";
        this.image = image || "https://via.placeholder.com/300x200?text=No+Image";
    }

    getInfo() {
        return `${this.name} - $${this.price}`;
    }

    updatePrice(newPrice) {
        if (newPrice > 0) {
            this.price = parseFloat(newPrice);
        }
    }
}

const phone = new Product("iPhone 15", 58000, "Apple flagship phone", "iphone.jpg");
console.log(phone.getInfo());