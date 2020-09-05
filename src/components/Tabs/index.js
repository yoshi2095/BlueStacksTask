import React from "react";
import CampaignsList from "../CampaignsList";
import "./style.css";
export default function Tabs({ tabs, selectedTabId, selectTab }) {
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
      <CampaignsList tab={tabs.find(tab => tab.tabCategory == selectedTabId)} />
    </div>
  );
}
