class SideBar extends BaseTable {
    getRenderData() {
        const categories = [];

        tableData.forEach((tabEle) => {
            let flag = false;
            if(categories) {
                categories.forEach((catEle, index) => {
                    if(catEle.name == tabEle.category) {
                        flag = true;
                        categories[index].count += 1;
                        categories[index].price += tabEle['price'];;
                    }
                })
            }
            if(!flag) {
                let obj = {};
                obj['name'] = tabEle['category'];
                obj['count'] = 1;
                obj['price'] = tabEle['price'];
                categories.push(obj);
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
        document.addEventListener('delete', () => this.render());
    }
}