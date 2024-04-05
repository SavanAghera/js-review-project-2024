import { BaseTable } from "../baseTable.js";
import { tableData } from '../main.js';

export class SideBar extends BaseTable {
    getRenderData() {
        const categories = [];
        tableData.forEach(item => {
            const category = item.category;
            const existingCategory = categories.find(cat => cat.name === category);
            if (!existingCategory) {
                categories.push({
                    name: category,
                    count: 1,
                    price: item.price
                });
            } else {
                existingCategory.count++;
                existingCategory.price += item.price;
            }
        });
        return categories;
    }
    getCellData(data) {
        return [
            {text:data.name , elementName:'td', handleClick:''},
            {text:data.count, elementName:'td', handleClick: ''},
            {text:data.price, elementName:'td', handleClick: ''},
        ]
    }
    listenEvent() {
        document.addEventListener('delete', () => this.render())
    }

}


