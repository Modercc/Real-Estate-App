import { useState } from 'react';

const Login = () => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    return ( 
        <div className='full-screen-container'>
            <div className='login-container'>
                <h1 className='login-title'>Welcome</h1>
                <form className='form'>
                    <div className="input-group">
                        <label>Username</label>
                        <input type="text" 
                        name='username'
                        value={ username }
                        onChange={ (e) => setUsername(e.target.value) }/>
                        <span className='msg'>Valid username</span>
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" 
                        name='password'
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }/>
                        <span className='msg'>Incorrect password</span>
                    </div>

                    <button className='login-button'>Login</button>
                    <div className='login-link'><a href='./'>Forgotten your password?</a></div>
                    <div className='login-link'>Don't have an account? <a href='./'>Sign up</a></div>
                </form>
            </div>
        </div>
     );
}
 
export default Login;