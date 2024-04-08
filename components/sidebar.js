class SideBar extends BaseTable {
    constructor(table) {
        super();
        this.table = table;
    }

    getRenderData() {
        const categories = Array.from(new Set(this.table.tableData.map(item => item.category)));
        return categories.map(category => {
            const count = this.table.tableData.filter(item => item.category === category).length;
            const totalPrice = this.getTotalPrice(category);
            return { name: category, count, totalPrice };
        });
    }

    getCellData(data) {
        return [
            { text: data.name, elementName: 'td', handleClick: '' },
            { text: data.count, elementName: 'td', handleClick: '' },
            { text: data.totalPrice, elementName: 'td', handleClick: '' },
        ]
    }

    getTotalPrice(category) {
        return this.table.tableData.reduce((total, item) => {
            if (item.category === category) {
                return total + item.price;
            }
            return total;
        }, 0);
    }

    listenEvent() {
        document.addEventListener('delete', () => this.render())
    }

}


