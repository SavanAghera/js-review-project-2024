let tableData = [];
const productNameInput = document.getElementById('productName');
const categoryInput = document.getElementById('category');
const priceInput = document.getElementById('price');
const insertBtn = document.getElementById('insertBtn');

insertBtn.addEventListener('click', () => {
    const productName = productNameInput.value;
    const category = categoryInput.value;
    const price = parseInt(priceInput.value);

    tableData.push({ productName, category, price });

    productNameInput.value = '';
    categoryInput.value = '';
    priceInput.value = '';

    document.dispatchEvent(new Event('delete')); 
    document.dispatchEvent(new Event('render')); 
});

export { tableData };


// export const tableData = [
//     { productName: 'a', category: 'a1', price: 3 },
//     { productName: 'b', category: 'a1', price: 2 },
//     { productName: 'c', category: 'a2', price: 2 },
//     { productName: 'd', category: 'a3', price: 2 },
//     { productName: 'e', category: 'a3', price: 2 },
// ];