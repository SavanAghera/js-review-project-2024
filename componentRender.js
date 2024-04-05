function addNewData() {
    const pName = document.getElementById('pName')
    const pCategory = document.getElementById('pCatgorye')
    const pPrice = document.getElementById('pPrice')
    const message = document.getElementById('message');

    let newData = {
        productName: pName.value.trim(),
        category: pCategory.value.trim(),
        price: +pPrice.value,
    }
    console.log(newData.price > 0)
    if (newData.productName !== '' && newData.category !== '' && newData.price > 0) {
        tableData.push(newData)
        pName.value = '';
        pCategory.value = '';
        pPrice.value = '';
        new Table().render()
        new SideBar().render()
        message.textContent = ''
    } else {
        message.textContent = 'Enter Valid Input !!!'
    }
}

(() => () => { [Table, SideBar].map(component => new component().render()) })()();