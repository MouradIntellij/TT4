import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sommaire from "./Sommaire";
import UnderConstruction from "./UnderConstruction";
import ReactGuide from "./ReactGuide";
// ... tes autres imports

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Sommaire />} />
                <Route path="/GuideReact" element={<ReactGuide />} />
                <Route path="/under-construction" element={<UnderConstruction />} />
                {/* tes autres routes comme /chapitre1, /GuideReact, etc. */}
            </Routes>
        </Router>
    );
}

export default App;




