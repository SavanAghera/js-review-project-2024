class Table extends BaseTable{
    getRenderData() {
        return tableData
    }
    getCellData(data) {
        return [
            {text:data.productName, elementName:'td', handleClick:''},
            {text:data.category, elementName:'td', handleClick: ''},
            {text:data.price, elementName:'td', handleClick: ''},
            {text:'Delete', elementName: 'td', handleClick: (event) => {
                tableData.forEach((item, index) => {
                    if (item.productName === data.productName && item.category === data.category){
                        tableData.splice(index, 1)
                    }
                })

                sideBarData.forEach(item => {
                    if (item.name === data.category){
                        item.count--
                        item.price-=data.price
                        document.dispatchEvent(deleteEvent)
                    }
                })
            }}
        ]
    }
}
