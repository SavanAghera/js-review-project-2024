import BaseTable from "../baseTable.js"
import tableData from "../main.js";

class SideBar extends BaseTable {
    getRenderData() {
        const categories = [];

        tableData.forEach(data => {
            const existingCategoryIndex = categories.findIndex(cat => cat.count === data.category);

            if (existingCategoryIndex !== -1) {
                categories[existingCategoryIndex].price += data.price;
            } else {
                categories.push({ name: data.productName, count: data.category, price: data.price });
            }
        });
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
        if (!this.flag) {  
            document.addEventListener('delete', () => this.render())
            this.flag = true;
        }
    }
}
export default SideBar;
