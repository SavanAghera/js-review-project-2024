import BaseClass from "./baseCalss.js";
import { tableData } from "./main.js";

export default class BaseTable extends BaseClass{   
    render() {
        super.render(this.componentRenderer.bind(this));
    }
    getRenderData() {
        // return tableData;
    }
    getCellData(data) {
    //    return tableData;
    }
    componentRenderer() {
        const table = document.createElement('table');
        // console.log(this.getRenderData());
        this.getRenderData().forEach(data => {
            const tr = document.createElement('tr');
            this.renderCells(tr, this.getCellData(data))
            table.append(tr)
        });
        return table;
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
