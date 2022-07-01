import "./App.css";
import Layout from "./components/Layout";
import CardList from "./components/CardList";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import AddLift from "./components/pages/AddLift";

function App() {
  return (
    <div>
    <Layout>
      <Routes>
        <Route exact path="/" element={<CardList />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/addLift" element={<AddLift />} />
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
