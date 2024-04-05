class BaseClass {
    constructor() {
        this.element = document.getElementById(this.constructor.name);
    }
    render(renderFun) {
        const childElement = renderFun.call(this);
        this.element.innerHTML = '';
        this.element.append(childElement);
        this.listenEvent();
    }
    addData(){
        console.log(document.forms);
    }
    listenEvent() {
        document.addEventListener('delete', () => this.render())
    }
}