class SideBar extends BaseTable {

    getRenderData() {
        let categories=[];
        categories=tableData.reduce((acc, curr)=>{
            let categoryIndex = acc.findIndex(item => item.name === curr.category);
            if (categoryIndex !== -1) {
                // If the category exists, update its count and price
                acc[categoryIndex].count++;
                acc[categoryIndex].price += curr.price;
            } else {
                // If the category doesn't exist, add it to acc
                acc.push({ name: curr.category, count: 1, price:curr.price });
            }
            return acc;
        },[])
        return categories;
    }

    getCellData(data) {
        return [
            { text: data.name, elementName: 'td' },
            { text: data.count, elementName: 'td' },
            { text: data.price, elementName: 'td' }
        ];
    }

    listenEvent() {
        document.addEventListener('delete', () => this.render());
        document.addEventListener('add', () => this.render());
    }
}