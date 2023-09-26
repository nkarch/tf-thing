import { Routes, Route } from "react-router-dom";

import Posts from "./components/Posts";
import Profile from "./components/Profile";

function App() {
    return (
        <>
            <h1>Transformers Thing</h1>
            <Routes>
                <Route path='/' element={<Posts />} />
                <Route path='/user/:slug' element={<Profile />} />
            </Routes>
        </>
    );
}

export default App;
