let addRowId = document.getElementById('addRowToTable');
addRowId.addEventListener('click', () => {
    console.log(pname.value);
    let obj = { 
        productName: pname.value, 
        category: pcategory.value, 
        price: Number(pprize.value) 
    }

    tableData.push(obj);
    console.log(tableData);

    document.dispatchEvent(new Event("delete"));    //for 1st table
    document.dispatchEvent(new Event("rendering"));    //for 2nd table
})