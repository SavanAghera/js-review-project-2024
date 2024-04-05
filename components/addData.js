import tableData from "../main.js";

const productName = document.getElementById("productName");
const category = document.getElementById("category");
const price = document.getElementById("price");
const btn = document.getElementById("addbtn");
let indexOfEditedData;

btn.addEventListener('click', () => {
    if(!(productName.value && category.value && price.value)){
        alert("Field can't be empty!")
        return;
    }

    if (btn.innerText === "ADD") {
        addData()
    }

    if (btn.innerText === "UPDATE") {
        updateData()
    }
})

function addData() {
    if (isNaN(Number(price.value))) {
        alert("Please enter only numerical values in the price field.");
        productName.value = "";
        category.value = "";
        price.value = "";
        return;
    }

    const isItemExist = tableData.find((item) => item.productName == productName.value);

    if (isItemExist) {
        alert("Product is alredy exist");
        productName.value = "";
        category.value = "";
        price.value = "";
        return;
    }

    tableData.push({ productName: productName.value, category: category.value, price: Number(price.value) });
    document.dispatchEvent(new Event('add'));
    productName.value = "";
    category.value = "";
    price.value = "";
}

function updateData() {
    if (isNaN(Number(price.value))) {
        alert("Please enter only numerical values in the price field.");
        productName.value = "";
        category.value = "";
        price.value = "";
        return;
    }

    tableData.splice(indexOfEditedData, 1, { productName: productName.value, category: category.value, price: Number(price.value) })
    document.dispatchEvent(new Event('add'));
    productName.value = "";
    category.value = "";
    price.value = "";
}

document.addEventListener('edit', (event) => {
    console.log(event);
    const editedData = event.detail;

    indexOfEditedData = editedData.index;

    productName.value = editedData.productName;
    category.value = editedData.category;
    price.value = editedData.price;

    btn.innerText = "UPDATE";
});
