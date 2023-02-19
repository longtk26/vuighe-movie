import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home } from "./pages";

function App() {
    return (
        <div className="font-sans relative z-0">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
