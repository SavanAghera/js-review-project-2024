class SideBar extends BaseTable {

    getRenderData() {
        const categories = [];
        tableData.forEach((data) => {
            let alredyCate = false;
            categories.forEach((category) => {
                if (category.name === data.category) {
                    alredyCate = true;
                    category.count += 1;
                    category.price += data.price;
                }
            })
            if (!alredyCate) {
                categories.push({
                    name: data.category,
                    count: 1,
                    price: data.price,
                });
            }
        })
        return categories
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
    }

}


