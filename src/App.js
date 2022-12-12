import './App.css';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import { Navigate, Route, Routes } from 'react-router';
import Home from './pages/Home';
import DashboardLayout from './Layout/dashboard';
import { useState } from 'react';
import HostelUpload from './pages/HostelUpload';
// import { Box, Container, createTheme, Stack, ThemeProvider } from '@mui/material';

function App() {
  // const [mode, setMode] = useState("light")
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: mode
  //   }
  // })

  return (
    // <ThemeProvider theme={darkTheme}></ThemeProvider>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/signIn" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/dashboard/" element={<DashboardLayout />}>
        <Route path="/dashboard/hostelUpload" element={<HostelUpload />} />
      </Route>
    </Routes>

  );
}

export default App;
