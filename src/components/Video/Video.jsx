import React, { Component, Fragment } from "react";
import { Col, Container, Modal, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css";
import { Player, BigPlayButton } from "video-react";
class Video extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  modalClose = () => this.setState({ show: false });
  modalOpen = () => this.setState({ show: true });

  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">OUR VIDEOS</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12} className="videText">
              <p className="serviceDescription text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                eius? Deserunt asperiores expedita accusantium distinctio sequi.
                Incidunt consequuntur commodi voluptate repudiandae hic tempora?
                Animi corrupti pariatur optio, vitae ea libero.<br></br>
                <br></br>Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Deserunt, a nihil eligendi nobis similique delectus
                repellendus ex reprehenderit labore itaque exercitationem
                doloribus quibusdam quos soluta voluptatibus iusto ducimus
                aliquid temporibus!
                <br></br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam ratione ipsa, commodi, at sint quos velit neque error
                asperiores perspiciatis magni vel cum eius vitae? Nesciunt
                quaerat ea quibusdam deserunt?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam ratione ipsa, commodi, at sint quos velit neque error
                asperiores perspiciatis magni vel cum eius vitae? Nesciunt
                quaerat ea quibusdam deserunt?
              </p>
            </Col>

            <Col lg={6} md={6} sm={12} className="videoCard">
              <FontAwesomeIcon
                onClick={this.modalOpen}
                className="iconProject"
                icon={faVideoSlash}
              />
            </Col>
          </Row>
        </Container>

        <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
          <Modal.Body>
            <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
              <BigPlayButton position="center" />
            </Player>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.modalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Video;
