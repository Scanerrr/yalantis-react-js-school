import React from "react";
import { Row } from "antd";

import AppContainer from "./containers/AppContainer";
import HeaderContainer from "./containers/HeaderContainer";
import RouteContainer from "./containers/RouteContainer";

function App() {
  return (
    <AppContainer>
      <HeaderContainer />
      <div className="App" style={{ padding: "30px" }}>
        <Row gutter={[16, 16]}>
          <RouteContainer />
        </Row>
      </div>
    </AppContainer>
  );
}

export default App;
