import BaseTable from "../baseTable.js";
import tableData from "../main.js";
export default class SideBar extends BaseTable {
    getRenderData() {
        const categories = [];
        const categorymap= {};
        tableData.forEach(item =>{
            if(!categorymap[item.category]){
                categorymap[item.category]={
                    name:item.category,
                    count:1,
                    price:item.price
                };
            }
            else{
                categorymap[item.category].count++;
                categorymap[item.category].price +=item.price;
            }
        });
        const sibebarData =Object.values(categorymap);
        return sibebarData;  


      

        // let sidebarData=[];
        // let sidebarRow;
        
        // tableData.forEach(item=>{
        //     console.log(item.category);
        //     if(sidebarData.length>0){
        //     for(let i=0;i<sidebarData.length;i++){
        //      let   data=sidebarData[i];
        //         if((data.name!=item.category)){
        //             console.log("no");
        //             sidebarRow={
        //                 name:item.category,
        //                 count:1,
        //                 price:item.price    
        //             }
        //             sidebarData.push(sidebarRow);
        //             break;
        //         }
        //         else{
        //             console.log("yes");
        //             data.count++;
        //             data.price+=item.price;
                    
        //         }
                
            
        // }
        //     }
        //         else{
        //                 sidebarRow={
        //                     name:item.category,
        //                     count:1,
        //                     price:item.price    
        //                     }
        //                     sidebarData.push(sidebarRow);
        //                 }
        
        // })
        // console.log(sidebarData);
        // return sidebarData;

        
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


