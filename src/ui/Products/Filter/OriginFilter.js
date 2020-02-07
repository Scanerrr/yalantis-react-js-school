import React from "react";
import { Row, Col, Checkbox } from "antd";

const OriginFilter = ({ options, values, onChange }) => (
  <div className="filter-origin">
    <strong>Origins</strong>
    <div>
      <Row>
        <Col>
          <Checkbox.Group
            options={options}
            value={values}
            onChange={onChange}
          />
        </Col>
      </Row>
    </div>
  </div>
);

export default OriginFilter;
