import React from "react";
import CampaignItem from "../CampaignItem";
import "./style.css";
import PricingModal from "../../components/Modals/PricingModal";
import moment from "moment";

window.moment = moment;

export default class CampaignsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedItem: {},
      data: []
    };
  }

  componentDidMount() {
    let { data, tab } = this.props;
    let fileredData = [];
    if (tab.tabCategory === 2) {
      let liveCampaigns = data.filter(camp => {
        return moment(camp.createdOn).isSame(moment(), "day");
      });
      fileredData = liveCampaigns;
    } else if (tab.tabCategory === 3) {
      let pastCampaigns = data.filter(camp => {
        return moment(camp.createdOn).isBefore(moment(), "day");
      });
      fileredData = pastCampaigns;
    } else {
      let upcomingCampaigns = data.filter(camp => {
        return moment(camp.createdOn).isAfter(moment());
      });
      fileredData = upcomingCampaigns;
    }
    this.setState({
      data: fileredData
    });
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
    let { handleReschedule } = this.props;
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
                handleReschedule={handleReschedule}
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
