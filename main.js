export const tableData = [
  { productName: "a", category: "a1", price: 30 },
  { productName: "b", category: "a1", price: 20 },
  { productName: "c", category: "a2", price: 20 },
  { productName: "d", category: "a3", price: 20 },
  { productName: "e", category: "a3", price: 20 },
];

document.getElementById("add").addEventListener("click", () => {
  let productName = document.getElementById("productName").value;
  let category = document.getElementById("category").value;
  let price = Number(document.getElementById("price").value);
  let obj={
    productName,
    category,
    price,
  }
  tableData.push(obj);

  document.dispatchEvent(new Event('delete'));
  document.dispatchEvent(new Event('render'));

});
