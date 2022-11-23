import '../styles/Login.css';


function Signup() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         {/* <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div> */}
         <div>
           <h1>Signup Page</h1>

           <div className="second-input">             
           <input type="text" placeholder="Email" name="Email" className="name" required/>             
           </div>

           <div className="second-input">             
             <input type="text" placeholder="Username" name="UserName" className="name" required/>
           </div>
           <div className="second-input">             
           <input type="text" placeholder="Firstname" name="FirstName" className="name" required/>             
           </div>
           <div className="second-input">
           <input type="text" placeholder="Lastname" name="LastName" className="name" required/>
           </div>

           <div className="second-input">
           <input type="password" placeholder="Password" className="name" required/>
           </div>           

          <div className="login-button">
          <button>Signup</button>
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