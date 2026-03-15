import { Outlet } from "react-router";
import { ReactLenis } from "lenis/react";

// React lenis is being used to provide smooth animations and transitions.

function App() {
  return (
    <main>
      <ReactLenis root>
        <Outlet />
      </ReactLenis>
    </main>
  );
}

export default App;
