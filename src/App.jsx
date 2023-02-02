import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";

function App() {
    return (
        <div className="font-vuighe">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
