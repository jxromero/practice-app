import React, { Component } from "react";

class TypeList extends Component {
  renderClass = brand => {
    let classes = "list-group-item";
    if (brand === this.props.selectedType) classes = "list-group-item active";
    return classes;
  };

  render() {
    const { brands, onFilter } = this.props;
    return (
      <div className="col-2">
        <ul className="list-group">
          {brands.map(brand => (
            <li
              key={brand}
              className={this.renderClass(brand)}
              onClick={() => onFilter(brand)}
            >
              {brand}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TypeList;
