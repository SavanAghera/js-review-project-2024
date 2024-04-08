class BaseClass {
    constructor() {
        this.element = document.getElementById(this.constructor.name);
    }
    render(renderFun) {
        const childElement = renderFun();
        this.element.innerHTML = '';
        this.element.append(childElement);
        this.listenEvent();
    }
    listenEvent() {
        let form = document.getElementById('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let category = document.getElementById('category').value;
            let name = document.getElementById('name').value;
            let price = parseInt(document.getElementById('price').value);
            if (name && category && price) {
                const existingProductIndex = tableData.findIndex(
                    (product) => product.category === category && product.productName === name
                );
                console.log(existingProductIndex)

                if (existingProductIndex !== -1) {
                    tableData[existingProductIndex].price += price;
                } else {
                    tableData.push({
                        productName: name,
                        category: category,
                        price: price,
                    });
                }

                document.dispatchEvent(new Event('submit'));
                this.render();
                document.getElementById('name').value = '';
                document.getElementById('category').value = '';
                document.getElementById('price').value = '';
            }
            //  else {
            //     alert('Please fill all the fields');
            // }
        });
    }
}