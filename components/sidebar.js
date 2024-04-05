import data from "../main.js";
import BaseTable from "../baseTable.js";
class SideBar extends BaseTable {
    getRenderData() {
       
        const combinedData = data.reduce((acc, curr) => {
            const existingCategory = acc.find(item => item.category === curr.category);
            
            if (existingCategory) {
              existingCategory.count++;
              existingCategory.totalPrice += curr.price;
            } else {
              acc.push({
                category: curr.category,
                count: 1,
                totalPrice: curr.price
              });
            }
            
            return acc;
          }, []);
        //   console.log(combinedData)
        return combinedData          
          
    }
    getCellData(data) {
        return [
            {text:data.category , elementName:'td', handleClick:''},
            {text:data.count, elementName:'td', handleClick: ''},
            {text:data.totalPrice, elementName:'td', handleClick: ''},
        ]
    }
    listenEvent() {
        document.addEventListener('delete', () => this.render())
    }

}


export default SideBar


