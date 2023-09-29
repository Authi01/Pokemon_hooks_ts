import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListingPage from "./Pages/ProductListingPage";
import ProductDescriptionPage from "./Pages/ProductDescriptionPage";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProductListingPage />} />
          <Route
            path="/description/:name"
            element={<ProductDescriptionPage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
