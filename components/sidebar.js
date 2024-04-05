import BaseTable from "../baseTable.js";
import tableData from "../main.js";

class SideBar extends BaseTable {
    getRenderData() {

        const categories = [];

        tableData.forEach((data) => {
            const obj = {};

            const indexOfCategory = categories.findIndex((item) => item.name === data.category);
            if(indexOfCategory === -1){
                obj.name = data.category;
                obj.count = 1;
                obj.price = data.price;
                categories.push(obj);
            }else{
                categories[indexOfCategory].count++;
                categories[indexOfCategory].price += data.price;
            }
        })

        return categories;
    }

    getCellData(data) {
        return [
            { text: data.name, elementName: 'td', handleClick: '' },
            { text: data.count, elementName: 'td', handleClick: '' },
            { text: data.price, elementName: 'td', handleClick: '' },
        ]
    }
    
    listenEvent() {
        document.addEventListener('delete', () => this.render())
        document.addEventListener('add', () => this.render())
    }

}

export default SideBar;