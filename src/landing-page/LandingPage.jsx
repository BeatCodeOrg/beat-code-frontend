import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./popup.css";

function LandingPage() {
  const [showLoginModal, setLoginModal] = useState(false);

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

  const onLogin = () => {
    // form validation

    // make get request to backend to check if user exists

    // if successful, navigate to join page
    if (true) navigate("/join");
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
          <div class="nav buttons">
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
          <img id="ellipse1" src="src/assets/Ellipse1.png" alt="Ellipse1" />
          <img id="ellipse2" src="src/assets/Ellipse2.png" alt="Ellipse2" />
          <img id="mac" src="src/assets/mac.png" alt="MacBook" />
        </div>
      </div>

      {/* LOG IN MODAL */}
      <Modal open={showLoginModal} onClose={onCloseModalclose}>
        <div className="modal-body">
          <div className="modal-display-text">
            <div className="logo-container">
              <img src="src/assets/logo.png" alt="BEATCODE logo" />
            </div>
            <h2 style={{ fontSize: "2em", fontWeight: "600" }}>Welcome back</h2>
            <h3 style={{ fontSize: "1em" }}>
              Please enter your details to log in.
            </h3>
          </div>
          <form
            className="validate-form"
            novalidate="novalidate"
            onSubmit={onLogin}
          >
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="username"
                placeholder="Username"
                required=""
                autocomplete="off"
                aria-required="true"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="pass"
                className="form-control"
                placeholder="Password"
                required=""
                autocomplete="off"
                aria-required="true"
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
