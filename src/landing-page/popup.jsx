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
            {/* TEMPORARY BUTTONS */}
            <ul className="nav buttons">
                <li>
                    <button className="btn" id="signup" onClick={this.onOpenModal}>Sign Up</button>
                </li>
                <li>
                    <button className="btn" id="login" onClick={this.onOpenModalLogin}>Log In</button>
                </li>
            </ul>
            
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