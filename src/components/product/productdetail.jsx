import React, { Component } from "react";
import http from "../services/http";

class ProductDetail extends Component {
  state = {
    data: {}
  };

  async componentDidMount() {
    const itemId = this.props.match.params.id;
    const { data } = await http.get(`http://localhost:2020/items?id=${itemId}`);
    if (data.length === 0) return this.props.history.push("/not-found");
    this.setState({ data: this.toMapData(data[0]) });
  }

  toMapData(data) {
    return {
      id: data.id,
      brand: data.brand,
      type: data.type,
      size: data.size,
      image: data.image,
      price: data.price
    };
  }
  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <h1>Product Detail</h1>
        <div className="row">
          <div className="col-4">
            <img src={data.image} alt="" />
          </div>
          <div className="col-7">
            <h2>{data.brand}</h2>
            <p>{data.type}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductDetail;
