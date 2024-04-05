class SideBar extends BaseTable {
    getRenderData() {
        const categories = [];
        tableData.forEach(item=>{
            let index=categories.findIndex(Citem=>Citem.name==item.category);
            if(index==-1){
                let a={
                    name:item.category,
                    count:1,
                    price:item.price,
                }
                categories.push(a);
            }
            else{
                categories[index].count++;
                categories[index].price+=item.price;
            }
        })
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


