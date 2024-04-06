class Table extends BaseTable {
    getRenderData() {
        return tableData;
    }
    getCellData(data) {

        return [
            { text: data.productName, elementName: 'td', handleClick: '' },
            { text: data.category, elementName: 'td', handleClick: '' },
            { text: data.price, elementName: 'td', handleClick: '' },
            { text: 'Delete', elementName: 'button', handleClick: () => this.deleteRow(data) }

        ];
    }

    deleteRow(data) {
       
        const index = tableData.indexOf(data);
        tableData.splice(index, 1);
        this.render();
        document.dispatchEvent(new Event('delete'));
    }

}

