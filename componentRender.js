import SideBar from "./components/sidebar.js";
import Table from "./components/table.js";

(() => () => {
    [Table, SideBar].map(component => {
        let take = new component()
        take.render();
        take.listenEvent();
    })
})()();

console.log(SideBar)