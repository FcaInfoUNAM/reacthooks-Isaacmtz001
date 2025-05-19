import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductGrid from "./ProductGrid";
import ProductDescription from "./ProductDescription";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductGrid />} />
        <Route path="/product" element={<ProductDescription />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
