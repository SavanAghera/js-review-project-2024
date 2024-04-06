class BaseClass {
    constructor() {
        this.element = document.getElementById(this.constructor.name);
        this.listenEvent();
    }
    render(renderFun) {
        const childElement = renderFun();
        this.element.innerHTML = '';
        this.element.append(childElement);
        // this.listenEvent();
    }
    listenEvent() {
        let form = document.getElementById('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let name = document.getElementById('name').value;
            let category = document.getElementById('category').value;
            let price = document.getElementById('price').value;
            tableData.push({ productName: name, category: category, price: price });
            if (name && category && !isNaN(price)) {
                tableData.push({ productName: name, category: category, price: price })
                document.dispatchEvent(new Event('submit'));
            }
            else{
                alert('Please fill all the fields')
            }
            this.render();
            document.getElementById('name').value = '';
            document.getElementById('category').value = '';
            document.getElementById('price').value = '';
        })
    }
}