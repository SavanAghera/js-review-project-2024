import BaseTable from "../baseTable.js";
import { tableData, updateTableData } from "../main.js";

class Table extends BaseTable {
    getRenderData() {
        return tableData
    }
    getCellData(data) {
        return [
            { text: data.productName, elementName: 'td', handleClick: '' },
            { text: data.category, elementName: 'td', handleClick: '' },
            { text: data.price, elementName: 'td', handleClick: '' },
            { text: "Del", elementName: 'button', handleClick: this.delItem },
        ]
    }

    delItem = (event) => {
        // console.log("inside delete");
        const row = event.target.parentNode;
        // console.log(row);
        const cells = row.querySelectorAll('td');
        // console.log(cells);

        const values = Array.from(cells).map(cell => cell.textContent);
        // console.log(values);
        const index = tableData.findIndex(item => item.productName == values[0] && item.category == values[1] && item.price == values[2]);

        if (index !== -1) {
            // updateTableData(index)
            tableData.splice(index, 1);
            // console.log(tableData);
            // const render = super.render.bind(this);
            // render();
            document.dispatchEvent(new Event('delete'));
        }
    }
}

export default Table;
