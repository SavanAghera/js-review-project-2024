class BaseTable extends BaseClass {
    
    render() {
        super.render(() => this.componentRenderer()); // Using arrow function to maintain 'this' context
    }

    componentRenderer() {
        const table = document.createElement('table');
        this.getRenderData().forEach(data => {
            const tr = document.createElement('tr');
            this.renderCells(tr, this.getCellData(data));
            table.append(tr);
        });
        return table;
    }

    getRenderData() {
       
    }

    getCellData(data) {
        // Placeholder function, provide cell data based on the input data
        // return [
        //     { elementName: 'td', text: data.name },
        //     { elementName: 'td', text: data.price },
        //     { elementName: 'td', text: data.quantity },
        //     { 
        //         elementName: 'td', 
        //         text: 'Delete', 
        //         handleClick: () => {
        //             // Handle delete action
        //             console.log('Delete clicked for', data.name);
        //         }
        //     }
        // ];
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
