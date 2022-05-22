import "./categories.styles.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/SignIn/SignIn";

const Shop = () => {
  return <div>I am the shop page!</div>;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />

          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
