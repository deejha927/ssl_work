import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import { Product } from "./pages/product";
import ResponsiveAppBar from "./components/navbar/mainnavbar"

function App() {
    return (<>

        <BrowserRouter >
            <ResponsiveAppBar />
            <Routes >
                <Route path="/" element={< HomePage />} />
                <Route path="/product" element={< Product />} />
            </Routes>
        </BrowserRouter>
    </>
    );
}

export default App;