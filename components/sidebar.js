import BaseTable from "../baseTable.js";
import { tableData, dflag } from "../main.js";

export default class SideBar extends BaseTable {
    getRenderData() {
        // const categories = [];
       
        const categories = tableData.reduce((acc, curr) => {
            const exist = acc.find(item => item.name === curr.category);
            if (exist) {
                exist.count++;
                exist.price += curr.price;
            } else {
                acc.push({
                    name: curr.category,
                    count: 1,
                    price: curr.price
                });
            }
            return acc;
        }, []);
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
        if(dflag.flag){
            document.addEventListener('delete', () => this.render());
            dflag.flag = false;
        }
        return;
    }

}