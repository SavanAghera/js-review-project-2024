const  tableData = [
    { productName: 'aff', category: 'a1', price: 3 },
    { productName: 'b', category: 'a1', price: 2 },
    { productName: 'c', category: 'a2', price: 2 },
    { productName: 'd', category: 'a1', price: 2 },
    { productName: 'e', category: 'a1', price: 2 },
    { productName: 'f', category: 'a1', price: 2 },

];

let productName = document.getElementById("productName");
let productCategory = document.getElementById("productCategory")
let productPrice = document.getElementById("productPrice")
let addBtn = document.getElementsByClassName("addBtn")[0];

addBtn.addEventListener("click",()=>{
    console.log("working",+productPrice.value)

    if(productName.value && productCategory.value && productPrice.value &&  !isNaN(Number(productPrice.value))){
       let obj = { productName: productName.value, category: productCategory.value, price: +productPrice.value }
       tableData.push(obj);
    }
    document.dispatchEvent(new Event('delete'));
    document.dispatchEvent(new Event('add'));
})


export default tableData
