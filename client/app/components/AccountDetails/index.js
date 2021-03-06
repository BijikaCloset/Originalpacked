/**
 *
 * AccountDetails
 *
 */

import React from "react";

import { Row, Col } from "reactstrap";

import Input from "../Input";
import Button from "../Button";

const AccountDetails = (props) => {
  const { user, accountChange, updateProfile } = props;
  // console.log(user)

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfile();
  };

  return (
    <div className="account-details">
      <div className="info">
        <div className="desc">
          <p>
            {user.provider === "email" ? (
              user.email
            ) : (
              <span className="provider-email">
                Logged in With {user.provider}
              </span>
            )}
          </p>
          {user.role !== "ROLE_MEMBER" && <span className="admin">Admin</span>}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col xs="12" md="12">
            <Input
              type={"text"}
              label={" Name"}
              name={"Name"}
              placeholder={"Please Enter Your  Name"}
              value={user.firstName ? user.firstName : ""}
              onInputChange={(name, value) => {
                accountChange(name, value);
              }}
            />
          </Col>
          <Col xs="12" md="12">
            <Input
              type={"text"}
              label={" Shipping Address"}
              name={"address"}
              placeholder={"Please Enter Your  Address"}
              value={user.address ? user.address : ""}
              onInputChange={(name, value) => {
                accountChange(name, value);
              }}
            />
          </Col>
          <Col xs="12" md="12">
            <Input
              type={"text"}
              label={" Zipcode"}
              name={"zipcode"}
              placeholder={"Please Enter Your  zipcode"}
              value={user.zipcode ? user.zipcode : ""}
              onInputChange={(name, value) => {
                accountChange(name, value);
              }}
            />
          </Col>
          {/* <Col xs='12' md='12'>
            <Input
              type={'text'}
              label={'Last Name'}
              name={'lastName'}
              placeholder={'Please Enter Your Last Name'}
              value={user.lastName ? user.lastName : ''}
              onInputChange={(name, value) => {
                accountChange(name, value);
              }}
            />
          </Col> */}
        </Row>
        <hr />
        <div className="profile-actions">
          <Button type="submit" text="Save changes" />
        </div>
      </form>
    </div>
  );
};

export default AccountDetails;
