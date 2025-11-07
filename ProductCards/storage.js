const STORAGE_KEY = "products";

function getProducts() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function saveProducts(products) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

function addProduct(product) {
    const products = getProducts();
    products.push(product);
    saveProducts(products);
}

function removeProduct(id) {
    const products = getProducts().filter(p => p.id !== id);
    saveProducts(products);
}

function updateProduct(updatedProduct) {
    const products = getProducts().map(p =>
        p.id === updatedProduct.id ? updatedProduct : p
    );
    saveProducts(products);
}

function searchProducts(keyword) {
    const products = getProducts();
    return products.filter(p =>
        p.name.toLowerCase().includes(keyword.toLowerCase())
    );
}

