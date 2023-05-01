import React from "react";

// core components
import Navbar from "components/Navbar.js";
import BlogDetail from 'components/BlogDetail.js';

import Footer from "components/Footer.js";
import { Col, Row, Container } from "reactstrap";


// sections for this page

function ForumCategories() {
  return (
    <div className="">
      <Navbar />
      <Container style={{marginTop: "40px"}}>
        <Row>
          <BlogDetail />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default ForumCategories;
