class SideBar extends BaseTable {
    getRenderData() {

        const sideBarData = [];
        for (let i = 0; i < tableData.length; i++) {
            const row = tableData[i];
            const existingRow = sideBarData.findIndex(data => data.name === row.category);
            if (existingRow === -1) {
                sideBarData.push({
                    name: row.category,
                    count: 1,
                    price: row.price,
                });
            }
            else{
                sideBarData[existingRow].count++;
                sideBarData[existingRow].price+= row.price;
            }

        }
        return sideBarData;
    }
    getCellData(data) {
        return [
            { text: data.name, elementName: 'td', handleClick: '' },
            { text: data.count, elementName: 'td', handleClick: '' },
            { text: data.price, elementName: 'td', handleClick: '' },
        ];
    }
    listenEvent() {
        document.addEventListener('delete', () => this.render());
        document.addEventListener('submit', () => this.render());
    }
}




