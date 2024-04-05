function addData() {
  console.log("I'm getting called");
  let productName = document.getElementById("name").value;
  let category = document.getElementById("category").value;
  let price = +document.getElementById("price").value;

  for(let obj of tableData){
    if(obj.productName === productName){
        alert("This product already exists");
        return;
    }
  }

  let obj = {
    productName,
    category,
    price,
  };

  tableData.push(obj);
  document.dispatchEvent(new Event('delete'));
}

function listenEvent() {
    document.addEventListener('delete', () => this.render())
}
