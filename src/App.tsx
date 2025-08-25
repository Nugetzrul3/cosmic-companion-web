import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/auth/LoginPage";
import { ToastContainer } from "react-toastify";
import { RegisterPage } from "./pages/auth/RegisterPage";
import { NotFound } from "./pages/NotFound";
import { Main } from "./pages/app/Main.tsx";
import './App.css';

function App() {
  return (
    <Router>
        <ToastContainer
            autoClose={4000}
        />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
