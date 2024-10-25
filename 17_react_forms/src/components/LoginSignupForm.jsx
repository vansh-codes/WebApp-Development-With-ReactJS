import { useState } from "react";
import '../loginSignup.css'

const LoginSignupForm = () => {
    const [activeTab, setActiveTab] = useState("login");

    const renderForm = () => {
        if (activeTab === "login") {
            return <LoginForm />;
        } else {
            return <SignupForm />;
        }
    };

    return (
        <div className="form-tabs">
            <div className="tabs">
                <button
                    className={activeTab === "login" ? "active" : ""}
                    onClick={() => setActiveTab("login")}
                >
                    Login
                </button>
                <button
                    className={activeTab === "signup" ? "active" : ""}
                    onClick={() => setActiveTab("signup")}
                >
                    Signup
                </button>
            </div>
            <div className="form-container">{renderForm()}</div>
        </div>
    );
};

const LoginForm = () => {
    return (
        <form className="login-form">
            <h2>Login</h2>
            <div className="form-group">
                <input type="email" placeholder="Email Address" />
            </div>
            <div className="form-group">
                <input type="password" placeholder="Password" />
            </div>
            <div className="form-group">
                <p className="forgot-password"><a href="">Forgot Password?</a></p>
            </div>
            <button type="submit">Login</button>
            <p className="form-note">Don&apos;t have an account? <a href="">Signup</a></p>
        </form>
    );
};

const SignupForm = () => {
    return (
        <form className="signup-form">
            <h2>Signup</h2>
            <div className="form-group">
                <input type="email" placeholder="Email Address" />
            </div>
            <div className="form-group">
                <input type="password" placeholder="Password" />
            </div>
            <div className="form-group">
                <input type="password" placeholder="Confirm password" />
            </div>
            <button type="submit">Signup</button>
        </form>
    );
};

export default LoginSignupForm;