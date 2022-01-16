import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { Techonology: "PHP", Projects: 100 },
        { Techonology: "MySqli", Projects: 90 },
        { Techonology: "Laravel", Projects: 95 },
        { Techonology: "React", Projects: 85 },
        { Techonology: "Opencart", Projects: 80 },
        { Techonology: "Vue Js", Projects: 70 },
        { Techonology: "Django", Projects: 60 },
        { Techonology: "JavaScript", Projects: 100 },
      ],
    };
  }

  render() {
    var blue = "#051b35";
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
          <div className="bottom"></div>
          <Row>
            <Col
              style={{ width: "100%", height: "300px" }}
              lg={6}
              md={12}
              sm={12}
            >
              <ResponsiveContainer>
                <BarChart width={100} height={300} data={this.state.data}>
                  <XAxis dataKey="Techonology" />
                  <Tooltip />
                  <Bar dataKey="Projects" fill={blue}></Bar>
                </BarChart>
              </ResponsiveContainer>
            </Col>

            <Col lg={6} md={12} sm={12}>
              <p className="text-justify serviceDescription">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                <br></br>
                <br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore velit, aut consequuntur aperiam voluptatem suscipit
                excepturi dignissimos quis iste nihil ipsa neque ipsum accusamus
                cum voluptates voluptatum provident quibusdam architecto!
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analysis;
