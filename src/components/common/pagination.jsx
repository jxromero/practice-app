import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { tab } from "../utils/tab";

const Pagination = ({ onPageChange, count, currentTab, items, tabToShow }) => {
  const pageCount = Math.ceil(items / count);
  if (pageCount === 1) return null;
  const pageRange = _.range(1, pageCount + 1);
  const tabs = tab(tabToShow, pageRange, currentTab);
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => onPageChange("prev")}
            disabled={currentTab === 1}
          >
            Prev
          </button>
        </li>
        {tabs.map(p => (
          <li
            className={p === currentTab ? "page-item active" : "page-item"}
            key={p}
          >
            <button className="page-link" onClick={() => onPageChange(p)}>
              {p}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => onPageChange("next")}
            disabled={currentTab === pageCount}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.protoType = {
  onPageChange: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  currentTab: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  pageToShow: PropTypes.number.isRequired
};

export default Pagination;
