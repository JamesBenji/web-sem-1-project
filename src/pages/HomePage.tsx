import HeroSection from "../components/layout/HeroSection"
import { NavBar } from "../components/layout/NavBar"
import { HomeSectionTwo } from "../components/page-sections/home-page/HomeSectionTwo";

export const HomePage = () => {
    return (
    <main>
      <NavBar />
      <HeroSection />
      <HomeSectionTwo />
    </main>
  );
}

