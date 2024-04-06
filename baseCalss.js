class BaseClass {
    constructor() {
        this.element = document.getElementById(this.constructor.name);
        this.listenEvent();
    }
    render(renderFun) {
        const childElement = renderFun();
        this.element.innerHTML = '';
        this.element.append(childElement);
       
    }
    listenEvent() {
        const form = document.getElementById('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const category = document.getElementById('productCategory').value;
            const productName = document.getElementById('productName').value;
            const price = parseInt(document.getElementById('productPrice').value);
            if (category && productName && !isNaN(price)) {
                tableData.push({ productName, category, price });
                document.dispatchEvent(new Event('submit'));
            } else {
                alert('Please fill in all fields correctly.');
            }
            this.render();
            document.getElementById('productCategory').value = '';
            document.getElementById('productName').value = '';
            document.getElementById('productPrice').value = '';
            
            
        })
    }
}