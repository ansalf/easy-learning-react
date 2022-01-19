import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


class ClientReview extends Component {
  render() {
    var settings = {
      autoPlaySpeed: 3000,
      autoPlay: true,
      dots: true,
      infinite: true,
      speed: 3000,
      arrows: false,
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Fragment>
        <Container fluid={true} className="siderBack text-center">
          <h1 className="reviewMainTitle p-3">TESTIMOIAL</h1>
          <div className="reviewbottom"></div>

          <Slider {...settings}>
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="circleImg"
                    src="https://image.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg"
                  />
                  <h2 className="reviewName">xxx</h2>
                  <p className="reviewDescription">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Beatae sequi voluptatum consequuntur. Nostrum, rerum.
                    Veniam, unde expedita cum inventore in reprehenderit harum
                    sed, illum labore error nulla eveniet saepe iste.
                  </p>
                </Col>
              </Row>
            </div>

            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="circleImg"
                    src="https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
                  />
                  <h2 className="reviewName">xxxx</h2>
                  <p className="reviewDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum eaque sapiente porro quis aliquid quo eos quidem
                    quaerat id magni placeat et optio voluptatibus impedit sint,
                    dolor dolore, molestias similique.
                  </p>
                </Col>
              </Row>
            </div>

            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="circleImg"
                    src="https://image.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg"
                  />
                  <h2 className="reviewName">xxx</h2>
                  <p className="reviewDescription">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum, eveniet aut repudiandae doloribus unde natus enim vitae
                    ducimus impedit quasi fugiat id sapiente! Quaerat minus
                    velit laudantium saepe aliquid. Nam.
                  </p>
                </Col>
              </Row>
            </div>
          </Slider>
        </Container>
      </Fragment>
    );
  }
}

export default ClientReview;
