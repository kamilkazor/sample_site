import { useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";



import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import HallOfDogs from "./pages/HallOfDogs";
import Empty1 from "./pages/Empty1";
import Empty2 from "./pages/Empty2";

const App = () => {
  const headerRef = useRef();

  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Header headerRef={headerRef} />
          <Navbar headerRef={headerRef} />
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/hall-of-dogs">
              <HallOfDogs/>
            </Route>
            <Route path="/empty-1">
              <Empty1/>
            </Route>
            <Route path="/empty-2">
              <Empty2/>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
    </Provider>
  )
}


export default App;