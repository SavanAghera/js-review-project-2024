class BaseClass {
    constructor() {
        this.element = document.getElementById(this.constructor.name);
        
        if (this.listenEvent){
            this.listenEvent();
        }
    }
    render(renderFun) {
        const childElement = renderFun.call(this);
        this.element.innerHTML = '';
        this.element.append(childElement);
    }
    addData(){
        console.log(document.forms);
    }
    listenEvent() {
        document.addEventListener('delete', () => this.render())
    }
}