import BaseTable from "../baseTable.js";
import tableData from "../main.js";

class SideBar extends BaseTable {

    getRenderData() {
        let categories = [];
        const groupedData = tableData.reduce((acc, item) => {
            acc[item.category] = acc[item.category] || [];
            acc[item.category].push(item);
            return acc;
        }, {});

        categories = Object.entries(groupedData).map(([category, items]) => {
            const count = items.length;
            const totalPrice = items.reduce((total, item) => total + item.price, 0);
            return { category, count, totalPrice };
        });
        return categories;
        
    }   
    getCellData(data) {
        return [
            {text:data.category , elementName:'td', handleClick:''},
            {text:data.count, elementName:'td', handleClick: ''},
            {text:data.totalPrice, elementName:'td', handleClick: ''},
        ]
    }
    listenEvent() {
        if (!this.eventListened) {
            document.addEventListener('delete', () =>  this.render())
            this.eventListened = true;
        }
    }

}

export default SideBar;