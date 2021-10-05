import { useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Link1 from "./pages/Link1";
import Link2 from "./pages/Link2";
import Link3 from "./pages/Link3";

const App = () => {
  const headerRef = useRef();

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header headerRef={headerRef} />
        <Navbar headerRef={headerRef} />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Link1">
            <Link1/>
          </Route>
          <Route path="/Link2">
            <Link2/>
          </Route>
          <Route path="/Link3">
            <Link3/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}


export default App;