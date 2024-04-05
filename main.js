export const tableData = [
    { productName: 'a', category: 'a1', price: 3 },
    { productName: 'b', category: 'a1', price: 2 },
    { productName: 'c', category: 'a2', price: 2 },
    { productName: 'd', category: 'a3', price: 2 },
    { productName: 'e', category: 'a3', price: 2 },
];
const addBtn = document.getElementById("addBtn");


addBtn.onclick = function () {
    const item = document.getElementById("item").value;
    const category = document.getElementById("category").value;
    const price = +document.getElementById("price").value;

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
    console.log(tableData);
    // this.render()
}