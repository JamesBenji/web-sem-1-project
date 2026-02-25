import HeroSection from "../components/layout/HeroSection"
import { NavBar } from "../components/layout/NavBar"
import { HomeSectionTwo } from "../components/page-sections/home-page/HomeSectionTwo";
import HomeTransition from "../components/page-sections/HomeTransition";

export const HomePage = () => {
    return (
    <main>
      <NavBar />
      <HeroSection />
      <HomeTransition />
      {/* Transitioning from bg-brand-50 to bg-brandBlue-50. There is a need for an intermediate fade component or a scroll animation with GSAP or Framer Motion to enhance the feel of the home page. Yes, this is a recipe website for weaning babies but we are a company that sells food recipes for weaning babies along with offering digital assistance tools for cooking, like interactive cooking where you get a timer, order of steps to make the dish, set a reminder, etc. therefore the transition from our hero section to this next section is pretty vital. */}
      <HomeSectionTwo />
    </main>
  );
}

