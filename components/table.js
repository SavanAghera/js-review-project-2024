import BaseTable from "../baseTable.js";
import tableData from "../main.js";

class Table extends BaseTable {
    getRenderData() {
        return tableData;
    }
    getCellData(data) {
        return [
            { text: data.productName, elementName: 'td', handleClick: '' },
            { text: data.category, elementName: 'td', handleClick: '' },
            { text: data.price, elementName: 'td', handleClick: '' },
            { text: "Delete", elementName: 'button', handleClick: () => this.deleteEvent(data) },
        ]
    }
    deleteEvent(data) {
        console.log(tableData.indexOf(data));
        tableData.splice(tableData.indexOf(data), 1)
        document.dispatchEvent(new Event("delete"))
        this.render();
    }
    listenEvent() {
        document.addEventListener('added', () => this.render())
    }
}
export default Table;
