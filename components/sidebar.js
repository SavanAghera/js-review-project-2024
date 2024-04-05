import { BaseTable } from "../baseTable.js";
import { tableData } from "../main.js";

export default class SideBar extends BaseTable {
    getRenderData() {
        const categories = [];
        const myMap = new Map();
        tableData.forEach((data) => {
            const currPrice = Number(data.price);
            if (!myMap.has(data.category)) {
                myMap.set(data.category, { count: 1, price: currPrice })
            } else {
                const currCategory = myMap.get(data.category);
                myMap.set(data.category, { count: ++currCategory.count, price: currPrice + currCategory.price })
            }
        })
        for (const key of myMap.keys()) {
            const { count, price } = myMap.get(key);
            categories.push({ name: key, count, price })
        }
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
        document.addEventListener('delete', () => this.render());
    }
}
