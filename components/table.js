// Function to handle form submission
let needsRender = false;
document.addEventListener('submit', (event) => {
    event.preventDefault();
    const productName = document.getElementById('productName').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    const productCategory = document.getElementById('productCategory').value;

    if (productName.trim() === '' || isNaN(productPrice) ||productPrice<0 || productCategory.trim() === '') {
        alert('Please fill all fields correctly.');
        return;
    }

    // Check for duplicate entry
    if (tableData.some(item => item.productName === productName && item.category === productCategory)) {
        alert('Duplicate entry! This product already exists in the table.');
        return;
    }

    // Add new item to tableData
    tableData.push({ productName, category: productCategory, price: productPrice });
    needsRender = true;
    document.dispatchEvent(new Event('add'));
});
class Table extends BaseTable {
    needsRender = false;
    getRenderData() {
        return tableData;
    }
    
    getCellData(data) {
        return [
            { text: data.productName, elementName: 'td', handleClick: '' },
            { text: data.category, elementName: 'td', handleClick: '' },
            { text: data.price, elementName: 'td', handleClick: '' },
            { text: 'Delete', elementName: 'td', handleClick: () => this.deleteRow(data) } // Add delete button
        ];
    }
    
    deleteRow(data) {
        // Remove the row from tableData
        const index = tableData.findIndex(item => item === data);
        if (index !== -1) {
            tableData.splice(index, 1);
            // Trigger re-render of the table
            this.render();
            // Trigger deletion event for the sidebar to update its data
            document.dispatchEvent(new Event('delete'));
        }
    }
    listenEvent() {
    needsRender = true;

        document.addEventListener('add', () => this.render());
    }

}