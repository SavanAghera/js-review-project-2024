(()=>()=>{[Table ,SideBar].map(component => new component().render())})()();

let add=document.getElementById('add');
let newProductName=document.getElementById('productName');
let newProductCatergory=document.getElementById('productCategory');
let newPrice=document.getElementById('price');
add.addEventListener("click",()=>{
    if(newProductCatergory.value.trim()!==""&&newProductName.value.trim()!==""&&newPrice.value.trim()!==""){
        let ab={
             productName: newProductName.value,
              category: newProductCatergory.value, 
              price: +newPrice.value 
            }
            // console.log(a);
            tableData.push(ab);
            (()=>()=>{[Table ,SideBar].map(component => new component().render())})()();
            newProductCatergory.value="";
            newProductName.value="";
            newPrice.value="";
    }
    else{
        alert("all fields are required")
    }
})