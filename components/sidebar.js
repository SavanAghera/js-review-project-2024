class SideBar extends BaseTable {
  getRenderData() {
    const categories = [];
    const newUniqueCategory = new Set();
    tableData.forEach((elem) => {
      if (newUniqueCategory.has(elem.category)) {
        const index = categories.findIndex((category) => {
          return category.name === elem.category;
        });
        categories[index].count++;
        categories[index].price += elem.price;
      } else {
        newUniqueCategory.add(elem.category);
        categories.push({ name: elem.category, count: 1, price: elem.price });
      }
    });
    return categories;
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
