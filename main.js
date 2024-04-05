const addForm = document.getElementById("submit");
const name = document.getElementById("name");
const category = document.getElementById("category");
const price = document.getElementById("price");

addForm.addEventListener("click", function(e) {
    e.preventDefault();
    addObjectToTableData(name.value, category.value, price.value);
    
    name.value = "";
    category.value = "";
    price.value = "";

    document.dispatchEvent(new Event('delete'));
});

// console.log(addForm);
function addObjectToTableData(productName, category, price) {
    const newObj = {
        productName: productName,
        category: category,
        price: +price
    };

    tableData.push(newObj);
}

export let tableData = [
    { productName: 'a', category: 'a1', price: 3 },
    { productName: 'b', category: 'a1', price: 2 },
    { productName: 'c', category: 'a2', price: 2 },
    { productName: 'd', category: 'a3', price: 2 },
    { productName: 'e', category: 'a3', price: 2 },
];

export function updateTableData(index) {
    tableData.splice(index, 1);
}
