export var tflag = {flag:true};
export var dflag = {flag:true};

export const tableData = [
    { productName: 'a', category: 'a1', price: 3 },
    { productName: 'b', category: 'a1', price: 2 },
    { productName: 'c', category: 'a2', price: 2 },
    { productName: 'd', category: 'a3', price: 2 },
    { productName: 'e', category: 'a3', price: 2 },
];

document.getElementById('add').addEventListener('click',function(){
    const productName = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;

    if(productName.startsWith(" ") || category.startsWith(" ") || price.startsWith(" ") || productName === "" || category === "" || price === ""){
        alert('cannot add values starts with space or empty values or invalid values');
        return false;
    }
    if(price < 0){
        alert('invalid price')
        return false;
    }
    const exist = tableData.findIndex((ele)=> productName === ele.productName);
    if(exist !== -1){
        let temp = {};
        temp.productName = productName;
        temp.category = category;
        temp.price = Number(price);
        tableData.splice(exist,1,temp);
    }else{
        let temp = {};
        temp.productName = productName;
        temp.category = category;
        temp.price = Number(price);
        tableData.push(temp);
    }
    document.dispatchEvent(new Event('delete'));
    document.dispatchEvent(new Event('table'));
    document.getElementById('name').value = "";
    document.getElementById('category').value= "";
    document.getElementById('price').value="";
})