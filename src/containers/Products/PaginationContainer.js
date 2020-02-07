import React from "react";
import { connect } from "react-redux";
import { Pagination } from "antd";
import { PRODUCTS_FILTER } from "../../api";
import { selectFilter } from "../../store/filter/selector";
import { updateFilter } from "../../store/filter/actions";
import { selectProductsIds } from "../../store/products/selectors";

const PaginationContainer = ({
  filter,
  currentPage,
  perPage,
  productsLength
}) => {
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
        total={productsLength}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  currentPage: selectFilter(state).page,
  perPage: selectFilter(state).perPage,
  // TODO: change getting total items from API
  productsLength: selectProductsIds(state).length
});

const mapDispatchToProps = {
  filter: updateFilter
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(PaginationContainer);
