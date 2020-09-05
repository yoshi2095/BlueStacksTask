import React from "react";
import CampaignItem from "../CampaignItem";
import "./style.css";
import thumb1 from "../../assets/images/Page 1/Dashboard/Row/Thumb/Bitmap.png";
import thumb2 from "../../assets/images/Page 1/Dashboard/Row Copy 2-Row/Thumb/Bitmap.png";
import thumb3 from "../../assets/images/Page 1/Dashboard/Row Copy 3-Row/Thumb/Bitmap.png";
import thumb4 from "../../assets/images/Page 1/Dashboard/Row Copy 4-Row/Thumb/Bitmap.png";

export default class CampaignsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Test Whatsapp",
          region: "US",
          createdOn: 1559807714999,
          price: "Price info of Test Whatsapp",
          csv: "Some CSV link for Whatsapp",
          report: "Some report link for Whatsapp",
          image_url: thumb1
        },
        {
          name: "Super Jewels Quest",
          region: "CA, FR",
          createdOn: 1559806715124,
          price: "Price info of Super Jewels Quest",
          csv: "Some CSV link for Super Jewels Quest",
          report: "Some report link for Super Jewels Ques",
          image_url: thumb2
        },
        {
          name: "Mole Slayer",
          region: "FR",
          createdOn: 1559806711124,
          price: "Price info of Mole Slayer",
          csv: "Some CSV link for Mole Slayer",
          report: "Some report link for Mole Slayer",
          image_url: thumb3
        },
        {
          name: "Mancala Mix",
          region: "JP",
          createdOn: 1559806680124,
          price: "Price info of Mancala Mix",
          csv: "Some CSV link for Mancala Mix",
          report: "Some report link for Mancala Mix",
          image_url: thumb4
        }
      ]
    };
  }

  render() {
    let { data } = this.state;
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
            return <CampaignItem item={it} />;
          })}
        </div>
      </div>
    );
  }
}
