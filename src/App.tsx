import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import AreaPage from "./pages/AreaPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicos/:slug" element={<ServicePage />} />
      <Route path="/areas/:slug" element={<AreaPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
