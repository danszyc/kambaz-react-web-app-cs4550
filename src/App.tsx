import Labs from "./labs";
import Kambaz from "./Kambaz";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <HashRouter>
      {/* <h4>Daniel Szyc, Section 2</h4>
      <a
        href="https://github.com/danszyc/kambaz-react-web-app-cs4550/tree/master"
        target="_blank"
      >
        GitHub repository
      </a> */}
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
