import './App.css';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import { Navigate, Route, Routes } from 'react-router';
import Home from './pages/Home';
import DashboardLayout from './Layout/dashboard';
import { useState } from 'react';
import HostelUpload from './pages/HostelUpload';
import HostelLists from './pages/HostelList/index';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import ChatModule from './pages/ChatModule';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/signIn" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/dashboard/" element={<DashboardLayout />}>
      <Route path="/dashboard/dash" element={<Dashboard />}></Route>
        <Route path="/dashboard/hostelUpload" element={<HostelUpload />} />
        <Route path="/dashboard/inbox" element={<ChatModule />} />
        <Route path="/dashboard/hostelLists" element={<HostelLists />} />
        <Route path="/dashboard/profile" element={<Profile />} />
      </Route>
    </Routes>

  );
}

export default App;
