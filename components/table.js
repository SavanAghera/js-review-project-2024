import BaseTable from "../baseTable.js";
import tableData from "../main.js"

class Table extends BaseTable {
    getRenderData() {
        return tableData
    }
    getCellData(data) {
        return [
            { text: data.productName, elementName: 'td', handleClick: '' },
            { text: data.category, elementName: 'td', handleClick: '' },
            { text: data.price, elementName: 'td', handleClick: '' },
            { text: "delete", elementName: 'button', handleClick: () => { this.hanldeDelete(data) } },
        ]
    }
    hanldeDelete(dataDelete) {
        const index = tableData.findIndex(data => data === dataDelete);
        if (index !== -1) {
            tableData.splice(index, 1);
            this.render()
        } else {
            console.log("Data not found");
        }
        document.dispatchEvent(new Event("delete"))
    }

    listenEvent() {
        document.addEventListener('addProduct', () => this.render())
    }
}
export default Table;