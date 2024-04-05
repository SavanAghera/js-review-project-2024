// let sideBarInstance;

// function updateComponent(count, itemName){
//     sideBarInstance.render()
// }

(()=>()=>{[Table ,SideBar].map(component => {
    if (component === SideBar){
        sideBarInstance = new component()
        return sideBarInstance.render()
    }
    else{
        return new component().render()
    }
})})()();