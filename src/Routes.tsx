import { Routes, Route } from "react-router-dom";
import { Publications } from "./pages/Publications/index"
import { PublicationCard } from "./pages/PublicationCard/index";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Publications />} />
      <Route path="/issue/:number" element={<PublicationCard />} />
    </Routes>
  );
}
