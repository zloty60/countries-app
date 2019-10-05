import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";
import theme from "./theme/theme";
import LayoutState from "./contexts/LayoutContex";
import CountriesState from "./contexts/CountriesContext";
import Main from "./pages/Main";
import About from "./pages/About";
import Country from "./pages/Country";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/navbar/Navbar";
import SavedCountries from "./pages/SavedCountires";
import { Box } from "rebass";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LayoutState>
          <CountriesState>
            <Router>
              <Navbar />
              {/* odstęp między navbarem a reszta strony 55px */}
              <Box sx={{ position: "relative", top: "55px" }}>
                <Switch>
                  <Route exact path="/" component={Main} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/country/:name" component={Country} />
                  <Route
                    exact
                    path="/saved-countries"
                    component={SavedCountries}
                  />
                  <Route component={NoMatch} />
                </Switch>
              </Box>
            </Router>
          </CountriesState>
        </LayoutState>
      </ThemeProvider>
    </>
  );
}

export default App;
