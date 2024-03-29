import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(prods: Product[]): void {    
    const allProductHTML = prods.map((prod: Product) => generateProductHTML(prod));
    let mainTop = document.getElementById("main-container");

    // Clear existing products
    if (mainTop) {
        mainTop.innerHTML = '';
    }

    for(const prodHTML of allProductHTML){
        mainTop!.innerHTML += prodHTML;
    }
}

function getByCategory(category: string): void {
    const selected = products.filter((x: Product) => x.category.includes(category));

    renderProducts(selected);
}

function getByRating(minRating: number): void {
    // your code
    renderProducts(products.filter( (p) => p.rating > minRating ))
}

export { renderProducts, getByCategory, getByRating };