class SideBar extends BaseTable {
    getRenderData() {
        const categories = [];

        tableData.forEach(product => {
            let item = categories.find((item) => item.name === product.category);

            if(!item){
                categories.push({
                    name: product.category,
                    count: 1,
                    price: product.price,
                });
            } else {
                item.count += 1;
                item.price += product.price;
            }
        });

        return categories;
    }

    getCellData(data) {
        return [
            {text:data.name , elementName:'td', handleClick:''},
            {text:data.count, elementName:'td', handleClick: ''},
            {text:data.price, elementName:'td', handleClick: ''},
        ]
    }
    
    listenEvent() {
        document.addEventListener('delete', () => this.render());  
    }

}


