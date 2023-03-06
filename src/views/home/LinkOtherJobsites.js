import React from "react";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
// core components

function LinkOtherJobsites() {
  return (
    <div className="link-other-jobsites">
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <div className="find-job-slogan">Find a job you'll love with the UK's #1 job site
            </div>
            <h5 className="find-job-slogan-sub">Your next role could be with one of these leading companies.</h5>

          </Col>
          <Col md={6}>
            <Row>
              <Col md={4} sm={6} xs={12} className="text-center">
                <a href="#">
                  <img src={require("assets/img/safestore-lge 1.png")}></img>
                </a>
              </Col>
              <Col md={4} sm={6} xs={12} className="text-center">
                <a href="#">
                  <img src={require("assets/img/safestore-lge 1.png")}></img>
                </a>
              </Col>
              <Col md={4} sm={6} xs={12} className="text-center">
                <a href="#">
                  <img src={require("assets/img/safestore-lge 1.png")}></img>
                </a>
              </Col>
              <Col md={4} sm={6} xs={12} className="text-center">
                <a href="#">
                  <img src={require("assets/img/safestore-lge 1.png")}></img>
                </a>
              </Col>
              <Col md={4} sm={6} xs={12} className="text-center">
                <a href="#">
                  <img src={require("assets/img/safestore-lge 1.png")}></img>
                </a>
              </Col>
              <Col md={4} sm={6} xs={12} className="text-center">
                <a href="#">
                  <img src={require("assets/img/safestore-lge 1.png")}></img>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Button className="m-auto d-block" outline>See all companies</Button>
      </Container>

    </div>
  );
}

export default LinkOtherJobsites;