const productName = document.getElementById("productName");
const category = document.getElementById("category");
const price = document.getElementById("price");
const add = document.getElementById("add");

const tableData = [
    { productName: 'a', category: 'a1', price: 3 },
    { productName: 'b', category: 'a1', price: 2 },
    { productName: 'c', category: 'a2', price: 2 },
    { productName: 'd', category: 'a3', price: 2 },
    { productName: 'e', category: 'a3', price: 2 },
];

function addData() {
    let temp = {};

    temp.productName = productName.value;
    temp.category = category.value;
    temp.price = +(price.value);

    tableData.push(temp);

    temp = {};
    productName.value = "";
    category.value = "";
    price.value ="";
    document.dispatchEvent(new Event("updateTable"))
    document.dispatchEvent(new Event("updateSidebar"))
}