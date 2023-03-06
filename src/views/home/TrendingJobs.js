/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container, Button } from "reactstrap";
// core components

function TrendingJobs() {
  const TrendingJobsList = [
    {
      text: "Retail	Security",
      to: "jobs"
    }, {
      text: "Static	Security",
      to: "jobs"
    }, {
      text: "Hospital	Security",
      to: "jobs"
    }, {
      text: "University	Security",
      to: "jobs"
    }, {
      text: "Dog Walker",
      to: "jobs"
    }
  ]

  return (
    <Container className="text-center trending-jobs">
      <div className="title-main">Trending Jobs</div>
      <div className="trending-jobs-btn-group">
        {
          TrendingJobsList.map((c, i) => <Button key={i} tag={Link} to={c.to} outline>{c.text}</Button>)
        }
      </div>
    </Container>
  );
}

export default TrendingJobs;
