class BaseTable extends BaseClass{
    
    render() {
        super.render(this.componentRenderer)
        console.log("event triggered");
    }
    componentRenderer =()=> {
        const table = document.createElement('table');
        console.log(this);
        this.getRenderData().forEach(data => {
            const tr = document.createElement('tr');
            this.renderCells(tr, this.getCellData(data))
            table.append(tr)
        });

        return table;
    }
    // getRenderData() {
    //     // return [1,2,3,4,5];
    // }
    // getCellData(data) {
       
    // }
    renderCells(element , cellData) {
        // do not edit this function is possible
        console.log("inside rendercells");
        cellData.forEach(data => {
            const childElement = document.createElement(data.elementName);
            childElement.textContent = data.text;
            childElement.onclick = data.handleClick
            element.append(childElement);
        })
    }
}


