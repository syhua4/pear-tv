import React, { memo } from "react";

export default memo(function Tab(props) {
  const { label, tabClick, activeTab } = props;
  const activeClass = activeTab === label ? "active" : "";
  return (
    <div
      className={`tab-item ${activeClass}`}
      onClick={(e) => tabClick(label)}
    >
      {label}
    </div>
  );
});
