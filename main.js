const tableData = [
    { productName: 'a', category: 'a1', price: 3 },
    { productName: 'b', category: 'a1', price: 2 },
    { productName: 'c', category: 'a2', price: 2 }, 
    { productName: 'e', category: 'a3', price: 2 },
    { productName: 'd', category: 'a3', price: 2 },
    { productName: 'e', category: 'a3', price: 2 },
    
];

function addData(){
const productname = document.getElementById('pName');
const categories = document.getElementById('cat');
const price = document.getElementById('price');
 
let temp = {};
 temp.productName = productname.value;
 temp.category = categories.value;
 temp.price = +(price.value);

 tableData.push(temp);
 
 productname.value='';
 categories.value='';
 price.value='';

 document.dispatchEvent(new Event("updatesidebar"));
 document.dispatchEvent(new Event("updatetablebar"));

}