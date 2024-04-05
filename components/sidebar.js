import BaseTable from "../baseTable.js"
import tableData from "../main.js";

class SideBar extends BaseTable {
    getRenderData() {
        const categories = [];

        tableData.forEach(data => {
            // count
            const existingCategoryIndex = categories.findIndex(cat => cat.name === data.category);
            
            if (existingCategoryIndex !== -1) {
                categories[existingCategoryIndex].price += data.price;
                categories[existingCategoryIndex].count++;
            } else {
                categories.push({ name: data.category, count: 1, price: data.price });
            }
        });
        // tableData.forEach((data)=>{
        //     const alreadyexists = categories.findIndex(ca)
        // })
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
