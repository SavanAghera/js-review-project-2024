class SideBar extends BaseTable {
    getRenderData() {
        const categories = [...new Set(tableData.map(item => item.category))];
        let arrayToReturn = [];

        for(let item of categories){
            let tempObj = {};
            tempObj.name = item;
            tempObj.count = 0;
            tempObj.price = 0;

            for(let product of tableData){
                if(product.category == item){
                    tempObj.count++;
                    tempObj.price += product.price;
                }
            }

            arrayToReturn.push(tempObj);
        }

        return arrayToReturn;
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


