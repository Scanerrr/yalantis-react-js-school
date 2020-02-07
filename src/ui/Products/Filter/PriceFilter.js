import React from "react";
import { Row, Col, Slider, Button } from "antd";

const PriceFilter = ({
  defaultValues,
  min,
  max,
  values,
  onChange,
  onClick
}) => (
  <div className="filter-price-range">
    <strong>Price</strong>
    <div>
      <Row>
        <Col span={18}>
          <Slider
            range
            defaultValue={defaultValues}
            min={min}
            max={max}
            onChange={onChange}
            value={values}
          />
        </Col>
        <Col span={4} offset={1}>
          <Button onClick={() => onClick()}>OK</Button>
        </Col>
      </Row>
    </div>
  </div>
);

export default PriceFilter;
