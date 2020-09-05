import React from "react";
import "./style.css";
import price_icon from "../../assets/images/Page 1/Dashboard/Row/Group 4/Price.png";
import stats_icon from "../../assets/images/Page 1/Dashboard/Row Copy 2-Row/Group 2/statistics-report.png";
import file_icon from "../../assets/images/Page 1/Dashboard/Row Copy 2-Row/Group 3/file.png";
import calendar_icon from "../../assets/images/Page 1/Dashboard/Row Copy 2-Row/Group/calendar.png";

export default function({ item, ...props }) {
  return (
    <div className="item-container">
      <div className="item-date">
        <div className="item-text">Oct 2019, 28</div>
        <div className="item-text-italics">5 days ago</div>
      </div>
      <div className="item-campaign">
        <img className="item-image" src={item.image_url} />
        <div className="item-campaign-text-container">
          <div className="item-text" style={{ lineHeight: "normal" }}>
            {item.name}
          </div>
          <div className="item-text-italics">US</div>
        </div>
      </div>
      <div className="item-view">
        <img src={price_icon} className="item-actions-image" />
        <div className="item-text pricing-text">View Pricing</div>
      </div>
      <div className="item-actions">
        <div className="item-view">
          <img src={file_icon} width="18px" height="24px" />
          <div className="item-text pricing-text">CSV</div>
        </div>
        <div className="item-view">
          <img src={stats_icon} className="item-actions-image" />
          <div className="item-text pricing-text">Report</div>
        </div>
        <div className="item-view">
          <img src={calendar_icon} className="item-actions-image" />
          <div className="item-text pricing-text">Schedule Again</div>
        </div>
      </div>
    </div>
  );
}
