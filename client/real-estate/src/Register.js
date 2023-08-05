import { useState } from "react";

const Register = () => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword] = useState("");
    const [ tel, setTel ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ page, setPage ] = useState(0);
    const [ role, setRole ] = useState("");
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ agencyName, setAgencyName ] = useState("");
    const [ country, setCountry ] = useState("");
    const [ city, setCity ] = useState("");
    const [street, setStreet ] = useState("");
    const [ agencyNumber, setAgencyNumber ] = useState("");
    const [ agencyDescription, setAgencyDescription ] = useState("");

    const handleButton = (e) => {
        e.preventDefault();
        if(page === 0)
            setPage(page + 1);
        console.log(role)
    }

    const handleArrow = () => {
        setPage(page - 1);
    }

    return ( 
        <div className='full-screen-container'>
            <div className='login-container'>
                { page > 0 && <div className="arrow-back" onClick={ handleArrow }>&#8592;</div> }
                <h1 className='login-title'>Sign up</h1>
                <form className='form'>
                    { page === 0 && <div className="page">
                        <div className="input-group">
                            <label>Email address</label>
                            <input type="email" 
                            name='email'
                            value={ email }
                            onChange={ (e) => setEmail(e.target.value) }/>
                            <span className='msg'>Valid email</span>
                        </div>
                        
                        <div className="input-group">
                            <label>Mobile number</label>
                            <input type="tel" 
                            name='tel'
                            value={ tel }
                            onChange={ (e) => setTel(e.target.value) }/>
                            <span className='msg'>Valid phone number</span>
                        </div>

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

                        <div className="toggle">
                            <input id="toggle-agency" type="radio" name="role" value="agency" onChange={(e) => { setRole(e.target.value) }} />
                            <label htmlFor="toggle-agency">Agency</label>
                            <p>or</p>
                            <input defaultChecked id="toggle-client" type="radio" name="role" value="client" onChange={(e) => { setRole(e.target.value) }} />
                            <label htmlFor="toggle-client">Client</label>
                        </div>
                    </div> }

                    { page === 1 && <div className="page">
                        <div className="profile-picture"></div>
                        { role === "client" && <div className="input-group">
                            <label>First name</label>
                            <input type="text" 
                            name='firstName'
                            value={ firstName }
                            onChange={ (e) => setFirstName(e.target.value) }/>
                            <span className='msg'></span>
                        </div> }
                        
                        { role === "client" && <div className="input-group">
                            <label>Last Name</label>
                            <input type="text" 
                            name='lastName'
                            value={ lastName }
                            onChange={ (e) => setLastName(e.target.value) }/>
                            <span className='msg'></span>
                        </div> }

                        { role === "agency" && <div className="input-group">
                            <label>Agency Name</label>
                            <input type="text" 
                            name='agencyName'
                            value={ agencyName }
                            onChange={ (e) => setAgencyName(e.target.value) }/>
                            <span className='msg'></span>
                        </div> }

                        { role === "agency" && <div className="input-group">
                            <label>Address</label>
                            <input type="text" 
                            name='country'
                            placeholder="Country..."
                            value={ country }
                            onChange={ (e) => setCountry(e.target.value) }/>
                            <input type="text" 
                            name='city'
                            placeholder="City..."
                            value={ city }
                            onChange={ (e) => setCity(e.target.value) }/>
                            <input type="text" 
                            name='street'
                            placeholder="Street address..."
                            value={ street }
                            onChange={ (e) => setStreet(e.target.value) }/>
                            <span className='msg'></span>
                        </div> }

                        { role === "agency" && <div className="input-group">
                            <label>Agency Number</label>
                            <input type="number"
                            name='agencyNumber'
                            value={ agencyNumber }
                            onChange={ (e) => setAgencyNumber(e.target.value) }/>
                            <span className='msg'></span>
                        </div> }

                        { role === "agency" && <div className="input-group">
                            <label>Agency Description</label>
                            <textarea name="agency-description"
                             cols="20" rows="5"
                             value={ agencyDescription }
                             onChange={ (e) => setAgencyDescription(e.target.value) }></textarea>
                            <span className='msg'></span>
                        </div> }

                        <div className="input-group">
                            <label>Upload profile picture</label>
                            <input type="file" />
                            <span className='msg'></span>
                        </div>

                    </div> }
                    <div className="progress-bar">
                        <div className={ page === 0 ? "highlighted-dot" : ""}>&#8226;</div>
                        <div className={ page === 1 ? "highlighted-dot" : ""}>&#8226;</div>
                    </div>
                    <button className='login-button' onClick={ (e) => handleButton(e) }>{ page === 0? 'Next' : 'Sign Up' }</button>
                    <div className='login-link'>Have an account? <a href='./'>Login</a></div>
                </form>
            </div>
        </div>
     );
}
 
export default Register;