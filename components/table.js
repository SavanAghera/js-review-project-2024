class Table extends BaseTable {
    getRenderData() {
        return tableData
    }
    getCellData(data) {
        return [
            { text: data.productName, elementName: 'td', handleClick: '' },
            { text: data.category, elementName: 'td', handleClick: '' },
            { text: data.price, elementName: 'td', handleClick: '' },
            {
                text: 'delete', elementName: 'button', handleClick: function () {
                    //fronetend
                    this.parentElement.remove();

                    //backend ie. main.js file
                    tableData.forEach((ele, index) => {
                        let rowToDel = this.parentElement.firstChild.textContent;
                        if (ele.productName == rowToDel) {
                            tableData.splice(index, 1);
                        }
                    })
                    document.dispatchEvent(new Event("delete"));
                }
            },
        ]
    }
}
