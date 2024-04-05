import Table from "./components/table.js";
import SideBar from "./components/sidebar.js";

(() => () => {
    [Table, SideBar].map(component => {
        const obj = new component();
        obj.listenEvent();
        obj.render();
    })
})()();
