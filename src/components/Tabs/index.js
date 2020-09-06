import React from "react";
import CampaignsList from "../CampaignsList";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
export default function Tabs({
  handleReschedule,
  tabs,
  data,
  selectedTabId,
  selectTab
}) {
  return (
    <div className="TabContainer">
      <div className="TabsHeader">
        {tabs.map(tab => (
          <div
            className={`Tab ${
              tab.tabCategory == selectedTabId ? "Selected" : ""
            }`}
            onClick={() => selectTab(tab.tabCategory)}
            key={tab.tabCategory}
          >
            {tab.tabName} Campaigns
          </div>
        ))}
      </div>
      <CampaignsList
        key={uuidv4()}
        data={data}
        tab={tabs.find(tab => tab.tabCategory == selectedTabId)}
        handleReschedule={handleReschedule}
      />
    </div>
  );
}
