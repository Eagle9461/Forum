import React from "react";

// core components
import Navbar from "components/Navbar.js";
import Categories from 'views/forum/Categories.js';

import Footer from "components/Footer.js";
import { Col, Row, Container } from "reactstrap";


// sections for this page

function ForumCategories() {
  return (
    <div className="">
      <Navbar />
      <Container style={{marginTop: "40px"}}>
        <Row>
          <Categories />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default ForumCategories;
