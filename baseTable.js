import { tableData } from './main.js';
import { BaseClass } from './baseClass.js';

export class BaseTable extends BaseClass{
    constructor() {
        super();
        this.data = tableData;
    }
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
        // return this.data;
    }
    getCellData(data) {
        // return Object.values(data);
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
