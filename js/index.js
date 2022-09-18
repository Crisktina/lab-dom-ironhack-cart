// ITERATION 1

function updateSubtotal(product) {
    const price = product.querySelector('.price span').innerText;
    const quantity = product.querySelector('.quantity input').value;
    let subTotal = product.querySelector('.subtotal span');
    let result = parseInt(price) * quantity;
    return (subTotal.innerHTML = result);
}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    // const singleProduct = document.querySelector('.product');
    // updateSubtotal(singleProduct);
    // end of test

    // ITERATION 2
    const allProduct = document.querySelectorAll('.product');
    console.log(allProduct);

    // for (i = 0; i < allProduct.length; i++) {
    //     updateSubtotal(allProduct[i]);
    // }
    let total = 0;
    allProduct.forEach((product) => {
        total += updateSubtotal(product);
    });

    // ITERATION 3
    const totalAll = document.querySelector('#total-value span');
    totalAll.innerText = total;
}

// ITERATION 4 BONUS

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    //... your code goes here
}

// ITERATION 5 BONUS

function createProduct() {
    //... your code goes here
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    // delete product from row
    document.querySelectorAll('.btn-remove').forEach((botonProducto) => {
        botonProducto.addEventListener('click', removeProduct);
    });
});