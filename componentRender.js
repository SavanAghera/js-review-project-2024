import Table from "./components/table.js";
import SideBar from "./components/sidebar.js";

(()=>()=>{[Table ,SideBar].map(component => new component().render())})()();