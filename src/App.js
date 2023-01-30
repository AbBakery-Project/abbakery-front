import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export default function App() {
    return (
        <>
            <ToastContainer>
                <Router>
                    <Routes>
                        <Route path="/" />
                        <Route path="/sign-in" />
                        <Route path="/dashboard" />
                    </Routes>
                </Router>
                
            </ToastContainer>
        </>
    )
}