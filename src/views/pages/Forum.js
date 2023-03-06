import React from "react";

// core components
import Navbar from "components/Navbar.js";
import LeftSidebar from 'views/forum/LeftSidebar.js'

import Footer from "components/Footer.js";
import { Col, Row, Container } from "reactstrap";


// sections for this page


function Forum() {

  return (
    <div className="jobs">
      <Navbar />
      <Container style={{marginTop: "40px"}}>
        <Row>
          <Col md={2}>
            <LeftSidebar />
          </Col>
          <Col md={8}>
          </Col>
          <Col md={2}>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Forum;
