class Table extends BaseTable {
  getRenderData() {
    return tableData;
  }
  getCellData(data) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    const handleDeleteBound = this.handleDelete.bind(this, data);
    return [
      { text: data.productName, elementName: "td" },
      { text: data.category, elementName: "td" },
      { text: data.price, elementName: "td" },
      {
        text: "delete",
        elementName: "button",
        handleClick: handleDeleteBound,
        childElement: deleteButton,
      },
    ];
  }
  handleDelete(data) {
    const index = tableData.indexOf(data);
    console.log(index);
    if (index !== -1) {
      tableData.splice(index, 1);
      document.dispatchEvent(new CustomEvent("delete"));
    }
  }
  listenEvent() {
    if (!this.flag) {
      document.addEventListener("delete", () => this.render());
      this.flag = !this.flag;
    }
  }
}
