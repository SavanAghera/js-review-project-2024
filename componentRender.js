import { Table } from "./components/table.js";
import { SideBar } from "./components/sidebar.js";

(() => () => {
  [Table, SideBar].map((component) => {
    let obj = new component();
    obj.render();
    obj.listenEvent();
  });
})()();

// function a (){
//     return function b(){
//         return array => [ new Table.render(), new SideBar.render()]
//     }
// }
// a();
