import React from "react";
import { Card as ACard } from "antd";

const Card = ({ children, ...props }) => <ACard {...props}>{children}</ACard>;

export default Card;
