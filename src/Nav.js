import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {

    const [show,handleShow] = useState(false);
    /**Scroll-listener, so when scrolled down from banner the logo and avatar sticks to the top with background color of black */
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100 ) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll",null); /**removes eventlistener once refresh */
        };
    }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>{/** if show is true add nav_black class will display black background immediatly*/}
        <img 
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/Dfnefr.png" 
            alt="Netflix Logo"  
        />
        <img 
            className="nav_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
            alt="User Logo" 
        />
    </div>
  )
}

export default Nav;