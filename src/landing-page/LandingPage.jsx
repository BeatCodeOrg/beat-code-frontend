import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useUser } from "../use-user-context/UserContext";
import "./popup.css";

function LandingPage() {
  const [showLoginModal, setLoginModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();

  const navigate = useNavigate();

  const onOpenModalLogin = () => {
    setLoginModal(true);
  };

  const guestLogin = () => {
    navigate("/join");
  };

  const onCloseModalclose = () => {
    setLoginModal(false);
  };

  const onLogin = async (e) => {
    e.preventDefault();

    // Form validation and other logic...

    const encUsername = encodeURIComponent(username);
    const encPassword = encodeURIComponent(password);

    const url = `http://localhost:8080/users/login/${encUsername}/${encPassword}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      if (response.ok) {
        const data = await response.json();

        // Adjust based on your backend response
        // Store userId in state or context
        // For example, you can have a global context to store user information
        // Update the following line based on your context setup
        // userContext.setUser({ userId, username, ...otherUserData });

        if (data.message == "unauthorized") {
          alert("Incorrect username or password");
        } else {
          setUser(data.username, data.user_id);
          navigate("/join");
        }
      } else {
        // Handle login failure, show error message, etc.
        console.error("HTTP error:", response.status);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      {/* NAV BAR */}
      <div className="navBar">
        <div className="navBarLogo">
          <img src="/assets/logo.png" alt="BEATCODE logo" />
        </div>
        <h1>BeatCode</h1>
      </div>

      <div className="landing-body">
        {/* LEFT HEADER COMPONENT WITH TEXT */}
        <div className="left-header">
          <h2
            style={{
              textTransform: "uppercase",
              fontSize: "4.1em",
              fontWeight: "700",
            }}
          >
            Crack code, <br></br> not friendships.
          </h2>
          <p style={{ fontSize: "1.2em", letterSpacing: "0.12em" }}>
            Test your programming skills with LeetCode style questions in
            friendly competition with old or new friends.
          </p>
          <div className="nav buttons">
            <button
              className="btn"
              id="signup"
              onClick={() => navigate("/sign-up")}
            >
              Sign Up
            </button>
            <button className="btn" id="login" onClick={onOpenModalLogin}>
              Log In
            </button>
          </div>
          <button id="continue-guest" onClick={guestLogin}>
            Continue as Guest
          </button>
        </div>
        {/* TEMPORARY IMAGE */}
        <div className="images">
          <img id="ellipse1" src="/assets/Ellipse1.png" alt="Ellipse1" />
          <img id="ellipse2" src="/assets/Ellipse2.png" alt="Ellipse2" />
          <img id="mac" src="/assets/mac.png" alt="MacBook" />
        </div>
      </div>

      {/* LOG IN MODAL */}
      <Modal open={showLoginModal} onClose={onCloseModalclose}>
        <div className="modal-body">
          <div className="modal-display-text">
            <div className="logo-container">
              <img src="/assets/logo.png" alt="BEATCODE logo" />
            </div>
            <h2 style={{ fontSize: "2em", fontWeight: "600" }}>Welcome back</h2>
            <h3 style={{ fontSize: "1em" }}>
              Please enter your details to log in.
            </h3>
          </div>
          <form
            className="validate-form"
            noValidate="novalidate"
            onSubmit={onLogin}
          >
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required=""
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="pass"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required=""
              />
            </div>
            <button
              className="btn hover:text-amber-700"
              id="login_btn"
              type="submit"
            >
              Log In
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default LandingPage;
