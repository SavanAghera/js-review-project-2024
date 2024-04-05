class Table extends BaseTable{
    getRenderData() {
        return tableData;
    }
    getCellData(data) {
        return [
            { text: data.productName, elementName: 'td', handleClick: '' },
            { text: data.category, elementName: 'td', handleClick: '' },
            { text: `${data.price}`, elementName: 'td', handleClick: '' },
            {
                text: 'Delete',
                elementName: 'button',
                handleClick: () => {
                    const index = tableData.findIndex(item => item.productName === data.productName);
                    if (index !== -1) {
                        tableData.splice(index, 1);
                        const deleteEvent = new Event('delete');
                        document.dispatchEvent(deleteEvent);
                    }
                },
            },
        ];
    }
}
