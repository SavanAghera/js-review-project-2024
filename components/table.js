import tableData from "../main.js"
import BaseTable from "../baseTable.js"
class Table extends BaseTable {
    getRenderData() {
        return tableData;
    }
    handleDelete(event) {
        const closestRow = event.target.closest('tr');
        const rowIndex = Array.from(closestRow.parentNode.children).indexOf(closestRow);
        tableData.splice(rowIndex, 1);
        closestRow.remove();
        // this.render();
        return tableData;
    }

    getCellData(data) {
        return [
            { text: data.productName, elementName: 'td', handleClick: 'this.listenEvent' },
            { text: data.category, elementName: 'td', handleClick: '' },
            { text: data.price, elementName: 'td', handleClick: '' },
            { text: 'Delete', elementName: 'button', handleClick: this.handleDelete }
        ]
    }
    listenEvent() {
        document.addEventListener('click', () => this.render())
    }
}

export default Table;