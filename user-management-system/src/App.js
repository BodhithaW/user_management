import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import ProtectedRoute from './components/Common/ProtectedRoute';
import AuthProvider from './context/AuthContext';
import UserProvider from './context/UserContext';
import Register from "./components/Auth/Register";



function App() {
    return (
        <AuthProvider>
            <UserProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route
                            path="/dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </Router>
            </UserProvider>
        </AuthProvider>
    );
}

export default App;
