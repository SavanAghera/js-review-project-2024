const productNameInput = document.getElementById("productNameInput");
const categoryInput = document.getElementById("categoryInput");
const priceInput = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", () => {
  const productName = productNameInput.value.trim();
  const category = categoryInput.value.trim();
  const price = parseFloat(priceInput.value);

  if (!productName || !category || isNaN(price)) {
    alert("Please fill in all fields with valid values.");
    return;
  }

  if (price <= 0 || isNaN(price)) {
    alert("Please enter a positive price.");
    priceInput.value = "";
    return;
  }

  const existingEntry = tableData.find(
    (entry) =>
      entry.productName === productName &&
      entry.category === category &&
      entry.price === price
  );
  if (existingEntry) {
    alert("Product already exists in the category with the same price.");
    productNameInput.value = "";
    categoryInput.value = "";
    priceInput.value = "";
    return;
  }

  const existingEntry1 = tableData.findIndex(
    (entry) =>
      entry.productName === productName &&
      entry.category === category &&
      entry.price !== price
  );
  if (existingEntry1 >= 0) {
    console.log(existingEntry1);
    tableData.splice(existingEntry1, 1, { productName, category, price });
  }

  if (existingEntry1 < 0) tableData.push({ productName, category, price });

  productNameInput.value = "";
  categoryInput.value = "";
  priceInput.value = "";
  document.dispatchEvent(new CustomEvent("delete"));
  console.log(tableData);
});
