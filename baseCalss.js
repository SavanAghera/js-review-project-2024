let addTable = false;
let deleteTable = false;

class BaseClass {
    constructor() {
        this.element = document.getElementById(this.constructor.name);


    }
    render(renderFun) {
        const childElement = renderFun();
        this.element.innerHTML = '';
        this.element.append(childElement);
        this.listenEvent();
    }
    listenEvent() {
       
            document.addEventListener('delete', () => {
                if(deleteTable){this.render();
                deleteTable =false;
                console.log("yeahh")}
            });
      
        
        document.addEventListener('add', () => {if(addTable)this.render();
         addTable = false;
        });
    }
}

