export default class BaseClass {
    constructor() {
        this.element = document.getElementById(this.constructor.name);
        this.listenEvent();
    }
    render(renderFun) {
        const childElement = renderFun();
        this.element.innerHTML = '';
        this.element.append(childElement);
    }
    listenEvent() {

    }
}