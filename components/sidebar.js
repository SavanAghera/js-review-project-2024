class SideBar extends BaseTable {
    getRenderData() {
        const categories = [];
        
        tableData.forEach((data) => {
            const index = categories.findIndex(c => c.name === data.category)
            if (index !== -1) {
                categories[index].count++;
                categories[index].price += data.price
            } else {
                categories.push({ name: data.category, count: 1, price: data.price })
            }
        })
        return categories;
    }
    getCellData(data) {
        return [
            { text: data.name, elementName: 'td', handleClick: '' },
            { text: data.count, elementName: 'td', handleClick: '' },
            { text: data.price, elementName: 'td', handleClick: '' },//add line in main.js
        ]
    }
    listenEvent() {
        document.addEventListener('delete', () => this.render())
    }

}


