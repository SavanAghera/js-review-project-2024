import BaseTable from "../baseTable.js"
import tableData from "../main.js"
export default  class Table extends BaseTable{
    getRenderData() {
        return tableData
    }
    getCellData(data) {
        return [
            {text:data.productName, elementName:'td', handleClick:''},
            {text:data.category, elementName:'td', handleClick: ''},
            {text:data.price, elementName:'td', handleClick: ''},
            {text:"Delete",elementName:"button",handleClick: this.deleteCell}
        ]
    }
    deleteCell(){
        
      let name=this.parentElement.firstElementChild.innerText
        let category=  this.parentElement.firstElementChild.nextSibling.innerText
        console.log(this.parentElement.firstElementChild.nextSibling.innerText);
            tableData.forEach((item,index)=>{
                if(item.productName==name&&item.category==category){
                    tableData.splice(index,1)
                }
            })

            console.log(tableData);




        document.dispatchEvent(new Event("delete"));
    }
}
