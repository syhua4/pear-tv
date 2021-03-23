import React, { memo, useState } from "react";
import Tab from "./tab";
import { TabsWrapper } from "./style";
export default memo(function Tabs(props) {
  const { children } = props;
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const tabClick = (label) => {
    setActiveTab(label);
  };
  return (
    <TabsWrapper>
      <div className="tabs">
        {children.map((child) => {
          const { label } = child.props;
          return (
            <Tab
              label={label}
              key={label}
              tabClick={tabClick}
              activeTab={activeTab}
            />
          );
        })}
      </div>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) {
            return undefined;
          }
          return child.props.children;
          // return child.props;
        })}
      </div>
    </TabsWrapper>
  );
});
