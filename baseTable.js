import BaseClass from "./baseCalss.js"; // Assuming the file is named baseClass.js


export default class BaseTable extends BaseClass {
    
    render() {
        super.render(this.componentRenderer.bind(this));
    }
    
    componentRenderer() {
        const table = document.createElement('table');
        console.log("hello")
        console.log("herer",this.getRenderData())

        this.getRenderData().forEach(data => {
            const tr = document.createElement('tr');
            this.renderCells(tr, this.getCellData(data));
            table.append(tr);
        });
        return table;
    }
    
    getRenderData() {
        console.log("render",tableData);
        return tableData; 
    }
    
    getCellData(data) {
        return [
            { elementName: 'td', text: data.productName },
            { elementName: 'td', text: data.category },
            { elementName: 'td', text: `${data.price}` },
        ];
    }
    
    renderCells(element, cellData) {
        cellData.forEach(data => {
            const childElement = document.createElement(data.elementName);
            childElement.textContent = data.text;
            if (data.handleClick) {
                childElement.onclick = data.handleClick;
            }
            element.append(childElement);
        });
    }
}
