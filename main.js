const tableData = [
    { productName: 'a', category: 'a1', price: 3 },
    { productName: 'b', category: 'a1', price: 2 },
    { productName: 'c', category: 'a2', price: 2 },
    { productName: 'd', category: 'a3', price: 2 },
    { productName: 'e', category: 'a3', price: 2 },
];

const table = new Table(tableData);
const sidebar = new SideBar(table);

table.render();
sidebar.render();

function addProduct() {
    const name = document.getElementById('name').value.trim();
    const category = document.getElementById('category').value.trim();
    const price = document.getElementById('price').value.trim();

    if(!(name && category && price)){
        alert("Enter valid data.");
        return;
    }
    
    const newRow = { productName: name, category: category, price: parseFloat(price) };
    
    table.tableData.push(newRow);
    
    table.render();
    sidebar.render();
    console.log(table.getRenderData())
}