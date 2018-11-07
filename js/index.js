const cart = new Cart($('#cartModal'));
const productList = new ProductList('products.json', $('.products-container'), cart);

const product = JSON.parse(prodJSON);


function sortProduct (a, b) {
    return b.price-a.price;
}
