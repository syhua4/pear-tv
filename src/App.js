import React, { memo } from "react";
import logo from "@/assets/image/logo.png";
export default memo(function App() {
  return (
    <div>
      <div>header</div>
      <img src={logo} alt="" />
      <div>content</div>
      <div>footer</div>
    </div>
  );
});
