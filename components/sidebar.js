class SideBar extends BaseTable {
    getRenderData() {
        const categories = [];

        const categoriesNames = [];
        let temp = {};

        for (let i = 0; i < tableData.length; i++) {
            if (!categoriesNames.includes(tableData[i].category)) {
                temp.name = tableData[i].category;
                temp.price = tableData[i].price;
                temp.count = 1;
                categoriesNames.push(tableData[i].category);
                categories.push(temp);
                temp = {};
            } else {
                const idx = categories.findIndex((ele,idx) => ele.name === tableData[i].category);
                categories[idx].count ++;
                categories[idx].price += tableData[i].price;
            }
        }
        // console.log(categories);
        // console.log(categoriesNames);
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
        document.addEventListener('updateSidebar', () => this.render())
    }
}


