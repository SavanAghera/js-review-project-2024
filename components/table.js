import { tableData, tflag } from "../main.js"
import BaseTable from "../baseTable.js"

export default class Table extends BaseTable{
    getRenderData() {
        return tableData;
    }
    getCellData(data) {
        return [
            {text:data.productName, elementName:'td', handleClick:''},
            {text:data.category, elementName:'td', handleClick: ''},
            {text:data.price,elementName:'td', handleClick:''},
            {text:"Delete",elementName:'button',handleClick:function(event){
                // event.target.parentNode.remove();
                const tr = event.target.parentNode;
                const productName = tr.querySelector('td').textContent;
            //    tableData.filter((ele) => !(ele.productName === productName));
            const index = tableData.findIndex((ele) => ele.productName === productName);
            tableData.splice(index,1);
                // console.log(tableData);
                tr.remove();
                document.dispatchEvent(new Event('delete'));
            // console.log(may);
            }}
        ]
    }
    listenEvent() {
        if(tflag.flag){
            document.addEventListener('table', () => this.render());
            tflag.flag = false;
        }
        return;
    }
}
