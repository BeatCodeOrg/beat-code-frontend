import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './popup.css'

class Popup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sign: false,
            login: false,

        }
    }

    onOpenModal = () => {
        this.setState({ sign: true });
    };

    onOpenModalLogin = () => {
        this.setState({ login: true });
    };

    onCloseModal = () => {
        this.setState({ sign: false });
    };

    onCloseModalclose = () => {
        this.setState({ login: false });
    };

    render() {
        const {login, sign} = this.state;
        return (
            <>
            {/* NAV BAR */}
            <div className = "navBar">
                <div className = "navBarLogo"><img src="src/assets/logo.png" alt="BEATCODE logo"/></div> 
                <h1>BeatCode</h1> 
            </div>

            <div className = "landing-body">
                {/* LEFT HEADER COMPONENT WITH TEXT */}
                <div className = "left-header">
                    <h2 style={{ textTransform: 'uppercase', fontSize: '4.1em', fontWeight: '700' }}>Crack code, <br></br> not friendships.</h2>
                    <p style= {{ fontSize: '1.2em', letterSpacing: '0.12em' }}>Test your programming skills with LeetCode style <br></br> questions in friendly competition with old or new friends.</p>
                    <div class = "nav buttons">
                        <button className="btn" id="signup" onClick={this.onOpenModal}>Sign Up</button>
                        <button className="btn" id="login" onClick={this.onOpenModalLogin}>Log In</button>
                    </div>
                    <button id="continue-guest" onClick={this.onOpenModal}>Continue as Guest</button>
                </div>
                {/* TEMPORARY IMAGE */}
                <div className= "images">
                <img id="ellipse1" src="src/assets/Ellipse1.png" alt="Ellipse1"/>
                <img id="ellipse2" src="src/assets/Ellipse2.png" alt="Ellipse2"/>
                <img id="mac" src="src/assets/mac.png" alt="MacBook"/>
                </div>
            </div>
            
            {/* SIGN UP MODAL */}
            <Modal open = {sign} onClose = {this.onCloseModal}>
                <div className = "modal-body">
                    <div className = "modal-display-text">
                        <div className="logo-container"><img src="src/assets/logo.png" alt="BEATCODE logo"/></div>
                        <h2 style={{ fontSize: '2em', fontWeight: '600'}}>Welcome</h2>
                        <h3 style={{ fontSize: '1em'}}>Please enter your details to sign up.</h3>
                    </div>
                    <form className="validate-form" novalidate="novalidate">
                            <div className="form-group">
                                <input className="form-control" type="text" name="username" id="username" placeholder="Username" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass-verify" className="form-control" placeholder="Verify Password" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <input className="btn" id="sign_up" type="button" value="Get Started" />
                    </form>
                </div>
            </Modal>

            {/* LOG IN MODAL */}
            <Modal open={login} onClose={this.onCloseModalclose}>
                <div className="modal-body">
                    <div className = "modal-display-text">
                        <div className="logo-container"><img src="src/assets/logo.png" alt="BEATCODE logo"/></div>
                        <h2 style={{ fontSize: '2em', fontWeight: '600'}}>Welcome back</h2>
                        <h3 style={{ fontSize: '1em' }}>Please enter your details to log in.</h3>
                    </div>
                    <form className="validate-form" novalidate="novalidate">
                        <div className="form-group">
                            <input className="form-control" type="text" name="username" placeholder="Username" required="" autocomplete="off" aria-required="true" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
                        </div>
                        <input className="btn" id="login_btn" type="button" value="Get Started" />
                    </form>
                </div>
            </Modal>
            </>
        )
    }

}

export default Popup