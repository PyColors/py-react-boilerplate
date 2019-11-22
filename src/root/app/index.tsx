import { CssBaseline } from "@material-ui/core";
import React from "react";

import Routes from "../routes";

const App = () => {
  return (
    <div>
      <CssBaseline />
      {/* <Layout> */}
      <Routes />
      {/* </Layout> */}
    </div>
  );
};

export default App;
