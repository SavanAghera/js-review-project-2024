class SideBar extends BaseTable {
  constructor() {
    super();
  }

  getRenderData() {
    const categories = {};
    tableData.forEach((item) => {
      const { category, productName, price } = item;
      if (!categories[category]) {
        categories[category] = {
          name: category,
          count: 0,
          totalPrice: 0,
        };
      }
      categories[category].count++;
      categories[category].totalPrice += price;
    });
    return Object.values(categories);
  }
  getCellData(data) {
    return [
      { text: data.name, elementName: "td", handleClick: "" },
      { text: data.count, elementName: "td", handleClick: "" },
      { text: data.totalPrice, elementName: "td", handleClick: "" },
    ];
  }
  listenEvent() {
    if (!this.flag) {
      document.addEventListener("delete", () => this.render());
      this.flag = !this.flag;
    }
  }
}
