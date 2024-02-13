import { useState } from 'react'
import Bgvideo from '../src/media/VN.mp4'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  /*const container = document.getElementById('container');
  const registerBtn = document.getElementById('register');
  const loginBtn = document.getElementById('login');
  
  registerBtn.addEventListener('click', () => {
      container.classList.add("active");
  });
  
  loginBtn.addEventListener('click', () => {
      container.classList.remove("active");
  });*/

  return (
  <body>
  
      <video autoPlay loop muted  className="back-video">
      <source src={Bgvideo} type='video/mp4'/>
      </video>
    
    <div className="container" id="container">

          <div className="form-container sign-up">
               <form>
                   <h1>Create Account</h1>
                   <span>or use your email for registeration</span>
                   <input type="text" placeholder="Name"/>
                   <input type="email" placeholder="Email"/>
                   <input type="password" placeholder="Password"/>
                   <button>Sign Up</button>
               </form>
          </div>

          <div className="form-container sign-in">
                <form>
                    <h1>Sign In</h1>
                    <span>or use your email password</span>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <a href="#">Forget Your Password?</a>
                    <button>Sign In</button>
                    <div>
                        <button>Google</button>
                    </div>
               </form>
          </div>

          <div className="toggle-container">
            <div className="toggle">

                <div className="toggle-panel toggle-left">
                    <h1>Welcome!</h1>
                    <p>Enter your personal details to use all</p>
                    <button className="hidden" id="login">Sign In</button>
                </div>

                <div className="toggle-panel toggle-right">
                    <h1>Hello, Friend!</h1>
                    <p>Register and joy me!</p>
                    <button className="hidden" id="register">Sign Up</button>
                </div>

            </div>
        </div>

    </div>
  </body>
  )
}

export default App;
