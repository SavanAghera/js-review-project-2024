class BaseClass {
  constructor() {
    this.element = document.getElementById(this.constructor.name);
    this.listenEvent();
  }
  render(renderFun) {
    console.log("hi");
    const childElement = renderFun();
    this.element.innerHTML = "";
    this.element.append(childElement);
  }
  listenEvent() {}
}
