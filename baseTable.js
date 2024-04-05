import BaseClass from './baseCalss.js';

class BaseTable extends BaseClass {

    render() {
        // console.log("render called");
        console.log(this);
        super.render(this.componentRenderer);
    }
    componentRenderer = () => {
        console.log("in");
        const table = document.createElement('table');
        this.getRenderData().forEach(data => {
            const tr = document.createElement('tr');
            this.renderCells(tr, this.getCellData(data))
            table.append(tr)
        });
        return table;
    }
    // getRenderData() {

    // }
    // getCellData(data) {

    // }
    renderCells(element, cellData) {
        // do not edit this function is possible
        cellData.forEach(data => {
            const childElement = document.createElement(data.elementName);
            childElement.textContent = data.text;
            childElement.onclick = data.handleClick;
            element.append(childElement);
        })
    }
}

export default BaseTable;
