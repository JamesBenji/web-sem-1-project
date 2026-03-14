import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { AboutPage } from "./pages/AboutPage.tsx";
import { ContactPage } from "./pages/ContactPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import RecipePage from "./pages/RecipePage.tsx";
import { NavBar } from "./components/layout/NavBar.tsx";
import { RecipeDetail } from "./pages/RecipeDetail.tsx";
import { Footer } from "./components/interactives/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipePage />} />
        <Route path="/recipe-detail" element={<RecipeDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
