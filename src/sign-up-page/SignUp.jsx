import "react-responsive-modal/styles.css";
import "./SignUp.css";

function SignUp() {
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
            <div className="form-group">
                <div className="sign-up-msg"><strong>Sign Up to Get Started</strong></div>
                <input
                    className="form-control"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    required=""
                    autoComplete="off"
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
                    autoComplete="off"
                    aria-required="true"
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name="pass-verify"
                    className="form-control"
                    placeholder="Verify Password"
                    required=""
                    autoComplete="off"
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
        </div>
      </>
    );
  }

export default SignUp;

