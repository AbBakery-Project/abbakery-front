import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Enroll from './pages/Enroll';
import SignIn from './pages/SignIn';
import { UserProvider } from './contexts/UserContext';
import { SignUpProvider } from './contexts/SignUpContext';
import Dashboard from './pages/Dashboard';
import useToken from './hooks/useToken';

export default function App() {
    return (
        <>
        <ToastContainer />
            <SignUpProvider>
                <UserProvider>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Enroll/>}/>
                            <Route path="/sign-in" element={<SignIn/>}/>
                            <Route path="/dashboard" element={
                                <ProtectedRouteGuard>
                                    <Dashboard/>
                                </ProtectedRouteGuard>
                            }
                            >   
                            </Route>
                        </Routes>
                    </Router>
                </UserProvider>
            </SignUpProvider>
        </>
    );
}

function ProtectedRouteGuard({ children }) {
    const token = useToken();
  
    if (!token) {
      return <Navigate to="/sign-in" />;
    }
  
    return <>{children}</>;
}