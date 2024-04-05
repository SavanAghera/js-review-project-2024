// export class BaseClass {
//     constructor() {
//         this.element = document.getElementById(this.constructor.name);
//     }

//     render(renderFun, eventListener = null) {
//         const childElement = renderFun();
//         this.element.innerHTML = '';    
//         this.element.append(childElement);
        
//         if (eventListener) {
//             this.listenEvent(eventListener);
//         }
//     }

//     listenEvent(eventListener) {
//         document.addEventListener("click", eventListener);
//     }
// }



export class BaseClass {
    constructor() {
        this.element = document.getElementById(this.constructor.name);
    }

    render(renderFun) {

        console.log('helo world');
        const childElement = renderFun();
        this.element.innerHTML = '';    
        this.element.append(childElement);
    }
    listenEvent() {

    }
}
