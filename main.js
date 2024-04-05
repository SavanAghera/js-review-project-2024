let tableData = [];
const form = document.forms[0];
const product = document.getElementById("product");
const category = document.getElementById("category");
const price = document.getElementById("price");
form.addEventListener(("submit"),function(event) {
    event.preventDefault();
    if (product.value.trim()==="" || category.value.trim() ==="" || price.value.trim()==="") {
        alert("please enter all the fields");
        return;
    }
    else if (+price.value<0) {
        alert("please enter valid price");
        return;
    }
    tableData.push({ productName: product.value.trim(), category: category.value.trim(), price: +price.value })
    document.dispatchEvent(new Event("added"));
    document.dispatchEvent(new Event("delete"));
    product.value=""
    category.value=""
    price.value=""
    product.focus();
});
export default tableData;