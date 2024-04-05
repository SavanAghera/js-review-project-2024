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
        handleClick: function () {
          const index = tableData.findIndex(
            (item) => item.productName === data.productName
          );
          tableData.splice(index, 1);

          let event = new Event("delete");
          document.dispatchEvent(event);
        },
      },
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
