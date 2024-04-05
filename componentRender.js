(() => () => {
    [Table, SideBar].map((component) => new component().render());
  })()();