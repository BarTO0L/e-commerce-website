const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");

function renderProducts(products) {
    productContainer.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("col-12", "col-md-4");

        card.innerHTML = `
        <div class="card h-100 shadow-sm">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${product.name}</h5>
                <p class="text-primary fw-bold">$${product.price}</p>
                <p class="card-text">${product.description}</p>
                <div class="mt-auto d-flex justify-content-between">
                    <button class="btn btn-sm btn-warning edit-btn" data-id="${product.id}">✏️ Edit</button>
                    <button class="btn btn-sm btn-danger delete-btn" data-id="${product.id}">🗑️ Delete</button>
                </div>
            </div>
        </div>
        `;

        productContainer.appendChild(card);
    });


    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = Number(e.target.dataset.id);
            removeProduct(id);
            renderProducts(getProducts());
        });
    });


    document.querySelectorAll(".edit-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = Number(e.target.dataset.id);
            startInlineEdit(id);
        });
    });
}


function startInlineEdit(id) {
    const products = getProducts();
    const product = products.find(p => p.id === id);
    if (!product) return;

    const cardBody = document.querySelector(`[data-id="${id}"]`).closest(".card-body");

    cardBody.innerHTML = `
        <input type="text" class="form-control mb-2 edit-input" id="edit-name-${id}" value="${product.name}">
        <input type="number" class="form-control mb-2 edit-input" id="edit-price-${id}" value="${product.price}">
        <textarea class="form-control mb-2 edit-input" id="edit-desc-${id}">${product.description}</textarea>
        <input type="text" class="form-control mb-2 edit-input" id="edit-image-${id}" value="${product.image}">
        <div class="d-flex justify-content-between">
            <button class="btn btn-sm btn-success save-btn" data-id="${id}">💾 Save</button>
            <button class="btn btn-sm btn-secondary cancel-btn" data-id="${id}">❌ Cancel</button>
        </div>
    `;


    cardBody.querySelector(".save-btn").addEventListener("click", () => saveInlineEdit(id));
    cardBody.querySelector(".cancel-btn").addEventListener("click", loadAllProducts);


    const inputs = cardBody.querySelectorAll(".edit-input");
    inputs.forEach(input => {
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                saveInlineEdit(id);
            } else if (e.key === "Escape") {
                loadAllProducts();
            }
        });
    });


    cardBody.querySelector(".edit-input").focus();
}


function saveInlineEdit(id) {
    const name = document.getElementById(`edit-name-${id}`).value.trim();
    const price = document.getElementById(`edit-price-${id}`).value.trim();
    const description = document.getElementById(`edit-desc-${id}`).value.trim();
    const image = document.getElementById(`edit-image-${id}`).value.trim();

    if (!name || !price) {
        alert("Name and Price are required!");
        return;
    }

    const updatedProduct = new Product(name, price, description, image, Number(id));
    updateProduct(updatedProduct);


    const products = getProducts();
    renderProducts(products);
}


function loadAllProducts() {
    const products = getProducts();
    renderProducts(products);
}

searchInput.addEventListener("input", (e) => {
    const keyword = e.target.value.trim();
    const filtered = searchProducts(keyword);
    renderProducts(filtered);
});

document.addEventListener("DOMContentLoaded", loadAllProducts);
