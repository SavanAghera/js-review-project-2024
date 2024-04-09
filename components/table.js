class Table extends BaseTable{
    getRenderData() {
        
        return tableData;
    }
    getCellData(data) {
        return [
            {text:data.productName, elementName:'td', handleClick:''},
            {text:data.category, elementName:'td', handleClick: ''},
            {text:data.price, elementName:'td', handleClick: ''},
            {text:"Delete",elementName:'td',handleClick: () => this.DeleteRow(data.productName)}
             
        ];
    }
     DeleteRow(productName){  
        const rowIndex = tableData.findIndex(item => item.productName === productName);
        console.log(rowIndex);
        if(rowIndex !== -1){
            tableData.splice(rowIndex,1)    ;
            this.render();

        }
        document.dispatchEvent(new Event("delete"));
        
    }
    listenEvent() {
        document.addEventListener('updatetablebar', () => this.render())
    }
}


