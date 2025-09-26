import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import './SignUp.css';
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await addDoc(collection(db, "signups"), {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        createdAt: serverTimestamp()
      });
      alert("Account created and data saved!");

      navigate("/login");
      
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  return (
    <div>
      <h2>Create a DEV@Deakin Account</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          Name
          <input classNam="nameInput" type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-row">
          Email
          <input className="emailInput" type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-row">
          Password
          <input className="passwordInput" type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-row">
          Confirm Password
          <input className="confirmPasswrodInput" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <button className="create-button" type="submit">Create</button>
      </form>
    </div>
  );
}

export default SignUp;
