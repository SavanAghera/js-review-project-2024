const tableData = [
    { productName: 'a', category: 'a1', price: 3 },
    { productName: 'b', category: 'a1', price: 2 },
    { productName: 'c', category: 'a2', price: 2 },
    { productName: 'd', category: 'a3', price: 2 },
    { productName: 'e', category: 'a3', price: 2 },
];

const add = document.getElementById('add')


add.addEventListener('click', (event) => {
    event.preventDefault();
    const price = document.getElementById('price').value;
    const product = document.getElementById('product').value;
    const category = document.getElementById('category').value;
    if (price && product && category) {
        const obj = { 'productName': product, 'category': category, 'price': +price }
        console.log(obj);
        tableData.push(obj);
    }
})

export default tableData;