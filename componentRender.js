import { SideBar } from "./components/sidebar.js";
import { Table } from "./components/table.js";

(() => () => { 
    [Table, SideBar].map(component =>     
        {
            let obj = new component();
            obj.render();
            obj.listenEvent();
        })
})()();
