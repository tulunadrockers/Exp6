import React, { useState } from "react"; 
function Form() { 
const [formData, setFormData] = useState({ 
name: "", 
email: "", 
password: "" 
}); 
const [errors, setErrors] = useState({ 
name: "", 
email: "", 
password: "" 
}); 
const [submitted, setSubmitted] = useState(false); 
const [showPassword, setShowPassword] = useState(false); 
const handleInputChange = (e) => { 
const { name, value } = e.target; 
setFormData({...formData,[name]: value}); 
} 
const togglePassword = () => { 
setShowPassword(!showPassword); 
} 
function validateForm() { 
 
    let valid = true; 
    let errors = {}; 
 
    if (!formData.name) { 
      errors.name = "Name is required"; 
      valid = false; 
    } 
 
    const emailPattern =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
 
    if (!formData.email) { 
      errors.email = "Email is required"; 
      valid = false; 
    }  
    else if (!emailPattern.test(formData.email)) { 
      errors.email = "Invalid email format"; 
      valid = false; 
    } 
 
    if (!formData.password) { 
      errors.password = "Password is required"; 
      valid = false; 
    }  
    else if (formData.password.length < 6) { 
      errors.password = "Password must be at least 6 characters"; 
      valid = false; 
    } 
 
    setErrors(errors); 
    return valid; 
  } 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    if (validateForm()) { 
      setSubmitted(true); 
    } 
  } 
 
  return ( 
    <div> 
      <form onSubmit={handleSubmit}> 
        <div> 
          <label>Name:</label> 
          <input 
            type="text" 
            name="name" 
            onChange={handleInputChange} 
            style={{ borderColor: errors.name ? "red" : "black" }} 
          /> 
          <p>{errors.name}</p> 
        </div> 
 
        <div> 
          <label>Email:</label> 
          <input 
            type="email" 
            name="email" 
            onChange={handleInputChange} 
            style={{ borderColor: errors.email ? "red" : "black" }} 
          /> 
          <p>{errors.email}</p> 
        </div> 
 
        <div> 
          <label>Password:</label> 
          <input 
            type={showPassword ? "text" : "password"} 
            name="password" 
            onChange={handleInputChange} 
            style={{ borderColor: errors.password ? "red" : "black" }} 
          /> 
 
          <button type="button" className="button" onClick={togglePassword}> 
            {showPassword ? "Hide Password" : "Show Password"} 
          </button> 
 
          <p>{errors.password}</p> 
        </div> 
 
        <button type="submit" className="button">Submit</button> 
 
      </form> 
 
      
 {submitted && ( 
        <div> 
          <h3>Submitted Data:</h3> 
          <p>Name: {formData.name}</p> 
          <p>Email: {formData.email}</p> 
          <p>Password: {formData.password}</p> 
        </div> 
      )} 
 
    </div> 
  ); 
} 
export default Form;
