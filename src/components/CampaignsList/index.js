import React from "react";
import CampaignItem from "../CampaignItem";
import "./style.css";
import thumb1 from "../../assets/images/Page 1/Dashboard/Row/Thumb/Bitmap.png";
import thumb2 from "../../assets/images/Page 1/Dashboard/Row Copy 2-Row/Thumb/Bitmap.png";
import thumb3 from "../../assets/images/Page 1/Dashboard/Row Copy 3-Row/Thumb/Bitmap.png";
import thumb4 from "../../assets/images/Page 1/Dashboard/Row Copy 4-Row/Thumb/Bitmap.png";
import PricingModal from "../../components/Modals/PricingModal";
export default class CampaignsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Test Whatsapp",
          region: "US",
          createdOn: 1559807714999,
          price: {
            monthly: "$ 100",
            halfYearly: "$ 500",
            yearly: "$ 900"
          },
          csv: "Some CSV link for Whatsapp",
          report: "Some report link for Whatsapp",
          image_url: thumb1
        },
        {
          name: "Super Jewels Quest",
          region: "CA, FR",
          createdOn: 1559806715124,
          price: {
            monthly: "$ 200",
            halfYearly: "$ 1000",
            yearly: "$ 1800"
          },
          csv: "Some CSV link for Super Jewels Quest",
          report: "Some report link for Super Jewels Ques",
          image_url: thumb2
        },
        {
          name: "Mole Slayer",
          region: "FR",
          createdOn: 1559806711124,
          price: {
            monthly: "$ 300",
            halfYearly: "$ 1500",
            yearly: "$ 2700"
          },
          csv: "Some CSV link for Mole Slayer",
          report: "Some report link for Mole Slayer",
          image_url: thumb3
        },
        {
          name: "Mancala Mix",
          region: "JP",
          createdOn: 1559806680124,
          price: {
            monthly: "$ 400",
            halfYearly: "$ 2000",
            yearly: "$ 3600"
          },
          csv: "Some CSV link for Mancala Mix",
          report: "Some report link for Mancala Mix",
          image_url: thumb4
        }
      ],
      showModal: false,
      selectedItem: {}
    };
  }

  handleViewPricing(item) {
    this.setState({
      showModal: true,
      selectedItem: item
    });
  }

  handleClose() {
    this.setState({
      showModal: false,
      selectedItem: {}
    });
  }

  render() {
    let { data, showModal, selectedItem } = this.state;
    return (
      <div className="list-container">
        <div className="list-header">
          <div className="list-header-item">DATE</div>
          <div className="list-header-item">CAMPAIGN</div>
          <div className="list-header-item">VIEW</div>
          <div className="list-header-item">ACTIONS</div>
        </div>
        <div className="list-items-container">
          {data.map(it => {
            return (
              <CampaignItem
                handleViewPricing={this.handleViewPricing.bind(this)}
                item={it}
              />
            );
          })}
        </div>
        {showModal ? (
          <PricingModal
            onClose={this.handleClose.bind(this)}
            shown={showModal}
            width="400px"
            selectedItem={selectedItem}
          />
        ) : null}
      </div>
    );
  }
}
