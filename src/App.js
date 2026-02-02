import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sommaire from "./Sommaire";
import UnderConstruction from "./UnderConstruction";
import ReactGuide from "./ReactGuide";
import HtmlViewer from "./HtmlViewer";  // ← AJOUTER

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Sommaire />} />
                <Route path="/GuideReact" element={<ReactGuide />} />
                <Route path="/html/:filename" element={<HtmlViewer />} />  {/* ← AJOUTER */}
                <Route path="/under-construction" element={<UnderConstruction />} />
            </Routes>
        </Router>
    );
}
export default App;