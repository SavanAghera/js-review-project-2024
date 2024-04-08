class SideBar extends BaseTable {
    getRenderData() {
        const categories = [];
        const alreadyStored=[];
        tableData.forEach((ele)=>{
            let index=alreadyStored.indexOf(ele.category)
            if(index!==-1){
                let obj= categories.find((ele2)=>{
                    let x=ele2;
                    return ele2.name===ele.category
                })
                if(obj){
                obj.count+=1;
                obj.price= Number(obj.price)+Number(ele.price);
                }
            }else{
                categories.push({name:ele.category,count:1,price:ele.price})
                alreadyStored.push(ele.category);
            }
        })
        return categories;
    }
    getCellData(data) {
        return [
            {text:data.name , elementName:'td', handleClick:''},
            {text:data.count, elementName:'td', handleClick: ''},
            {text:data.price, elementName:'td', handleClick: ''},
        ]
    }
    listenEvent() {
        document.addEventListener('upateInSideBar', (e) => {
            this.render();
        })   
    }

}


