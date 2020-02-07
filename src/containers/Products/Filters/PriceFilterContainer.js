import React, { useState } from "react";
import { PRODUCTS_FILTER } from "../../../api";
import PriceFilter from "../../../ui/Products/Filter/PriceFilter";

const MIN_PRICE = 0;
const MAX_PRICE = 1000;

const PriceFilterContainer = ({ filter }) => {
  const [minPriceValue, setMinPriceValue] = useState(MIN_PRICE);
  const [maxPriceValue, setMaxPriceValue] = useState(MAX_PRICE);

  const onChange = ([min, max]) => {
    setMinPriceValue(min);
    setMaxPriceValue(max);
  };

  const filterPrice = () => {
    filter({
      [PRODUCTS_FILTER.minPrice]: minPriceValue,
      [PRODUCTS_FILTER.maxPrice]: maxPriceValue
    });
  };

  return (
    <PriceFilter
      defaultValues={[MIN_PRICE, MAX_PRICE]}
      min={MIN_PRICE}
      max={MAX_PRICE}
      values={[minPriceValue, maxPriceValue]}
      onChange={onChange}
      onClick={filterPrice}
    />
  );
};

export default PriceFilterContainer;
