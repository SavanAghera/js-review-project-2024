class Table extends BaseTable {

    getRenderData() {
        return tableData
    }
    getCellData(data, index) {
        return [
            { text: data.productName, elementName: 'td', handleClick: '' },
            { text: data.category, elementName: 'td', handleClick: '' },
            { text: data.price, elementName: 'td', handleClick: '' },
            {
                text: "delete", elementName: 'button', handleClick: () => {
                    delete tableData[index]
                    document.dispatchEvent(new CustomEvent('delete'));
                }
            },
        ]
    }
    listenEvent() {
        document.addEventListener('delete', () => this.render())
        document.addEventListener('add', () => this.render())
    }
}
