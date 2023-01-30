import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Enroll from './pages/Enroll';

export default function App() {
    return (
        <>
        
                <Router>
                    <Routes>
                        <Route path="/" element={<Enroll/>}/>
                        <Route path="/sign-in" />
                        <Route path="/dashboard" />
                    </Routes>
                </Router>
           
        </>
    );
}