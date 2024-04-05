const addButton = document.getElementById("add");
let pName = document.getElementById("productName");
let cName = document.getElementById("catagory");
let priceN = document.getElementById("price");

addButton.addEventListener('click',(e)=>{
    if(pName.value && cName.value && priceN.value){
        tableData.forEach(item=>{
            if(item.productName === pName.value){
                alert("product already exist");
                throw Error("product already exist");
            }
        });
        console.log(+priceN.value === NaN)
        if( typeof priceN.value !== 'number' && priceN.value < 0){
            alert("price should be number and it should be greater then 0");
            throw Error("price should be number and it should be greater then 0");
        }
        tableData.push({productName:pName.value,category:cName.value,price:+priceN.value})
        document.dispatchEvent(new Event("delete"));
        pName.value = '';
        cName.value = '';
        priceN.value = '';
        console.log(tableData)
    }else{
        alert("enter all the values");
    }
})
