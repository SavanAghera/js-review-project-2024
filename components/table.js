import { BaseTable } from "../baseTable.js";
import { tableData } from "../main.js";
export default class Table extends BaseTable {
    getRenderData() {
        return tableData;
    }
    getCellData(data) {
        return [
            { text: data.productName, elementName: 'td', handleClick: '' },
            { text: data.category, elementName: 'td', handleClick: '' },
            { text: data.price, elementName: 'td', handleClick: '' },
            { text: "delete", elementName: "button", handleClick: this.deleteCell }
        ]
    }
    deleteCell() {
        const category = this.parentElement.children[1].innerText;
        this.parentElement.remove();
        const toDeleteIdx = tableData.findIndex((data) => {
            return data.category === category;
        })
        tableData.splice(toDeleteIdx, 1);
        document.dispatchEvent(new Event("delete"));
    }
    listenEvent() {
        if (!this.eventListnerAdded) {
            document.addEventListener('productAdded', () => this.render());
            this.eventEventListnerAdded = true;
        }
    }
}