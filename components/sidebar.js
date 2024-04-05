class SideBar extends BaseTable {
    getRenderData() {
        const categories = [];
        tableData.forEach((data)=>{
            const categoryType=types.find(
                (category)=>category.name===data.category
            )
            if(categoryType){
                categoryType.count++;
                categoryType.price+=data.price;
            }
            else{
                categories.push({
                    name:data.category,
                    count:1,
                    price:data.price
                })
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
        document.addEventListener('delete', () => this.render())
    }

}


