
import { tableData } from "../main.js";
import { BaseTable } from "../baseTable.js";
 
export class Table extends BaseTable {
  getRenderData() {
    return tableData;
  }
  getCellData(data) {
    return [
      { text: data.productName, elementName: "td", handleClick: "" },
      { text: data.category, elementName: "td", handleClick: "" },
      { text: data.price, elementName: "td", handleClick: "" },
      { text: "Delete", elementName: "button", handleClick: this.deleteData },
    ];
  }
 
  deleteData() {
      this.parentElement.style.display = "none";
    let productName = this.parentElement.firstElementChild.textContent;
 
    let index = tableData.findIndex((data) => {
      return data.productName === productName;
    });
    tableData.splice(index, 1);
 
    document.dispatchEvent(new Event('delete'))
  }
 
  listenEvent() {
    document.addEventListener("render", () => this.render());
  }
}
 