import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import './App.css';
import {ToastContainer} from "react-toastify";
import {RegisterPage} from "./pages/RegisterPage";

function App() {
  return (
    <Router>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage />}/>
        </Routes>
    </Router>
  );
}

export default App;
