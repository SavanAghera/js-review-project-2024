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

        if (!data.price.trim() || !data.productName.trim() || !data.category.trim()){
            alert("Fileds cannot be empty!")
            return;
        }
        
        if (!(+data.price && +data.price >= 0)){
            alert("Invalid price!")
            return;
        }

        data.price = Number(data.price)

        let alreadyExist  = false
        tableData.forEach((item, index) => {
            if (item.productName === data.productName && item.category === data.category){
                alreadyExist = true

                sideBarData.forEach(sideBar_item => {
                    if (sideBar_item.name === data.category){
                        debugger
                        sideBar_item.price -= item.price
                        sideBar_item.price += +data.price
                    }
                })

                tableData.splice(index, 1, data)

                document.dispatchEvent(deleteEvent)
            }
        })
        if (alreadyExist) return;


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