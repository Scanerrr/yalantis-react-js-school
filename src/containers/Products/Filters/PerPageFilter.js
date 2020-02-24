import React from "react";
import { connect } from "react-redux";
import { Select } from "antd";

import { selectFilter } from "../../../store/filter/selector";
import { updateFilter } from "../../../store/filter/actions";

const PerPageFilter = ({ perPage, filter }) => {
  const filterPerPage = value => {
    filter({
      perPage: value
    });
  };
  return (
    <Select
      defaultValue={perPage}
      onChange={filterPerPage}
      style={{ width: 120 }}
    >
      <Select.Option value={perPage - 5}>{perPage - 5}</Select.Option>
      <Select.Option value={perPage}>{perPage}</Select.Option>
      <Select.Option value={perPage + 5}>{perPage + 5}</Select.Option>
    </Select>
  );
};

const mapStateToProps = state => ({
  perPage: selectFilter(state).perPage
});

const mapDispatchToProps = {
  filter: updateFilter
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(PerPageFilter);
