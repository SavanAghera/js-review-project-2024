
import Table from "./components/table.js";
import SideBar from "./components/sidebar.js"

(() => () => {
    [Table, SideBar].map(component => {
       let take =  new component();
       take.render();
       take.listenEvent()
    })
})()();



