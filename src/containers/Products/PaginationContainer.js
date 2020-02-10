import React from "react";
import { connect } from "react-redux";
import { Pagination } from "antd";
import { PRODUCTS_FILTER } from "../../api";
import { selectFilter } from "../../store/filter/selector";
import { updateFilter } from "../../store/filter/actions";

const PaginationContainer = ({ filter, perPage, currentPage, totalItems }) => {
  const filterCurrentPage = value => {
    filter({
      [PRODUCTS_FILTER.page]: value
    });
  };
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Pagination
        current={currentPage}
        onChange={filterCurrentPage}
        pageSize={perPage}
        total={totalItems}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  currentPage: selectFilter(state).page,
  perPage: selectFilter(state).perPage,
  totalItems: selectFilter(state).totalItems
});

const mapDispatchToProps = {
  filter: updateFilter
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(PaginationContainer);
