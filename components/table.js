class Table extends BaseTable{
   
    getRenderData() {
        return tableData;
    }

    getCellData(data) {
        return [
            {text:data.productName, elementName:'td', handleClick:''},
            {text:data.category, elementName:'td', handleClick: ''},
            {text:data.price, elementName:'td', handleClick: ''},
            {text:"delete", elementName:'button', handleClick: () => this.deleteCellData(data)}
        ]
    }

    deleteCellData(data){
        let index = tableData.indexOf(data);
        tableData.splice(index, 1);
        this.render();
        document.dispatchEvent(new Event("delete"));  
    }

    addCellData(data){
        tableData.push(data);
        this.render();
        document.dispatchEvent(new Event('delete'));
    }

    listenEvent() {
        document.addEventListener('add', (event) => this.addCellData(event.data));     
    }
}
