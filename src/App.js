import React from "react";
import Header from "./Header";
import "./App.css";
import "./firebase/config";
import "./pages/Signup";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { UserProvider } from "./firebase/UserProvider";
import Profile from "./pages/Profile";
import ProfileRedirect from "./router/ProfileRedirect";
import PrivateRoute from "./router/PrivateRoute";
import AdminRoute from "./router/AdminRoute";
import Users from "./pages/Users";

function App() {    
  return (
    <UserProvider>
      <Router>
        <Header></Header>
        <div className="app">
          <div className="ui grid container">
            <Routes>
              <ProfileRedirect path="/signup" element={<Signup />} />
              <PrivateRoute path="/profile/:id" element={<Profile />} />
              <ProfileRedirect path="/login" element={<Login />} />
              <AdminRoute path="/users" element={<Users />} />
              <Route path="/">
                <Navigate to="/login" />
              </Route>
            </Routes>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
