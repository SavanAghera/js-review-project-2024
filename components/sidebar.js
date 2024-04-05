class SideBar extends BaseTable {
    sideBarListen = false;
    getRenderData() {
        const categories = [];
        // console.log(tableData)
        const categoryMap = {};

        tableData.forEach(item => {
            if (!categoryMap[item.category]) {
                categoryMap[item.category] = {
                    name: item.category,
                    count: 1,
                    price: item.price
                };
            } else {
                categoryMap[item.category].count++;
                categoryMap[item.category].price += item.price;
            }
        });

        const sidebarData = Object.values(categoryMap);
        return sidebarData;
    }
    getCellData(data) {
        return [
            {text:data.name , elementName:'td', handleClick:''},
            {text:data.count, elementName:'td', handleClick: ''},
            {text:data.price, elementName:'td', handleClick: ''},
        ]
    }

    listenEvent() {
        if(this.sideBarListen == false){
            document.addEventListener('delete', () => this.render());
            this.sideBarListen = true;
        }
    }

}


