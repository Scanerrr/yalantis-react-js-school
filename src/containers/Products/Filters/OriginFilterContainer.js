import React from "react";
import { useSelector } from "react-redux";

import OriginFilter from "../../../ui/Products/Filter/OriginFilter";
import Loader from "../../../ui/Loader";
import Error from "../../../ui/Error";
import { useInjectSaga } from "../../../hooks/useSaga";
import productOriginsSaga from "../../../store/origins/saga/productOriginsSaga";
import {
  selectOrigins,
  selectOriginsState
} from "../../../store/origins/selectors";
import { selectFilterOrigin } from "../../../store/filter/selector";

const OriginFilterContainer = ({ filter }) => {
  useInjectSaga("productOrigins", productOriginsSaga);

  const productOrigins = useSelector(selectOrigins).map(
    ({ displayName, value }) => ({
      label: displayName,
      value
    })
  );

  const { loading, error } = useSelector(selectOriginsState);

  const selectedOrigins = useSelector(selectFilterOrigin);

  const onChange = values => {
    filter({
      origins: values
    });
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message="Origin fetch failed" description={error} />;
  }

  return (
    <OriginFilter
      options={productOrigins}
      values={selectedOrigins}
      onChange={onChange}
    />
  );
};

export default OriginFilterContainer;
