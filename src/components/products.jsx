import React, { Component } from "react";
import http from "./services/http";
import ProductList from "./product/productlist";
import _ from "lodash";
import TypeList from "./common/typelist";
import Pagination from "./common/pagination";
import { paginate } from "./utils/paginate";

class Products extends Component {
  state = {
    items: [],
    brands: [],
    countPerPage: 6,
    currentTab: 1,
    tabToShow: 5,
    selectedType: ""
  };

  async componentDidMount() {
    // const promise = http.get("http://localhost:3001/items");
    const { data: items } = await http.get("http://localhost:2020/items");
    let brands = _.reduce(
      items,
      (result, value) => {
        if (!result.includes(value.type)) result.push(value.type);
        return result;
      },
      []
    );
    brands = ["all", ...brands];
    this.setState({ items, brands });
  }

  handleFilter = type => {
    this.setState({ selectedType: type, currentTab: 1 });
  };

  handlePageChange = page => {
    let currentTab = this.state.currentTab;
    if (isNaN(page) && page === "next") page = currentTab + 1;
    if (isNaN(page) && page === "prev") page = currentTab - 1;
    this.setState({ currentTab: page });
  };

  handleAddToCart = () => {
    console.log(1);
  };

  render() {
    const {
      items,
      brands,
      selectedType,
      countPerPage,
      currentTab,
      tabToShow
    } = this.state;

    let filtered = items;
    if (selectedType && selectedType !== "all")
      filtered = items.filter(i => i.type === selectedType);

    const products = paginate(filtered, currentTab, countPerPage);

    return (
      <React.Fragment>
        <div className="row">
          <TypeList
            brands={brands}
            onFilter={this.handleFilter}
            selectedType={selectedType}
          />
          <div className="col-10">
            <ProductList items={products} selectedType={selectedType} />
            <Pagination
              onPageChange={this.handlePageChange}
              count={countPerPage}
              currentTab={currentTab}
              items={filtered.length}
              tabToShow={tabToShow}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
