const categories = [];

// Render components
(() => {
    console.log('Rendering components...');
    [Table, SideBar].forEach(component => {
        const instance = new component();
        if (instance instanceof SideBar) {
            instance.categories = categories;
        }
        instance.render();
    });
})();

