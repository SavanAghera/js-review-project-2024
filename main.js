// const tableData = [
//     { productName: 'a', category: 'a1', price: 3 },
//     { productName: 'b', category: 'a1', price: 2 },
//     { productName: 'c', category: 'a2', price: 2 },
//     { productName: 'd', category: 'a3', price: 2 },
//     { productName: 'e', category: 'a3', price: 2 },
// ];
let tableData = [];
const form = document.forms[0];
const product = document.getElementById("product");
const category = document.getElementById("category");
const price = document.getElementById("price");
form.addEventListener(("submit"),function(event) {
    event.preventDefault();
    tableData.push({ productName: product.value, category: category.value, price: +price.value })
    document.dispatchEvent(new Event("added"));
    product.value=""
    category.value=""
    price.value=""
    product.focus();
});
console.log(tableData);
export default tableData;