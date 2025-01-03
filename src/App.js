import "./App.css";
import Nav from "./Compunent/Nav/Nav";
import Welcome from "./Compunent/Welcome/Welcome";
import About from "./Compunent/About/About";
import Buy from "./Compunent/Buy/Buy";
import Collection from "./Compunent/Collection/Collection";
import Roadmap from "./Compunent/Roadmap/Roadmap";
import Community from "./Compunent/Community/Community";
import Footer from "./Compunent/Footer/Footer";
import { Wallet } from "./Compunent/context/wallet";

function App() {
  return (
      <div className="App" style={{ lineHeight: 1.6 }}>
        <Wallet>
          <Nav />
          <Welcome />
          <About />
          <Buy />
          <Collection />
          <Roadmap />
          <Community />
          <Footer />
        </Wallet>
      </div>

  ); 
}

export default App;
