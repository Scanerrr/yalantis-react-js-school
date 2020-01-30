import React from "react";
import { Spin, Icon } from "antd";

const Loader = props => {
  const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
  return <Spin indicator={antIcon} />;
};
export default Loader;
