class SideBar extends BaseTable {
  getRenderData() {
    const sideBarData = [];

    const categoryInfo = {};

    tableData.forEach((data) => {
      const { category, price } = data;

      if (!categoryInfo[category]) {
        categoryInfo[category] = { total: price, count: 1 };
      } else {
        categoryInfo[category].total += price;
        categoryInfo[category].count++;
      }
    });

    for (const category in categoryInfo) {
      sideBarData.push({
        category: category,
        total: categoryInfo[category].total,
        count: categoryInfo[category].count,
      });
    }

    return sideBarData;
  }

  getCellData(data) {
    return [
      { text: data.category, elementName: "td", handleClick: "" },
      { text: data.count, elementName: "td", handleClick: "" },
      { text: data.total, elementName: "td", handleClick: "" },
    ];
  }

  listenEvent() {
    console.log("hi");
    if (!this.x) {
      document.addEventListener("delete", () => this.render());

      this.x = !this.x;
    }
  }
}
