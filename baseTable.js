class BaseTable extends BaseClass{
    
    render() {
        super.render(this.componentRenderer.bind(this))
    }
    componentRenderer() {
        const table = document.createElement('table');
        this.getRenderData().forEach(data => {
            const tr = document.createElement('tr');
            tr.id=data.productName;
            this.renderCells(tr, this.getCellData(data))
            table.append(tr)
        });
        return table;
    }
    getRenderData() {
        // console.log("in render")
        // return tableData;
    }
    getCellData(data) {
       
    }
    renderCells(element , cellData) {
        // do not edit this function is possible
        cellData.forEach(data => {
            const childElement = document.createElement(data.elementName);
            childElement.textContent = data.text;
            childElement.onclick = data.handleClick
            element.append(childElement);
        })
    }
}
