import React from "react";

// core components
import Navbar from "components/Navbar.js";
import JobSearchForm from "components/JobSearchForm.js";
import AgencySearchFilter from 'views/agencies/AgencySearchFilter.js'
import AgencyCard from "views/agencies/AgencyCard";

import Footer from "components/Footer.js";
import { Col, Row, Container, Button, Card, CardBody, DropdownItem, DropdownToggle, DropdownMenu, UncontrolledDropdown } from "reactstrap";


// sections for this page


function Agencies() {

    return (
        <div className="courses">
            <Navbar />
            <div className="search-form-wrapper"><Container><JobSearchForm className="in-jobs" /></Container></div>
            <Container>
                <Row>
                    <Col md={4}>
                        <AgencySearchFilter />
                    </Col>
                    <Col md={8}>
                        <AgencyCard />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default Agencies;
