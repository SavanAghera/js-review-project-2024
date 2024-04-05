export default class BaseClass {
    constructor() {
        this.element = document.getElementById(this.constructor.name);
        
    }
    render(renderFun) {
        console.log('no');
        const childElement = renderFun();
        this.element.innerHTML = '';
        this.element.append(childElement);
        this.listenEvent();
    }
    listenEvent() {

    }
}
