import { BaseTable } from "../baseTable.js";
import { tableData } from "../main.js";

export class Table extends BaseTable {
  render() {
    super.render();
  }
  getRenderData() {
    return tableData;
  }
  getCellData(data) {
    return [
      { text: data.productName, elementName: "td", handleClick: "" },
      { text: data.category, elementName: "td", handleClick: "" },
      { text: data.price, elementName: "td", handleClick: "" },
      {
        text: "DELETE",
        elementName: "button",
        handleClick: function () {
          const index = tableData.findIndex((dataa) => {
            return dataa.productName === data.productName;
          });
          if (index >= 0) {
            tableData.splice(index, 1);
          }
          document.dispatchEvent(new Event("delete"));
        },
      },
    ];
  }
  listenEvent() {
    if (!this.isEventAdded) {
      document.addEventListener("delete", () => this.render());
      this.isEventAdded = true;
    }
  }
}
