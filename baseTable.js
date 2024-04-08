class BaseTable extends BaseClass{
    
    render() {
        super.render(this.componentRenderer)
    }
    componentRenderer=()=> {
        const table = document.createElement('table');
        this.getRenderData().forEach(data => {
            const tr = document.createElement('tr');
            this.renderCells(tr, this.getCellData(data))
            table.append(tr)
        });
        return table;
    }

    //will return an array ??
    getRenderData() {
        return tableData;
    }

    //ask user for the data to enter ??
    getCellData(data) {
       
    }
    renderCells(element , cellData) {
        // do not edit this function is possible
        
        cellData.forEach(data => {
            const childElement = document.createElement(data.elementName);
            childElement.textContent = data.text;
            childElement.onclick = data.handleClick;
            element.append(childElement);
        })
    }
    deleteRow(e){
        // console.log(e.target);
        let deleteProductName=e.target.parentElement.firstChild.textContent;
        e.target.parentElement.remove();
        let obj=tableData.find((ele)=>{
            return ele.productName===deleteProductName
        })
        tableData.splice(tableData.indexOf(obj),1);
        console.log('myevent object',upateInSideBar);
        document.dispatchEvent(upateInSideBar);
    }
}
