import React from "react";

// core components
import Navbar from "components/Navbar.js";
import Blogs from 'views/forum/Blogs.js';

import Footer from "components/Footer.js";
import { Col, Row, Container } from "reactstrap";


// sections for this page

function Forum() {
  return (
    <div className="">
      <Navbar />
      <Container style={{marginTop: "40px"}}>
        <Row>
          <Blogs />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Forum;
