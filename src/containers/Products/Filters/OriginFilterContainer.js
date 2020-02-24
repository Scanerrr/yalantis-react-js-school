import React from "react";
import { useSelector } from "react-redux";

import OriginFilter from "../../../ui/Products/Filter/OriginFilter";
import { useInjectSaga } from "../../../hooks/useSaga";
import productOriginsSaga from "../../../store/origins/saga/productOriginsSaga";
import { selectOrigins } from "../../../store/origins/selectors";
import { selectFilterOrigin } from "../../../store/filter/selector";

const OriginFilterContainer = ({ filter }) => {
  useInjectSaga("productOrigins", productOriginsSaga);

  const ORIGINS = useSelector(selectOrigins).map(({ displayName, value }) => ({
    label: displayName,
    value
  }));

  const selectedOrigins = useSelector(selectFilterOrigin);

  const onChange = values => {
    filter({
      origins: values
    });
  };

  return (
    <OriginFilter
      options={ORIGINS}
      values={selectedOrigins}
      onChange={onChange}
    />
  );
};

export default OriginFilterContainer;
