import React, { useState } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";


function Login() {
    const navigation = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
  
    const handleLogin = async () => {
      setErrorMsg(""); 
      try {
        const q = query(
          collection(db, "signups"),
          where("email", "==", email),
          where("password", "==", password)
        );
  
        const snapshot = await getDocs(q);
  
        if (!snapshot.empty) {
          navigation("/SignUp");
        } else {
          alert("Invalid email or password");
        }
      } catch (err) {
        console.error("Login error:", err);
        setErrorMsg("Something went wrong. Please try again.");
      }
    };

    return (
        <div className="login-form">
            <div className="login-row">
                <Link to="/signUpBottom">
                <button>Sign Up</button>
                </Link>
            </div>
            <div className="login-row">
                Your Email
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="login-row">
                Your Password
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="login-row">
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}
export default Login;