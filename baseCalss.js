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
        document.addEventListener('rendering', () => this.render());    //for add functionality
    }
}
