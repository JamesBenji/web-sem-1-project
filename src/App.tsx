import { Outlet } from "react-router";
import { ReactLenis } from "lenis/react";

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
