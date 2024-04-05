import { tableData } from "../main.js"
export class Table extends BaseTable {
    getRenderData() {
        return tableData
    }
    getCellData(data) {
        return [
            { text: data.productName, elementName: 'td', handleClick: '' },
            { text: data.category, elementName: 'td', handleClick: '' },
            { text: data.price, elementName: 'td', handleClick: '' },
            { text: "delete", elementName: 'button', handleClick: () => this.handleDelete(data) },
        ]
    }
    handleDelete(rowData) {
        // Implement logic to delete the row from the data source
        // For example:
        const index = this.getRenderData().findIndex(item => item === rowData);
        if (index !== -1) {
            tableData.splice(index, 1)
            // this.getRenderData().splice(index, 1);
            document.dispatchEvent(new Event("delete"))

            // this.render(); // Re-render the table after deletion
        }
    }
    listenEvent() {
            document.addEventListener('delete', () => this.render())
    }

}
