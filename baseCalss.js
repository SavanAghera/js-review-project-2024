//  import renderFun from "./componentRender.js";

 export default class BaseClass {
    constructor() {
        this.element = document.getElementById(this.constructor.name);

    }
    render(renderFun) {
        const childElement = renderFun();
        this.element.innerHTML = '';
        this.element.append(childElement);
    
    }
    listenEvent() {
        console.log("hhh");
        document.addEventListener('delete', () => this.render())

    }
}
