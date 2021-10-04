import { useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  const headerRef = useRef();

  return (
    <div className="App">
      <Header headerRef={headerRef} />
      <Navbar headerRef={headerRef} />
      <Home/>
      <Footer/>
    </div>
  )
}


export default App;