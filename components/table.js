class Table extends BaseTable {
    getRenderData() {
        return tableData
    }
    getCellData(data) {
        return [
            { text: data.productName, elementName: 'td', handleClick: '' },
            { text: data.category, elementName: 'td', handleClick: '' },
            { text: data.price, elementName: 'td', handleClick: '' },
            { text: "delete", elementName: 'td', handleClick: () => this.deleteItem(data) },
        ]
    }
    deleteItem(item) {
        const index = tableData.indexOf(item);
        if (index !== -1) {
            tableData.splice(index, 1);
            deleteTable = true;
            console.log()
            document.dispatchEvent(new Event('delete'));
            
        }
    }
}
