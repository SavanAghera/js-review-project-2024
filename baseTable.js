class BaseTable extends BaseClass{
    render() {
        super.render(() => this.componentRenderer());
    }
    componentRenderer() {
        const tableElement = this.renderTable(this.getRenderData());
        return tableElement;
    }
    renderTable(data) {
        const table = document.createElement('table');
        data.forEach(item => {
            const tr = document.createElement('tr');
            this.renderCells(tr, this.getCellData(item));
            table.append(tr);
        });
        return table;
    }
    getRenderData() {
        // To be implemented by child classes
    }
    getCellData(data) {
        // To be implemented by child classes
    }
    renderCells(element , cellData) {
        cellData.forEach(data => {
            const childElement = document.createElement(data.elementName);
            if (data.elementName === 'button') {
                childElement.classList.add('delete-button');
                childElement.onclick = data.handleClick;
                childElement.textContent = data.text; 
            } else {
                childElement.textContent = data.text;
            }
            element.append(childElement);
        })
    }
}
