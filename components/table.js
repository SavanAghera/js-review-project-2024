class Table extends BaseTable{
    getRenderData() {
        return tableData
    }
    getCellData(data) {
        return [
            {text:data.productName, elementName:'td', handleClick:''},
            {text:data.category, elementName:'td', handleClick: ''},
            {text:'delete', elementName:'button', handleClick: this.deleteItem.bind(this)}
        ]
    }
    deleteItem(event){
        const itemName = event.target.parentElement.firstChild.textContent;
        console.log("Delete button clicked for item: ", itemName);
        for(let i = 0; i < tableData.length; i++){
            if(tableData[i].productName === itemName){
                tableData.splice(i,1);
            }
        }
        document.dispatchEvent(new Event('delete'));
        console.log(tableData);
    }
    listenEvent() {
        document.addEventListener('delete', () => this.render())
    }
}
