import React, { useState } from "react";
import Item from "./Item";

function Filter(props) {


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={props.onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        
      </ul>
    </div>
  );
}

export default Filter;
