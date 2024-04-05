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
    if (newData.productName !== '' && newData.category !== '' && newData.price > 0) {
        tableData.push(newData)
        pName.value = '';
        pCategory.value = '';
        pPrice.value = '';
        document.dispatchEvent(new CustomEvent('add'));
        message.textContent = ''
    } else {
        message.textContent = 'Enter Valid Input in Price (Price must be > 0) !!!'
    }
}

(() => () => { [Table, SideBar].map(component => new component().render()) })()();