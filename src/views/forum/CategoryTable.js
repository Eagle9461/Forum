import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBIcon } from 'mdb-react-ui-kit';
import { Col, Row, Badge, Container } from "reactstrap";
import { BrowserRouter, Router, Switch, Redirect } from "react-router-dom";
import Forum from 'views/pages/Forum';
import CategoriesCard from 'components/CategoryCard';

export default function App(rows) {
  return (
    <CategoriesCard/>
  );
}
