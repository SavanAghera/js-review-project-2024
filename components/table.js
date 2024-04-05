import BaseTable from "../baseTable.js"
import tableData from "../main.js"


export default class Table extends BaseTable{
    getRenderData() {
        return tableData
    }
    getCellData(data) {
        return [
            {text:data.productName, elementName:'td', handleClick:''},
            {text:data.category, elementName:'td', handleClick: ''},
            {text:data.price, elementName:'td', handleClick: ''},
            {text:"Delete",elementName:"button",handleClick: ()=>this.deleteTableData(data)}
        ]
    }
    deleteTableData(data){
        const dataIndex = tableData.indexOf(data);
        if(dataIndex !== -1){
            tableData.splice(dataIndex,1);
        }
        this.render();
        document.dispatchEvent(new Event("delete"))
    }
    listenEvent() {
        document.addEventListener('add', () => this.render())
    }

}

