document.querySelector(".addElem button").addEventListener("click", () => {
  let productName = document.getElementById("productName").value;
  let productCategory = document.getElementById("productCategory").value;
  let productPrice = +document.getElementById("productPrice").value;

  if (!productName || !productCategory || !productPrice) {
    alert("fill all details");
  } else {
    productName = productName.trim();
    productCategory = productCategory.trim();

    if (
      tableData.findIndex((elem) => elem.productName === productName) === -1
    ) {
      tableData.push({
        productName,
        category: productCategory,
        price: productPrice,
      });
      document.dispatchEvent(new Event("delete"));
    } else alert("product already exists");
  }
});
