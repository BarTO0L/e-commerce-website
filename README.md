***🛒 PRODUCTS CARDS PROJECT***


**🎯 Purpose**
This project aims to dynamically display product data stored in LocalStorage on the screen using Bootstrap cards, and to manage these products through adding, deleting, editing, and searching operations.


🧩 **Technologies Used**
* **HTML5** → Page structure
* **CSS (Bootstrap 5)** → Ready-made grid and card design
* **JavaScript (Vanilla JS)** → Data handling, DOM manipulation, and interaction management
* **LocalStorage API** → Persistent data storage in the browser

 
| **File**       | **Description**                                                                                           |
| -------------- | --------------------------------------------------------------------------------------------------------- |
| **index.html** | Contains the page structure and script links.                                                             |
| **project.js** | Defines the `Product` class (id, name, price, description, image).                                        |
| **storage.js** | Handles CRUD (Create, Read, Update, Delete) operations for managing products in LocalStorage.             |
| **ui.js**      | Renders product cards on the screen and manages inline editing, search, and delete operations.            |
| **app.js**     | Initializes the app at startup, handles form submissions, product addition, and manages overall workflow. |


⚙️ **Core Features**

✅ **Product Listing**

When the page loads, products stored in LocalStorage are automatically displayed.

✅ **Add Product**
Users can add new products by entering the name, price, description, and image through the form.

✅ **Inline Editing**

Each product card can be instantly edited by clicking the ✏️ button.

✅ **Delete Product**

Products can be permanently removed from LocalStorage using the 🗑️ icon.

✅ **Search Functionality**

Typing into the 🔍 search box filters products by their names in real time.

✅ **Persistent Data**

All operations are saved in LocalStorage, so products remain even after the page is closed and reopened.


🧠 **JavaScript Concepts Used**

* **Class (OOP)** → Object modeling with the `Product` class
* **localStorage** → Data persistence in the browser
* **map(), filter(), forEach()** → Array operations
* **DOM Manipulation** → Dynamic HTML generation
* **Event Listeners** → Handling user interactions
* **Template Literals** → Creating dynamic card content


👨‍💻 **Developer’s Note**

This project was developed to understand the logic of modern JavaScript and LocalStorage, and to practice data management and DOM interaction.
In its simplified form, it represents the basic product management logic of an e-commerce website.


