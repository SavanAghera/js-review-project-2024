
import { BaseTable } from "../baseTable.js";
import { tableData } from "../main.js";
 
let sideBarData = [];
 
export class SideBar extends BaseTable {
  getRenderData() {
    const categoryInfo = {};
 
    tableData.forEach(({ category, price }) => {
      if (!categoryInfo[category]) {
        categoryInfo[category] = {
          name: category,
          count: 0,
          price: 0,
        };
      }
      categoryInfo[category].count++;
      categoryInfo[category].price += price;
    });
 
    const categoryObjects = Object.values(categoryInfo);
    return categoryObjects;
  }
  getCellData(data) {
    return [
      { text: data.name, elementName: "td", handleClick: "" },
      { text: data.count, elementName: "td", handleClick: "" },
      { text: data.price, elementName: "td", handleClick: "" },
    ];
  }
  listenEvent() {
    document.addEventListener("delete", () => this.render());
  }
}
 