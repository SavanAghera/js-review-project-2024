const tableData = [
    { productName: 'a', category: 'a1', price: 3 },
    { productName: 'b', category: 'a1', price: 2 },
    { productName: 'c', category: 'a2', price: 2 },
    { productName: 'd', category: 'a3', price: 2 },
    { productName: 'e', category: 'a3', price: 2 },
];



let productName = document.getElementById("productinput");
let category = document.getElementById("category");
let price = document.getElementById("price");

let add = document.getElementById("addbtn");
add.addEventListener("click", addData)

function addData() {

    if ((productName.value != "" && category != "" && price.value != "" && price.value != "e")) {
        tableData.forEach(item => {
            if (item.productName != productName.value) {

                let obj = {
                    productName: productName.value,
                    category: category.value,
                    price: price.value
                }
                tableData.push(obj);
                console.log(obj);
                console.log(tableData);

                productName.value = "";
                price.value = "";
                category.value = ""
            }
        })

    }

    document.dispatchEvent(new Event("delete"));

}
export default tableData;