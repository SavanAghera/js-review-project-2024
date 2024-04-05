const productPrice = document.querySelector("#productPrice");
const max = 100;
const min = 1;
productPrice.min = min;
productPrice.max = max;
productPrice.value = min;
document.querySelector(".addElem button").addEventListener("click", () => {
  let productName = document.getElementById("productName");
  let productCategory = document.getElementById("productCategory");
  let productPrice = document.getElementById("productPrice");
  if (
    !productName.value.trim() ||
    !productCategory.value.trim() ||
    !productPrice.value
  ) {
    alert("fill all details");
  } else {
    productName = productName.value.trim();
    productCategory = productCategory.value.trim();
    productPrice = +productPrice.value;
    if (
      tableData.findIndex(
        (elem) =>
          elem.productName === productName && elem.category === productCategory
      ) === -1
    ) {
      tableData.push({
        productName,
        category: productCategory,
        price: productPrice,
      });
      document.dispatchEvent(new Event("delete"));
    } else alert("product already exists");
  }
  document.getElementById("productName").value = "";
  document.getElementById("productCategory").value = "";
});
