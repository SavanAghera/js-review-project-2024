class BaseClass {
    constructor() {
        this.element = document.getElementById(this.constructor.name);
        this.listenEvent();
    }

    render(renderFun) {
        const childElement = renderFun.call(this);
        this.element.innerHTML = '';
        this.element.append(childElement);
    }

    listenEvent() {
        
    }
}

