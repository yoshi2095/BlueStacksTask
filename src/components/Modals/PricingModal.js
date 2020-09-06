import React from "react";
import "./Modal.css";
export default class modal extends React.Component {
  constructor(props) {
    super(props);
    this.dialogRef = React.createRef();
  }
  componentDidMount() {
    if (this.props.shown) this.focusWithin();
  }
  focusWithin = () => {
    if (this.props.shown) {
      let input = this.dialogRef.current.querySelector("input, button");
      input && input.focus();
    }
  };
  render() {
    let { props } = this;
    let { onClose, selectedItem } = props;
    return (
      <div className="Modal-Container">
        <div className="Backdrop" onClick={() => {}}></div>
        <div
          ref={this.dialogRef}
          className="Content dialogCoustom"
          tabindex="100"
        >
          <div className="modal-content">
            <div className="modal-img-div">
              <img
                src={selectedItem.image_url}
                width="137px"
                height="137px"
                className="modal-img"
              />
              <div className="modal-img-text-div">
                <div className="modal-img-text-one">
                  {selectedItem.name.toUpperCase()}
                </div>
                <div className="modal-img-text-two">{selectedItem.region}</div>
              </div>
            </div>
            <div className="modal-pricing-container">
              <div className="modal-pricing-title">Pricing</div>
              <div className="modal-pricing-content">
                <div className="modal-pricing-text">
                  <div className="modal-pricing-text-style">
                    1 Week - 1 Month
                  </div>
                  <div className="modal-pricing-text-style">
                    {selectedItem.price.monthly}
                  </div>
                </div>
                <div className="modal-pricing-text">
                  <div className="modal-pricing-text-style">6 Months</div>
                  <div className="modal-pricing-text-style">
                    {selectedItem.price.halfYearly}
                  </div>
                </div>
                <div className="modal-pricing-text">
                  <div className="modal-pricing-text-style">1 Year</div>
                  <div className="modal-pricing-text-style">
                    {selectedItem.price.yearly}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-button">
            <div
              onClick={() => {
                onClose();
              }}
              className="button"
            >
              Close
            </div>
          </div>
        </div>
      </div>
    );
  }
}
