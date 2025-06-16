function sortProductsByPrice(products, order = "asc") {
  if (!Array.isArray(products)) {
    return [];
  }

  if (products.length <= 1) {
    return products;
  }

  const pivotIndex = Math.floor(products.length / 2);
  const pivot = products[pivotIndex];
  const left = [];
  const right = [];

  if (order === "desc") {
    for (let i = 0; i < products.length; i++) {
      if (i === pivotIndex) continue;
      if (products[i].price >= pivot.price) {
        left.push(products[i]);
      } else {
        right.push(products[i]);
      }
    }
  }
  if (order === "asc") {
    for (let i = 0; i < products.length; i++) {
      if (i === pivotIndex) continue;
      if (products[i].price <= pivot.price) {
        left.push(products[i]);
      } else {
        right.push(products[i]);
      }
    }
  }

  return [
    ...sortProductsByPrice(left, order),
    pivot,
    ...sortProductsByPrice(right, order),
  ];
}

export { sortProductsByPrice };
