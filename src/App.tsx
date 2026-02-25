import { Outlet } from "react-router";
import { ReactLenis, useLenis } from "lenis/react";

function App() {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });
  return (
    <main>
      <ReactLenis root />
      <Outlet />
    </main>
  );
}

export default App;
