import React from "react";

function Filter({ onCategoryChange, selectedCategory }) {
    function handleCategoryChange(event) {
        onCategoryChange(event.target.value);
    }
    
    return (
        <div className="filters">
        <select name="filter" onChange={handleCategoryChange} value={selectedCategory}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
        </select>
        </div>
    );
    }
export default Filter;