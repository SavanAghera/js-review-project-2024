import BaseTable from "../baseTable.js"
import tableData  from "../main.js";

class Table extends BaseTable{
    getRenderData() {
        return tableData;
    }
    getCellData(data) {   
        // console.log(data)  
            return [
                { text: data.productName, elementName: 'td', handleClick: '' },
                { text: data.category, elementName: 'td', handleClick: '' },
                {text : data.price , elementName : 'td' , handleClick: ''},
                { text: 'Delete', elementName: 'td', handleClick: () => this.handleDelete(data) } 
            ];       
    }
    handleDelete(dataToDelete) {
        const index = tableData.findIndex(data => data === dataToDelete);
        if (index !== -1) {
            tableData.splice(index, 1); 
            this.render();
        } 
        document.dispatchEvent(new Event("delete"));
    }
    listenEvent() {        
        document.addEventListener('productAdded', () => this.render())
    }
}

export default Table;
