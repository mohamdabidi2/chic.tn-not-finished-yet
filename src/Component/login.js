import React, { Component } from 'react';
import './login.css'
class Login extends Component {
    
    render() { 
        return (  
            <div className='login-qa'>
               
                <div className='inscrip'>
                <div className='login-div'>
                <i className="fas fa-times close"></i>
                <h1 className='Social-media-insc'>USER LOGIN</h1>
                <p className='sec-title'>Login with your social media account</p>
                <div className='social-media-icon'>
                <a className='Facebook' href='/facebook'><i class="fab fa-facebook-f"></i> Login with Facebook</a>
                <a className='twitter' href='/twitter'><i class="fab fa-twitter"></i> Login with Twitter</a>
                </div>
                    <div className='or-hr'>
                <hr className='vvvv'/>
                <p className='round-or'>OR </p><hr  className='vvvv'/></div>
                <form className='inqs'>
                <input type='email' placeholder='E-mail' className='inputs'/>
                <input type='password' placeholder='Password' className='inputs'/>
                <div className='remember'>
                    <div className='checkb'>
                        <input type='checkbox' id='remember' className='checkbox'/>
                        <label className='rememberme' for='remember'>Remember me</label>
                    </div>
                    <a href='/forget' className='password-forget'>Forget your password</a>
                </div>
                <input className='Login-button' type='submit' value='Sign in'/>
                </form>
                <p className='signup-sugg'>Not a member ?<a href='/Signup' className='vaa'> Sign up now!</a></p>
                 </div> 
</div>
            </div>
        );
    }
}
 
export default Login;