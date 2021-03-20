import React, { memo, useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, useLocation, withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "@/router";
import store from "@/store";

import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";

export default memo(function App() {
  function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return props.children;
  }
  const ScrollToTop = withRouter(_ScrollToTop);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <AppHeader />
          {renderRoutes(routes)}
          {/* <AppFooter /> */}
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
  );
});
