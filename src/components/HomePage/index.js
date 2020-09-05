import React from "react";
import "./style.css";
import Header from "../Header";
import Tabs from "../Tabs";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          tabCategory: 1,
          tabName: "Upcoming"
        },
        {
          tabCategory: 2,
          tabName: "Live"
        },
        {
          tabCategory: 3,
          tabName: "Past"
        }
      ],
      selectedTabId: 1
    };
  }

  render() {
    let { tabs, selectedTabId } = this.state;
    return (
      <div className="container">
        <Header />
        <div className="content">
          <div className="page-title">Manage Campaigns</div>
          <Tabs
            selectTab={tabCategory => {
              this.setState({ selectedTabId: tabCategory });
            }}
            selectedTabId={selectedTabId}
            tabs={tabs}
          />
        </div>
      </div>
    );
  }
}
