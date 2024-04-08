class SideBar extends BaseTable {
  
    
     getRenderData() {
        const data = tableData;
        const categories = [];
    
        data.forEach(elem => {
            let existing = categories.find(cat => cat.name === elem.category);
            if (existing) {
                existing.count += 1;
                existing.price += elem.price;
            } else {
                categories.push({ name: elem.category, count: 1, price: elem.price });
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
       // this.render();
        document.addEventListener('delete', () => this.render())
    }

}


