class BaseTable extends BaseClass {
  constructor() {
    super();
    this.componentRenderer = this.componentRenderer.bind(this);
  }

  render() {
    super.render(this.componentRenderer);
  }
  componentRenderer() {
    const table = document.createElement("table");
    this.getRenderData().forEach((data) => {
      const tr = document.createElement("tr");
      this.renderCells(tr, this.getCellData(data));
      table.append(tr);
    });
    return table;
  }

  renderCells(element, cellData) {
    cellData.forEach((data) => {
      const childElement = document.createElement(data.elementName);
      childElement.textContent = data.text;
      if (typeof data.handleClick === "function") {
        childElement.addEventListener("click", data.handleClick);
        childElement.style.cursor = "pointer";
      }
      element.append(childElement);
    });
  }
}
