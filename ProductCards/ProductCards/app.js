const container = document.querySelector(".container");
const form = document.createElement("form");
form.classList.add("mb-4");
form.innerHTML = `
    <div class="row g-2">
        <div class="col-md-3">
            <input type="text" id="nameInput" class="form-control" placeholder="Product Name" required>
        </div>
        <div class="col-md-2">
            <input type="number" id="priceInput" class="form-control" placeholder="Price" required>
        </div>
        <div class="col-md-4">
            <input type="text" id="descInput" class="form-control" placeholder="Description">
        </div>
        <div class="col-md-3">
            <input type="text" id="imageInput" class="form-control" placeholder="Image URL">
        </div>
    </div>
    <button type="submit" class="btn btn-primary mt-2">Add Product</button>
`;

container.insertBefore(form, container.firstChild);

const nameInput = document.getElementById("nameInput");
const priceInput = document.getElementById("priceInput");
const descInput = document.getElementById("descInput");
const imageInput = document.getElementById("imageInput");

let editingProductId = null;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const price = priceInput.value.trim();
    const description = descInput.value.trim();
    const image = imageInput.value.trim();

    if (!name || !price) return alert("Name and Price are required!");

    if (editingProductId) {
        const updatedProduct = new Product(name, price, description, image, editingProductId);
        updateProduct(updatedProduct);
        editingProductId = null;
        form.querySelector("button").textContent = "Add Product";
    } else {
        const newProduct = new Product(name, price, description, image);
        addProduct(newProduct);
    }

    loadAllProducts();
    form.reset();
});

function fillFormForEdit(product) {
    nameInput.value = product.name;
    priceInput.value = product.price;
    descInput.value = product.description;
    imageInput.value = product.image;

    editingProductId = product.id;
    form.querySelector("button").textContent = "Update Product";
}
