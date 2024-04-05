(()=>()=>{[Table ,SideBar].map(component => new component().render())})()();

let pName=document.getElementById("pName");
let pCat=document.getElementById("pCat");
let pPrice=document.getElementById("pPrice");

let button=document.getElementById("add");

button.addEventListener('click',newItem);
function newItem(){
    const newObj={productName: pName.value, category: pCat.value, price: Number(pPrice.value), delete:"delete"};
    tableData.push(newObj);
  (()=>()=>{[Table ,SideBar].map(component => new component().render())})()();
}