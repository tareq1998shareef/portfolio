import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import DetailsPage from "./Pages/DetailsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="details/:id" element={<DetailsPage />} />
    </Routes>
  );
}
