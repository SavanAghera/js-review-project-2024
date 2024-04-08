class Table extends BaseTable{
    getRenderData() {
        return tableData
    }
    getCellData(data) {
        return [
            {text:data.productName, elementName:'td', handleClick:''},
            {text:data.category, elementName:'td', handleClick: ''},
            {text:data.price,elementName:'td',handleClick:''},
            {text:"delete",elementName:'button',handleClick:super.deleteRow},
        ]
    }
    deleteRow=function(e){
        // let deleteProductName=e.target.parentElement.firstChild.textContent;
        // e.target.parentElement.remove();
        // let obj=tableData.find((ele)=>{
        //     return ele.productName===deleteProductName
        // })
        // tableData.splice(tableData.indexOf(obj),1);
        // console.log("deletd ",obj);

    }
    listenEvent(){
        document.addEventListener('reRenderTable',(e)=>{
            console.log('render table',this);
            this.render();
        })
    }
}
