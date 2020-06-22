import "App.css";
import Routes from "constants/Routes";
import AnimeAllInfo from "containers/AnimePage";
import Error404 from "containers/Errors/404";
import Footer from "containers/Footer/Footer";
import Header from "containers/Header";
import Home from "containers/Home";
import { Authentication } from "contexts/Cookies";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Authentication>
        <main className="flex flex-col justify-between h-screen bg-darkblue-500">
          <Header />
          <Switch>
            {/* <Route exact path={Routes.LOGIN} component={LogIn} /> */}
            {/* <Route exact path={Routes.SIGNIN} component={SignIn} /> */}
            <Route exact path={Routes.HOME_PAGE} component={Home} />
            <Route exact path={Routes.ANIME_PAGE} component={AnimeAllInfo} />
            {/* <Route exact path={Routes.ANIME} component={AnimeDetail} /> */}
            {/* <Route exact path={Routes.TOPMANGA} component={TopManga} /> */}
            {/* <Route exact path={Routes.MANGA} component={MangaDetail} /> */}
            <Route path={Routes.ERROR_PAGE} component={Error404} />
          </Switch>
          <Footer />
        </main>
      </Authentication>
    </Router>
  );
};

export default App;
