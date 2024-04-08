class Table extends BaseTable {
    constructor(tableData) {
        super();
        this.tableData = tableData;
    }
    
    getRenderData() {
        return this.tableData;
    }

    getCellData(data) {
        return [
            { text: data.productName, elementName: 'td' },
            { text: data.category, elementName: 'td' },
            { text: data.price, elementName: 'td' },
            { text: 'Delete', elementName: 'td', handleClick: () => this.deleteRow(data)},
        ];
    }
    
    deleteRow(data) {
        const index = this.tableData.indexOf(data);
        if (index !== -1) {
            this.tableData.splice(index, 1);
            this.render();
            document.dispatchEvent(new Event('delete'));
        }
    }
}