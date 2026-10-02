import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Destination from "./pages/Destination";
import Planner from "./pages/Planner";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/explore"
        element={<Explore />}
      />

      <Route
        path="/destination/:id"
        element={<Destination />}
      />

      <Route
        path="/planner"
        element={<Planner />}
      />

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default App;