class Table extends BaseTable{
    getRenderData() {
        return tableData
    }
    getCellData(data) {
        return [
            {text:data.productName, elementName:'td', handleClick:''},
            {text:data.category, elementName:'td', handleClick: ''},
            {text:data.price, elementName:'td', handleClick: ''},
            {text:"delete", elementName:'td', handleClick: () => this.deleteRow(data)},
        ]
    }
     deleteRow(data){
        const rowIdx = tableData.findIndex( (ele) => ele.productName === data.productName);
        tableData.splice(rowIdx,1);
        this.render();
        document.dispatchEvent(new Event("delete"))
    }
    listenEvent() {
        document.addEventListener('updateTable', () => this.render())
    }
}
