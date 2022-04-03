/**
 *
 * OrderMeta
 *
 */

import React from "react";

import { Row, Col } from "reactstrap";

import { formatDate } from "../../helpers/date";

const OrderMeta = (props) => {
  const { order } = props;

  return (
    <div className="order-meta">
      <h4>Order Details</h4>
      {console.log(order)}
      <Row>
        <Col xs="12" md="8">
          <Row>
            <Col xs="4">
              <p>User Email</p>
            </Col>
            <Col xs="8">
              <span className="order-label">{` ${order.userEmail}`}</span>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <p>User Name</p>
            </Col>
            <Col xs="8">
              <span className="order-label">{` ${order.userName}`}</span>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <p>Order Address</p>
            </Col>
            <Col xs="8">
              <span className="order-label">{` ${order.userAddress}`}</span>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <p>ZipCode</p>
            </Col>
            <Col xs="8">
              <span className="order-label">{` ${order.userZipcode}`}</span>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <p>Order Number</p>
            </Col>
            <Col xs="8">
              <span className="order-label">{` ${order._id}`}</span>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <p>Order Date</p>
            </Col>
            <Col xs="8">
              <span className="order-label">{` ${formatDate(
                order.created
              )}`}</span>
            </Col>
          </Row>
        </Col>
        <Col xs="12" md="4"></Col>
      </Row>
    </div>
  );
};

export default OrderMeta;
