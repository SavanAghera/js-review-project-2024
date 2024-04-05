const tableData = [
    { productName: 'a', category: 'a1', price: 3 },
    { productName: 'b', category: 'a1', price: 2 },
    { productName: 'c', category: 'a2', price: 2 },
    { productName: 'd', category: 'a3', price: 2 },
    { productName: 'e', category: 'a3', price: 2 },
];
const addBtn = document.getElementById("addBtn");
function addProduct() {
    const productNameInput = document.getElementById("productName");
    const categoryInput = document.getElementById("category");
    const priceInput = document.getElementById("price");

    const productName = productNameInput.value;
    const category = categoryInput.value;
    const price = +priceInput.value;

    productNameInput.value = "";
    categoryInput.value = "";
    priceInput.value = "";

    if (!isFinite(price)) {
        alert("price should be number");
        return;
    }
    if (!productName || !category || !price) {
        alert("enteries can't be empty");
        return;
    }
    tableData.push({
        productName, category, price
    })
    document.dispatchEvent(new Event("productAdded"));
    document.dispatchEvent(new Event("delete"));
    alert("Product Added");
}
addBtn.addEventListener("click", addProduct);
export { tableData };