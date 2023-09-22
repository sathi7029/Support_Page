import { useState } from "react";
import "./App.css";
import Header from "./component/Haader/Header";
import Middle from "./component/Middle/Middle";
import Footer from "./component/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <div className="nav">
        <Header></Header>
      </div>

      <div className="mid">
        <Middle></Middle>
      </div>

      <div className="foot">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
