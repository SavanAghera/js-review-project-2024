class Table extends BaseTable{
    tableListen = false;
    getRenderData() {
        return tableData
    }
    getCellData(data) {
        return [
            {text:data.productName, elementName:'td', handleClick:''},
            {text:data.category, elementName:'td', handleClick: ''},
            {text:data.price, elementName:'td', handleClick: ''},
            {text:"Delete",elementName:'button',handleClick:this.deleteProduct}
        ]
    }
    deleteProduct(){
        
        const product = this.parentElement.id;
        const deleteIndex = tableData.findIndex(item => item.productName === product)
        console.log(deleteIndex)
        tableData.splice(deleteIndex,1)
        document.dispatchEvent(new Event("delete"));
    }
    listenEvent() {
        if(this.tableListen == false){
            document.addEventListener('delete', () => {this.render();console.log("in")})
            this.tableListen = true;
        }
    }
}
