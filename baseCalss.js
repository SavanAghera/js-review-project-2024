class BaseClass {
    constructor() {
        this.element = document.getElementById(this.constructor.name);

    }
    render(renderFun) {
        console.log("RENDERD ", this.element);
        const childElement = renderFun();
        this.element.innerHTML = '';
        this.element.append(childElement);
        this.listenEvent();
    }
    listenEvent() {

    }
}
