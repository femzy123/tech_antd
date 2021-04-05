import React, { Component } from 'react'
import { Button, Modal } from "antd";

export class Works extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>How it works</h2>
            <p>
              Perspiciatis vero similique, ut ducimus modi ipsam autem tempora
            </p>
          </div>
          <div className="contentHolder">
            <Button size="large" onClick={this.showModal}>
              <i className="fas fa-play"></i>
            </Button>
          </div>
          <Modal
            title="FULL POWER ASTA JUST CHANGED EVERYTHING!! Black Clover's Strongest Devil Twist, Asta's New Power"
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
            destroyOnClose={true}
          >
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/kD1HKk95sCA"
              title="FULL POWER ASTA JUST CHANGED EVERYTHING!! Black Clover's Strongest Devil Twist, Asta's New Power"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Works
