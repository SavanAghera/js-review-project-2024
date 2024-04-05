class BaseTable extends BaseClass {
    render() {
        super.render(this.componentRenderer.bind(this));
    }
    componentRenderer() {
        const table = document.createElement('table');
        this.getRenderData().forEach(data => {

            const tr = document.createElement('tr');
            this.renderCells(tr, this.getCellData(data))
            table.append(tr)
        });
        return table;
    }
    getRenderData() {
        return tableData;
    }
    getCellData(data) {

    }
    renderCells(element, cellData) {
        cellData.forEach(data => {
            const childElement = document.createElement(data.elementName);
            childElement.textContent = data.text;
            childElement.onclick = data.handleClick;
            element.append(childElement);
        })
    }
}
