import BaseTable from "../baseTable.js";
import tableData from "../main.js";

class SideBar extends BaseTable {

    getRenderData() {
        const categories = tableData.reduce((acc, curr) => {
            const existingCategory = acc.find(item => item.category === curr.category);
            if (existingCategory) {
                
                existingCategory.count++;
                existingCategory.totalPrice = existingCategory.totalPrice + curr.price;
            } else {
                acc.push({
                    category: curr.category,
                    count: 1,
                    totalPrice: curr.price
                })
            }
            return acc;
        }, []);
        console.log(categories);
        return categories;
    }
    getCellData(data) {
        return [
            { text: data.category, elementName: 'td', handleClick: '' },
            { text: data.count, elementName: 'td', handleClick: '' },
            { text: data.totalPrice, elementName: 'td', handleClick: '' },
        ]
    }
    listenEvent() {
        document.addEventListener('delete', () => this.render())
    }

}
export default SideBar;