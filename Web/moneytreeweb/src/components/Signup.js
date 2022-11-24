import "../styles/Login.css";

function Signup() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div>
            <h1>Sign Up</h1>

            <div className="second-input">
              <input
                type="text"
                placeholder=" Enter Email"
                name="Email"
                className="name"
                required
              />
            </div>

            <div className="second-input">
              <input
                type="text"
                placeholder=" Enter Username"
                name="UserName"
                className="name"
                required
              />
            </div>
            <div className="second-input">
              <input
                type="text"
                placeholder=" Enter Firstname"
                name="FirstName"
                className="name"
                required
              />
            </div>
            <div className="second-input">
              <input
                type="text"
                placeholder=" Enter Lastname"
                name="LastName"
                className="name"
                required
              />
            </div>

            <div className="second-input">
              <input
                type="password"
                placeholder=" Enter Password"
                className="name"
                required
              />
            </div>

            <div className="login-button">
              <button>Sign Up</button>
            </div>

            {/* <p className="link">
              <a href="https://Google.com">Forgot password ?</a> Or <a href="https://Google.com">Sign Up</a>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
