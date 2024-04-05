class SideBar extends BaseTable {
    getRenderData() {
        const categories = [];
        tableData.forEach(item => {
            const existingCategory = categories.find(cat => cat.name === item.category);
            if (existingCategory) {
                existingCategory.count++;
                existingCategory.price += item.price;
            } else {
                categories.push({ name: item.category, count: 1, price: item.price });
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
        document.addEventListener('delete', () => this.render())
    }

} 