
const newitemform=document.getElementById('newitemform');


newitemform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const {productName,category,price}=e.target.elements;
    if(isNaN(price.value)){
        alert("price is a number");
    }else{
        console.log({["productName"]:productName.value,["category"]:category.value,['price']:price.value})
        tableData.push({["productName"]:productName.value,["category"]:category.value,['price']:price.value})
        console.log("event object",reRenderTable);

        document.dispatchEvent(reRenderTable);
        document.dispatchEvent(upateInSideBar);
        // document.dispatchEvent('upateInSideBar')

    }

})