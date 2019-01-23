import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ items, selectedType }) => {
  return (
    <ul className="productList pull-right">
      {items.map(i => (
        <li key={i.id} className="col-4">
          <Link to={`/products/${i.id}`}>
            <img src={i.image} alt="" />
            <p>{i.type}</p>
            <p>{i.brand}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
