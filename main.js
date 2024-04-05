const deleteEvent = new CustomEvent('delete')

const tableData = [
    { productName: 'a', category: 'a1', price: 3 },
    { productName: 'b', category: 'a1', price: 2 },
    { productName: 'c', category: 'a2', price: 2 },
    { productName: 'd', category: 'a3', price: 2 },
    { productName: 'e', category: 'a3', price: 2 },
];

const sideBarData = []
const categoryData = Object.groupBy(tableData, ({ category }) => category)

function addSideBarData(){
    for (let item in categoryData){
        sideBarData.push({
            name: item,
            count: categoryData[item].length,
            price: categoryData[item].reduce((prevPrice, i) => prevPrice + i.price, 0)
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const data = {
            productName: form.name.value,
            category: form.category.value,
            price: form.price.value
        }

        if (!data.productName.trim() || !data.category.trim() || !+data.price || !data.price.trim()){
            alert('Invalid field!');
            return;
        }

        for (let item in tableData){
            if (tableData[item].productName === data.productName && tableData[item].category === data.category){
                alert('That category product already exists!')
                return;
            }
        }

        tableData.push(data)

        if (categoryData[data.category]){
            sideBarData.forEach(item => {
                if (item.name === data.category){
                    item.count++;
                    item.price= +item.price + +data.price;
                }
            })
        }
        else{
            categoryData[data.category]={}
            sideBarData.push({
                name: data.category,
                count: 1,
                price: data.price
            })
        }

        document.dispatchEvent(deleteEvent)
    })

})

addSideBarData()