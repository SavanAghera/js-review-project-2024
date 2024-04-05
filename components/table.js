class Table extends BaseTable {
  getRenderData() {
    return tableData;
  }
  getCellData(data) {
    return [
      { text: data.productName, elementName: "td", handleClick: "" },
      { text: data.category, elementName: "td", handleClick: "" },
      { text: data.price, elementName: "td", handleClick: "" },
      {
        text: "Delete",
        elementName: "button",
        handleClick: () => this.deleteProduct(data.productName),
      },
    ];
  }

  deleteProduct(productName) {
    const index = tableData.findIndex((data) => {
      return data.productName === productName;
    });
    tableData.splice(index, 1);
    document.dispatchEvent(new Event("delete"));
  }

  listenEvent() {
    document.addEventListener("delete", () => {
      this.render();
    });
  }
}
