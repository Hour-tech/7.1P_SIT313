import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/post" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUpBottom" element={<SignUp />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;