//  import renderFun from "./componentRender.js";

 export default class BaseClass {
    constructor() {
        this.element = document.getElementById(this.constructor.name);

    }
    eventflag=true;
    render(renderFun) {
        const childElement = renderFun();
        this.element.innerHTML = '';
        this.element.append(childElement);
        if(this.eventflag){
        this.listenEvent();
        this.eventflag=false;
        }
    }
    listenEvent() {
        document.addEventListener('delete', () => this.render())

    }
}
