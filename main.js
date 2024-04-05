export const tableData = [
    { productName: 'a', category: 'a1', price: 3 },
    { productName: 'b', category: 'a1', price: 2 },
    { productName: 'c', category: 'a2', price: 2 },
    { productName: 'd', category: 'a3', price: 2 },
    { productName: 'e', category: 'a3', price: 2 },
];
const addBtn = document.getElementById("addBtn");


addBtn.onclick = function () {
    let item = document.getElementById("item").value;
    let category = document.getElementById("category").value;
    let price = +document.getElementById("price").value;

    if(price < 0){
        alert("price should not be negative");
        return;
    }

    // for(data of tableData){
    //     if(data.productName === item && data.category === category){
    //         data.price=price;
    //         return
    //     }
    // }

    let obj = {
        productName: item,
        category: category,
        price: price
    }
    tableData.push(obj)
    document.dispatchEvent(new Event("delete"))
    document.getElementById("item").value ="";
    document.getElementById("category").value="";
    document.getElementById("price").value="";
    console.log(tableData);
    // this.render()
}