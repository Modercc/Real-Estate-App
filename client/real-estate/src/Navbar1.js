import { useState } from 'react';

const Navbar1 = () => {
    const [ select1, setSelect1 ] = useState(false);

    return ( 
        <div className="header">
            <div className="dropdown">
                <button className={ select1 === true? "navbar-link" : "navbar-link active-link" } onClick={ () => setSelect1(!select1) }><div className={ select1? 'dropdown-arrow' : 'dropdown-arrow-active' }>&#10147;</div> Information</button>
                <div className="dropdown-menu information-grid">
                    <div>
                        <div className="dropdown-heading">Free Tutorials</div>
                        <div className="dropdown-links">
                            <a href="" className='navbar-link'>All</a>
                            <a href="" className='navbar-link'>Latest</a>
                            <a href="" className='navbar-link'>Popular</a>
                        </div>
                    </div>
                    <div>
                        <div className="dropdown-heading">Courses</div>
                        <div className="dropdown-links">
                            <a href="" className='navbar-link'>Javascript</a>
                            <a href="" className='navbar-link'>CSS</a>
                            <a href="" className='navbar-link'>React</a>
                        </div>
                    </div>
                    <div>
                        <div className="dropdown-heading">Blog</div>
                        <div className="dropdown-links">
                            <a href="" className='navbar-link'>All</a>
                            <a href="" className='navbar-link'>Latest</a>
                            <a href="" className='navbar-link'>Popular</a>
                        </div>
                    </div>
                    <div>
                        <div className="dropdown-heading">Other</div>
                        <div className="dropdown-links">
                            <a href="" className='navbar-link'>Twitter</a>
                            <a href="" className='navbar-link'>Newsletter</a>
                            <a href="" className='navbar-link'>Discord</a>
                        </div>
                    </div>
                </div>
            </div>
            <a href="" className="navbar-link">Pricing</a>
            <button className="navbar-link">Login</button>
        </div>
     );
}
 
export default Navbar1;