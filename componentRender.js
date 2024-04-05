(() => {
    const table = new Table();
    const sidebar = new SideBar();
    table.render();
    sidebar.render();

    document.addEventListener('delete', () => {
        table.render();
        sidebar.render();
    });

    const addProductForm = document.getElementById('addProductForm');
        addProductForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const productNameInput = document.getElementById('productName').value;
            const categoryInput = document.getElementById('category').value;
            const priceInput = parseFloat(document.getElementById('price').value);

            if (productNameInput && categoryInput && !isNaN(priceInput)) {
                const newProduct = {
                    productName: productNameInput,
                    category: categoryInput,
                    price: priceInput,
                };
                tableData.push(newProduct);
                addProductForm.reset();
                const addEvent = new Event('add');
                document.dispatchEvent(addEvent);
            } else {
                alert('Please fill in all fields correctly.');
            }
        });

        document.addEventListener('add', () => {
            table.render();
            sidebar.render();
        });
        
})();