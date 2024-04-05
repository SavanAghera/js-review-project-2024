import { BaseTable } from "../baseTable.js";
import { tableData } from "../main.js";

export class SideBar extends BaseTable {
  constructor() {
    super();
    super.render();
  }
  getRenderData() {
    const categories = [];
    const responseData = [];
    tableData.forEach((data) => {
      if (!categories.includes(data.category)) {
        categories.push(data.category);
        responseData.push(data);
      }
    });
    return responseData;
  }
  getCellData(data) {
    const countAndPriceObj = getCountOfCategoriesAndTotalPrice(data.category);
    return [
      { text: data.category, elementName: "td", handleClick: "" },
      { text: countAndPriceObj.count, elementName: "td", handleClick: "" },
      { text: countAndPriceObj.totalPrice, elementName: "td", handleClick: "" },
    ];
  }
  listenEvent() {
    if (!this.isEventAdded) {
      document.addEventListener("delete", () => this.render());
      this.isEventAdded = true;
    }
  }
}

function getCountOfCategoriesAndTotalPrice(category) {
  const count = tableData.filter((data) => {
    return data.category === category;
  });
  const totalPrice = count.reduce((acc, data) => {
    return (acc += data.price);
  }, 0);
  return { count: count.length, totalPrice: totalPrice };
}
