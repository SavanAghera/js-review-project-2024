const tableData = [
    { productName: 'a', category: 'a1', price: 3 },
    { productName: 'b', category: 'a1', price: 2 },
    { productName: 'c', category: 'a2', price: 2 },
    { productName: 'd', category: 'a3', price: 2 },
    { productName: 'e', category: 'a3', price: 2 },
];
export default tableData;

document.getElementById("add").addEventListener('click',()=>{
    let name = document.getElementById('name').value;
    let category = document.getElementById('category').value;
    let price = document.getElementById('price').value;

    let obj = {}
    obj.productName = name;
    obj.category = category;
    obj.price = +price;

    tableData.push(obj);
    console.log(tableData)

    document.dispatchEvent(new Event("addProduct"));
    document.dispatchEvent(new Event("delete"));
})