
class BaseTable extends BaseClass{
   
    
    componentRenderer() {
        const table = document.createElement('table');
    
       
        this.getRenderData().forEach(data => {
          
            const tr = document.createElement('tr');
            this.renderCells(tr, this.getCellData(data))
            table.append(tr)
        });
        return table;
    }
    getRenderData(data) {
    

    } 
    getCellData(data) {
        return [
            { productName: 'a', category: 'a1', price: 3},
            { productName: 'b', category: 'a1', price: 2 },
            { productName: 'c', category: 'a2', price: 2 },
            { productName: 'd', category: 'a3', price: 2 },
            { productName: 'e', category: 'a3', price: 2 },
        ];
    }
    renderCells(element , cellData) {
    
    
        cellData.forEach(data => {
           // console.log("data",data);
           // let dname=data.productName;

            function  del(event) {
               console.log(event.target.parentNode);
                let p=event.target.parentNode.firstChild.textContent;
                console.log(p);
              //  p.removeChild(event.target.parentNode);
              let n=event.target.parentNode.parentNode;
                const index = tableData.findIndex(obj => obj.productName === p); 
                console.log(index);
                tableData.splice(index,1);
               n.removeChild(event.target.parentNode);
                document.dispatchEvent(new Event("delete"));
         }
            const childElement = document.createElement(data.elementName);
            childElement.textContent = data.text;
           // console.log(childElement.textContent,"td");
            childElement.onclick = del;
            
            
            element.append(childElement);
           
           
        }
        )
        
         
    }
//    add(){
//         let product=document.getElementById("productn").value();
//         let cate=document.getElementById("cate").value();
//         let pricee=document.getElementById("price").value();
//         tableData.push({ productName: product, category: cate, price: pricee })
//         console.log(tableData);
//        }
    render(req,res) {
        
        super.render(this.componentRenderer())
        
    }
}