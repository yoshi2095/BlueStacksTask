import React from "react";
import "./style.css";
import Header from "../Header";
import Tabs from "../Tabs";
import { response } from "../../utils/jsonData";

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
      selectedTabId: 1,
      data: JSON.parse(JSON.stringify(response.data))
    };
  }

  handleReschedule(time, item) {
    let { data } = this.state;
    let selectedCampaign = data.find(camp => {
      return camp.id === item.id;
    });
    selectedCampaign.createdOn = time;

    this.setState({
      data
    });
  }

  render() {
    let { tabs, selectedTabId, data } = this.state;
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
            data={data}
            handleReschedule={this.handleReschedule.bind(this)}
          />
        </div>
      </div>
    );
  }
}
