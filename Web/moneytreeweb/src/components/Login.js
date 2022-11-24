import "../styles/Login.css";
import profile from "../images/LoginIcon.png";
import email from "../images/email.jpg";
import pass from "../images/pass.png";

function Login() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input
                type="text"
                placeholder="Enter username"
                className="name"
              />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input
                type="password"
                placeholder="Enter password"
                className="name"
              />
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>

            <p className="login-link">
              <a href="https://google.com">Forgot password?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
