import React from "react";
import Header from "../components/Header";
import Main from "./Main";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";
import history from "../history";
import { Router } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <Router history={history}>
            <Header />
            <Main />
            {/* <Footer /> */}
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
