import BaseTable from "../baseTable.js";
import { tableData, updateTableData } from "../main.js";

class SideBar extends BaseTable {
    getRenderData() {
        const categoryMap = new Map();

        tableData.forEach(item => {
            if (categoryMap.has(item.category)) {
                const categoryData = categoryMap.get(item.category);
                categoryData.price += item.price;
                categoryData.count += 1;
            } else {
                categoryMap.set(item.category, { price: item.price, count: 1 });
            }
        });

        const result = Array.from(categoryMap.values()).map(({ price, count }, index) => ({
            category: Array.from(categoryMap.keys())[index],
            totalPrice: price,
            count
        }));

        return result;
    }
    getCellData(data) {
        return [
            { text: data.category, elementName: 'td', handleClick: '' },
            { text: data.count, elementName: 'td', handleClick: '' },
            { text: data.totalPrice, elementName: 'td', handleClick: '' },
        ]
    }
}

export default SideBar;
