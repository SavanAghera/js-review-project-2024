
const addButton = document.querySelector('button');
addButton.addEventListener('click', function () {
    add = true;
    const productName = document.getElementById('productName').value;
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;

    if (productName && category && price && !isNaN(price)) {

        let index = tableData.find((items)=>{
            if(items.productName === productName && items.category===category)
             return items;
        })
       
        if(!index){
            const newItem = { productName, category, price: parseInt(price) };
            tableData.push(newItem);
        }
      
            console.log(this)
        document.dispatchEvent(new Event('add'));
    } else {
        alert('Please fill in all fields and price should be a number');
    }
});

class SideBar extends BaseTable {
    getRenderData() {

        let categories = [];
        let cat = [];
        for (let i = 0; i < tableData.length; i++) {
            if (!cat.includes(tableData[i].category)) {
                cat.push(tableData[i].category);
                let obj = { name: tableData[i].category, count: 1, price: tableData[i].price };
                categories.push(obj);
            }
            else {
                let it = categories.find((items) => {
                    if (items.name === tableData[i].category) {
                        return items;
                    }
                })

                it.count++;
                it.price += tableData[i].price;
            }


        }

        return categories;
    }
    getCellData(data) {
        return [
            { text: data.name, elementName: 'td', handleClick: '' },
            { text: data.count, elementName: 'td', handleClick: '' },
            { text: data.price, elementName: 'td', handleClick: '' },

        ]
    }
    listenEvent() {
        document.addEventListener('delete', () => this.render())
        document.addEventListener('add', () => {if(add)this.render()})
        console.log("i am listen event")
        }
}



