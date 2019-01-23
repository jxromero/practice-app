import React, { Component, Fragment } from "react";

class AddInput extends Component {
  state = {};
  render() {
    const { onSubmit, onChange } = this.props;
    console.log(this.props);
    return (
      <Fragment>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={onChange}
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              onChange={onChange}
              name="age"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              onChange={onChange}
              name="address"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Fragment>
    );
  }
}

export default AddInput;
