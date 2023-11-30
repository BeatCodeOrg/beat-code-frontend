import React, { useState, useEffect } from 'react';
import { Client } from '@stomp/stompjs';
import "react-responsive-modal/styles.css";
import "./SignUp.css";
import { useNavigate } from 'react-router-dom';


function SignUp() {
    const [stompClient, setStompClient] = useState(null);
    const [signUpStatus, setSignUpStatus] = useState(null);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        passwordVerify: ''
    });

   const navigate = useNavigate()

    const handleChange = (e) => {
        const updatedFormData = {
            ...formData,
            [e.target.name]: e.target.value
        };
        setFormData(updatedFormData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Add validation for passwords match or other checks
        if (formData.password !== formData.passwordVerify) {
          alert('Passwords do not match!');
          return;
        }
        try {
          const response = await fetch("http://localhost:8080/users/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            console.log(response)
            const {code,message} =  await response.json();
            if(code == 200){
              console.log('用户账号创建成功！')
              navigate('/');
            }
           
            else{
              alert('Account already exists');
            }
            // Redirect or perform other actions after successful user creation
          } 
           else {
           
              console.error("User creation failed RepeatAccount");
            }
        } catch (error) {
          // Handle any network or other errors that may occur during the request
          console.error("Error during user creation:", error);
        }
      };
      

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Add validation for passwords match or other checks
    //     if (formData.password !== formData.passwordVerify) {
    //         alert('Passwords do not match!');
    //         return;
    //     }

    //     //send form data to backend
    //     if (stompClient && stompClient.connected) {
    //         stompClient.publish({
    //             destination: "/app/registerUser",
    //             body: JSON.stringify(formData)
    //         });
    //     } else {
    //         console.error("WebSocket is not connected.");
    //     }


    //     console.log('Form Data:', formData);
    //     // Further submission logic here...
    // };


    return (
      <>
        {/* NAV BAR */}
        <div className="navBar">
          <div className="navBarLogo">
            <img src="src/assets/logo.png" alt="BEATCODE logo" />
          </div>
          <h1>BeatCode</h1>
        </div>
        
        <div className="title-h2"><strong>READY, SET, CODE</strong></div>
        {/* SIGN UP MODAL */}
        <div className="sign-up-container">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="sign-up-msg"><strong>Sign Up to Get Started</strong></div>
                <input
                    className="form-control"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    id="username"
                    placeholder="Username"
                    required=""
                    aria-required="true"
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Password"
                    required=""
                    aria-required="true"
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name="passwordVerify"
                    className="form-control"
                    placeholder="Verify Password"

                    value={formData.passwordVerify}
                    onChange={handleChange}
                    required=""
                    aria-required="true"
                />
            </div>
            <div className="sign-up-btn-container">
                <button type="submit" className="sign-up-button">
                    Compile
                </button>
            </div>

            {/* <div className="alt-signup-options">
                <div className="alt-signup-divider">
                    <span className="alt-signup-divider-line"></span>
                    <span className="alt-signup-divider-text">OR SIGN UP WITH</span>
                    <span className="alt-signup-divider-line"></span>
                </div>
                <div className="alt-signup-buttons">
                    <button className="alt-signup-button google">
                    <img src="src/assets/google_logo.png" alt="Google" /> Google
                    </button>
                    <button className="alt-signup-button github">
                    <img src="src/assets/github_logo.png" alt="GitHub" /> GitHub
                    </button>
                </div>
            </div> */}
            </form>
        </div>
      </>
    );
  }

export default SignUp;