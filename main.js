const addBtn = document.getElementById("addBtn");

export const tableData = [
    { productName: 'a', category: 'a1', price: 3 },
    { productName: 'b', category: 'a1', price: 2 },
    { productName: 'c', category: 'a2', price: 2 },
    { productName: 'd', category: 'a3', price: 2 },
    { productName: 'e', category: 'a3', price: 2 },
];

addBtn.onclick = function() {
    const pName = document.getElementById("pName");
    const pCategory = document.getElementById("pCategory");
    const pPrice = document.getElementById("pPrice");
    let productExist = false;
  
    if(!pPrice.value.trim() || !pName.value.trim() || !pCategory.value.trim() || +pPrice.value < 0) {
        alert("Write all the fields correctly");
        return;
    }
    tableData.forEach((data) => {
        if(data.productName.trim() === pName.value.trim() && data.category.trim() === pCategory.value.trim()) {
            alert("Product Already Exist");
            productExist = true;
        }
    })
   if(!productExist) {
       tableData.push({productName:pName.value.trim(),category:pCategory.value.trim(),price: +pPrice.value.trim()});
       document.dispatchEvent(new Event("delete"));
    }

    pName.value ="";
    pCategory.value=""
    pPrice.value = ""
}