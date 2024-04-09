class SideBar extends BaseTable {

    getRenderData() {
        const categories = [];
        for (let item of tableData) {
            const categoryName = item.category;    //category name
            let categoryIndex = categories.findIndex(cat => cat.name === categoryName); // category already exists in the array
            if (categoryIndex === -1) {
                categories.push({
                    name: categoryName,
                    count: 1,
                    price: item.price
                });
            } else {
                categories[categoryIndex].count++;
                categories[categoryIndex].price += item.price;
            }
        }
    // console.log(categories);
    
    return Object.values(categories);
}
getCellData(data) {
    return [
        { text: data.name, elementName: 'td', handleClick: '' },
        { text: data.count, elementName: 'td', handleClick: '' },
        { text: data.price, elementName: 'td', handleClick: '' },
    ]
}
listenEvent() {
    document.addEventListener('delete', () => this.render())
    document.addEventListener('updatesidebar', () => this.render())
}

}

