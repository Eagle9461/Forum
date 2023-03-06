/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function DarkFooter() {
  const footerTags = [
    {
      title: 'JOBS',
      data: [
        {
          text: "Contact us",
          link: "#"
        }, {
          text: "Job search",
          link: "#"
        }, {
          text: "Recruiter directory",
          link: "#"
        }
      ]
    }, {
      title: 'RECRUITER',
      data: [
        {
          text: "Recruiter site",
          link: "#"
        }, {
          text: "Post a job",
          link: "#"
        }, {
          text: "CV Search",
          link: "#"
        }
      ]
    }, {
      title: 'COURSES',
      data: [
        {
          text: "Help",
          link: "#"
        }, {
          text: "Contact us",
          link: "#"
        }, {
          text: "Find a course",
          link: "#"
        }
      ]
    }, {
      title: 'MORE FROM ELON.UK',
      data: [
        {
          text: "About us",
          link: "#"
        }, {
          text: "Careers",
          link: "#"
        }, {
          text: "Press office",
          link: "#"
        }
      ]
    },
  ]
  return (
    <footer className="footer" style={{ background: "#081351", color: "white" }}>
      <Container>
        <div className="row">
          {
            footerTags.map((c, i) =>
              <div key={i} className="col-lg-3 col-md-6 mb-4">
                <h5 className="mb-3">{c.title}</h5>
                <ul className="list-unstyled mb-0">
                  {c.data.map((cu, ind) =>
                    <li key={ind} className="mb-1 d-block">
                      <a href={cu.link}>{cu.text}</a>
                    </li>
                  )}

                </ul>
              </div>
            )
          }

        </div>
        <div className="text-right">
          <h2> All in one solution</h2>
          <h2>for Security Sector</h2>

        </div>
        <Row>
          <Col xs={7}>
            <a href="#" title="Buy James Reed's best-selling book - Why You" rel="nofollow" target="_blank" className="image" data-gtm-category="jobseeker_footer" data-gtm="james_reed_book_click" data-gtm-value="why_you">
              <img style={{ width: "100px", height: "150px" }} alt="Buy James Reed's best-selling book - Why You" title="Buy James Reed's best-selling book - Why You" loading="lazy" src={require("assets/img/image 2.png")} className="b-loaded" />
            </a>
            <div style={{ paddingLeft: "3px", display: "inline-block" }}>
              <div>Nail your next interview</div>
              <div>Learn how to answer 101 of the most common questions now.</div>
              <div>Buy James read best selling books</div>
            </div>
          </Col>
          <Col xs={5} className="text-right">
            <a href="#">
              <img src={require('assets/img/pngwing 1.png')}></img>
            </a>
            <a href="#">
              <img src={require('assets/img/pngegg (12) 1.png')}></img>
            </a>
            <div>Manage preference, security, privacy</div>
            <div>COPYRIGHT © Reed.co.uk 2023</div>
          </Col>
        </Row>

      </Container>
    </footer>
  );
}

export default DarkFooter;
