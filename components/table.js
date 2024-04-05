class Table extends BaseTable {
    getRenderData() {
      return tableData;
    }
    getCellData(data) {
      return [
        { text: data.productName, elementName: "td", handleClick: "" },
        { text: data.category, elementName: "td", handleClick: "" },
        { text: data.price, elementName: "td", handleClick: "" },
        { text: "Delete", elementName: "button", handleClick: ()=> this.handleDelete(data) },
      ];
    }

    handleDelete(data){
        const index= tableData.indexOf(data);
        if(index!== -1){
            tableData.splice(index,1);
            this.render();
            document.dispatchEvent(new Event("delete"))
        }
    }

    addData(event){
      tableData.push(event.data);
      this.render();
      document.dispatchEvent(new Event("delete"))
    }

    listenEvent() {
      document.addEventListener("addNewData", (event)=> this.addData(event));
    }
  }
  