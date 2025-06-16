import "./SortProducts.css";

function SortProducts({ handleSortProducts }) {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    handleSortProducts(selectedValue);
  };

  return (
    <div className="sort-products">
      <label htmlFor="sort">Sort by Price:</label>
      <div className="sort-select">
        <select id="sort" name="sort" onChange={handleChange}>
          <option value="all" defaultValue>
            All
          </option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
    </div>
  );
}

export default SortProducts;
