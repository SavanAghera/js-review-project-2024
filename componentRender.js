import SideBar from "./components/sidebar.js";
import Table from "./components/table.js";

(()=>()=>{[Table ,SideBar].map(component => 
   { 
   const obj= new component();
   obj.listenEvent();
   obj.render();
}
    )
})()();