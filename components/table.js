class Table extends BaseTable{
    getRenderData() {
        return tableData
    }
    getCellData(data) {
        
        return [
            {text:data.productName, elementName:'td', handleClick:''},
            {text:data.category, elementName:'td', handleClick: ''},
            {text:data.price, elementName:'td', handleClick: ''},
            {text:"delete", elementName:'td', handleClick:(a)=>{
                console.log("delete function");
                let index=tableData.findIndex(item =>  item.productName==data.productName);
                console.log(index);
                tableData.splice(index,1);
                console.log(this);
                this.render();
                document.dispatchEvent(new Event("delete"));
                // this.parentElement.remove();
                // console.log(a);
                // this.render();
            }},
        ]
    }
}
