(() => () => {
    [Table, SideBar].map(
        component => {
            const obj = new component();
            obj.render();
            obj.listenEvent();
        })
})()();
