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
        console.log("Hii from baseClass");
    }
}
export default BaseClass;