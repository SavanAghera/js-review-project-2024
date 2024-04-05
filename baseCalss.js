class BaseClass {
    constructor() {
        this.element = document.getElementById(this.constructor.name);
        this.isEventAdded = false;
    }
    render(renderFun) {
        const childElement = renderFun();
        this.element.innerHTML = '';
        this.element.append(childElement);
        this.listenEvent();
    }
    listenEvent() {

    }
}
