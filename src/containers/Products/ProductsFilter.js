import React from "react";
import { connect } from "react-redux";
import { updateFilter } from "../../store/filter/actions";
import PriceFilterContainer from "./Filters/PriceFilterContainer";
import OriginFilterContainer from "./Filters/OriginFilterContainer";

const ProductsFilter = ({ filter }) => {
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Filters</h4>
      <PriceFilterContainer filter={filter} />
      <OriginFilterContainer filter={filter} />
    </div>
  );
};

const mapDispatchToProps = {
  filter: updateFilter
};

const enhancer = connect(null, mapDispatchToProps);

export default enhancer(ProductsFilter);
