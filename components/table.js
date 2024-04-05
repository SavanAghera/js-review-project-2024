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
            { text: "Delete", elementName: 'button', handleClick: this.handleDelete },
            { text: "Edit", elementName: 'button', handleClick: this.handleEdit },
        ]
    }

    handleDelete(event) {
        const deletedData = event.target.parentElement.firstElementChild.innerText;

        const indexOfDeletedData = tableData.findIndex((data) => data.productName === deletedData);
        tableData.splice(indexOfDeletedData, 1);

        event.target.parentElement.remove();

        document.dispatchEvent(new Event('delete'));
    }

    handleEdit(event) {

        const updatedData = event.target.parentElement.firstElementChild.innerText;
        const data = tableData.find((item) => item.productName === updatedData);
        data.index = tableData.findIndex((item) => item.productName === updatedData);

        const editEvent = new CustomEvent('edit', { detail: data });
        document.dispatchEvent(editEvent);

    }

    listenEvent() {
        document.addEventListener('add', () => this.render())
    }
}

export default Table;