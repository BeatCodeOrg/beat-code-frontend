import React, { useState } from 'react';
import { Client } from '@stomp/stompjs';
import "react-responsive-modal/styles.css";
import "./SignUp.css";

function SignUp() {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        passwordVerify: ''
    });

    useEffect(() => {
        const client = new Client({
            brokerURL: 'ws://localhost:8080/gs-guide-websocket'
        });

        client.onConnect = () => {
            console.log('Connected to WebSocket');
            client.subscribe('/topic/signupStatus', (message) => {
                setSignUpStatus(JSON.parse(message.body).status);
            });
        };

        client.onWebSocketError = (error) => {
            console.error('WebSocket Error:', error);
        };

        client.activate();
        setStompClient(client);

        return () => {
            client.deactivate();
        };
    }, []);

    const handleChange = (e) => {
        const updatedFormData = {
            ...formData,
            [e.target.name]: e.target.value
        };
        setFormData(updatedFormData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add validation for passwords match or other checks
        if (formData.password !== formData.passwordVerify) {
            alert('Passwords do not match!');
            return;
        }

        //send form data to backend
        if (stompClient && stompClient.connected) {
            stompClient.publish({
                destination: "/app/registerUser",
                body: JSON.stringify(formData)
            });
        } else {
            console.error("WebSocket is not connected.");
        }


        console.log('Form Data:', formData);
        // Further submission logic here...
    };


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
                <button className="sign-up-button">
                    Compile
                </button>
            </div>

            <div className="alt-signup-options">
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
            </div>
            </form>
        </div>
      </>
    );
  }

export default SignUp;

