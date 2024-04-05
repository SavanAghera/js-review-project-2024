(()=>()=>{[Table , SideBar].map(component => new component().render())})()();


function addProduct(){
    let productName = document.getElementById("productName");
    let category = document.getElementById("category");
    let price = document.getElementById("price");

    if(!productName.value.trim() || !category.value.trim() || !price.value.trim()){
        alert("Please enter all the fields");
    } else {
        const event = new Event('add');
        event.data = {
            productName: productName.value,
            category: category.value,
            price: +price.value,
        }
        document.dispatchEvent(event);
    }

    productName.value = "";
    category.value = "";
    price.value = "";
}
