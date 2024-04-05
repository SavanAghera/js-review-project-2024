import { tableData } from "../main.js"

export class SideBar extends BaseTable {
    getRenderData() {
        const name = new Map()
        // let count = 0
        tableData.forEach(elem => {
            if(name.has(elem.category)){
                console.log(elem);
                let category = name.get(elem.category);
                category.count++
                category.price+=elem.price;
                name.set(elem.category , category )
            }
            else{
                name.set(elem.category , {count:1 , price:elem.price});
            }
        })

        const categories = Array.from(name);

        return categories;
        
    }
    getCellData(data) {
        return [
            {text:data[0] , elementName:'td', handleClick:''},
            {text:data[1].count, elementName:'td', handleClick: ''},
            {text:data[1].price, elementName:'td', handleClick: ''},
        ]
    }
    listenEvent() {
            document.addEventListener('delete', () => this.render())
    }

}


