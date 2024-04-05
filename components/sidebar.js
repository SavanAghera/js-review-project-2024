class SideBar extends BaseTable {
    getRenderData() {
        const categories = {};
        tableData.forEach(data => {
            if (categories[data.category]) {
                categories[data.category].count++;
                categories[data.category].totalPrice += data.price;
            } else {
                categories[data.category] = {
                    count: 1,
                    totalPrice: data.price
                };
            }
        });

        return Object.entries(categories).map(([category, { count, totalPrice }]) => ({
            name: category,
            count,
            totalPrice
        }));
    }
    getCellData(data) {
        return [
            { text: data.name, elementName: 'td', handleClick: '' },
            { text: data.count, elementName: 'td', handleClick: '' },
            { text: data.totalPrice, elementName: 'td', handleClick: '' },
        ];
    }
    listenEvent() {
        document.addEventListener('delete', () => this.render());
    }
}