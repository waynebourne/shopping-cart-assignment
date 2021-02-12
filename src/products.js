import 'regenerator-runtime/runtime';
let productsData = [];
let categoryLinks = null;

async function getCategories() {
    let data = sessionStorage.getItem('categories');
    if (!data) {
        data = await fetch('http://localhost:5000/categories');
        data = await data.json();
        data.sort((a, b) => a.order - b.order);
        sessionStorage.setItem('categories', JSON.stringify(data));
    }
    else {
        data = JSON.parse(data);
    }
    const categoriesPane = document.querySelector('.categories-row');
    for (let element of data) {
        if (element.enabled) {
            const divElement = document.createElement('div');
            divElement.classList.add('col-12', 'p-3', 'individual-category');
            const anchorElement = document.createElement('a');
            anchorElement.textContent = element.name;
            anchorElement.href = '#';
            anchorElement.classList.add('category-link');
            anchorElement.id = element.id;
            divElement.append(anchorElement);
            categoriesPane.append(divElement);
        }
    }
    categoryLinksClickInit();
}

async function getProducts() {
    let data = await fetch('http://localhost:5000/products');
    productsData = await data.json();
    console.log(data);
    const categorySelected = sessionStorage.getItem('categorySelected');
    if (categorySelected) {
        filterProducts(categorySelected);
    }
    else {
        renderProducts(productsData);
    }
}

function renderProducts(data) {
    const productsRow = document.querySelector('.products-row');
    productsRow.innerHTML = '';
    data.forEach(element => {
        const divElement = document.createElement('div');
        divElement.classList.add('col-lg-3', 'col-md-6', 'col-sm-12', 'my-3', 'text-center', 'product-box');
        const h4 = document.createElement('h4');
        h4.textContent = element.name;
        const image = document.createElement('img');
        image.src = element.imageURL;
        image.height = '150';
        image.alt = element.name;
        const prodDescription = document.createElement('p');
        prodDescription.classList.add('product-description', 'text-left', 'mt-2');
        prodDescription.textContent = element.description;
        const priceBuyDiv = document.createElement('div');
        priceBuyDiv.classList.add('flexbox-space-between');
        const priceDiv = document.createElement('div');
        priceDiv.textContent = `MRP Rs. ${element.price}`;
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-danger', 'btn-sm');
        button.type = 'button';
        button.id = element.id;
        button.textContent = `Buy Now`;
        priceBuyDiv.append(priceDiv, button);
        divElement.append(h4, image, prodDescription, priceBuyDiv);
        productsRow.append(divElement);
    });
}

function categoryLinksClickInit() {
    categoryLinks = document.querySelectorAll('.category-link');

    categoryLinks.forEach(link => {
        link.addEventListener('click', () => { filterProducts(link.id) });
    });
}

function filterProducts(id) {
    let filteredData = productsData.filter(x => x.category === id);
    renderProducts(filteredData);
}

window.onbeforeunload = () => sessionStorage.removeItem('categorySelected');

// document.addEventListener("unload", () => sessionStorage.removeItem('categorySelected'));

getCategories();
getProducts();