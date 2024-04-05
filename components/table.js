class Table extends BaseTable{
    getRenderData() {
        return tableData;
    }
    getCellData(data) {
        return [
            {text:data.productName, elementName:'td', handleClick:''},
            {text:data.category, elementName:'td', handleClick: ''},
            {text:data.price, elementName:'td', handleClick: ''},
            {text:data.delete, elementName:'td', handleClick:()=>this.listenEvent(data)}
        ]
    }
   
    listenEvent(data) {
            const index = tableData.findIndex(item => item === data);
        
            // Remove the object from tableData if found
            if (index !== -1) {
                tableData.splice(index, 1);
                // Trigger re-render
                this.render();
                document.dispatchEvent(new Event ("delete"));
            }
    }
}
