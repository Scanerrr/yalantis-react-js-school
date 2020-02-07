import React, { useState, useEffect } from "react";
import { PRODUCTS_FILTER } from "../../../api";
import OriginFilter from "../../../ui/Products/Filter/OriginFilter";

const ORIGINS = [
  {
    label: "europe",
    value: "europe"
  },
  {
    label: "usa",
    value: "usa"
  },
  {
    label: "africa",
    value: "africa"
  },
  {
    label: "asia",
    value: "asia"
  }
];

const OriginFilterContainer = ({ filter }) => {
  const [origins, setOrigins] = useState([]);

  const onChange = values => {
    setOrigins(values);
  };

  useEffect(() => {
    filter({
      [PRODUCTS_FILTER.origins]: origins
    });
  }, [filter, origins]);

  return (
    <OriginFilter options={ORIGINS} values={origins} onChange={onChange} />
  );
};

export default OriginFilterContainer;
