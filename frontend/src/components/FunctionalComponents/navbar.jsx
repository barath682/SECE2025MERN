import { Link } from "react-router-dom"
import { useState } from "react"
import "../../css/Navbar.css"
import '../../css/signup.css'
const Navbar = () => {
  var [dropdown,showdropdown]=useState(false)
    return(
        <header>
          <nav>
            <ul>
                <li><Link to='/home' classname="link">Home</Link></li>
                <li><Link to='/about' classname="link">About</Link></li>
                <div>
                  <span onMouseOver={()=>showdropdown(true)} onMouseLeave={()=>showdropdown(false)}>hoooks</span>
                  {dropdown && (
                    <ul>
                      <li><Link to='/contact' className="link">useState</Link></li>
                      <li><Link to='/gallery' className="link">gallery</Link></li>
                    </ul>
                  )}
                  <ul>
                  {/* <li><Link to='/contact' className="link">home</Link></li> */}
                  {/* <li><Link to='/gallery' className="link">about</Link></li> */}
                  </ul>
                </div>
                <li><Link to='/gallery' classname="link">Gallery</Link></li>
                <li><Link to='/use-effect' classname="link">use-effect</Link></li>
                <li><Link to='/contact' classname="link">Contact</Link></li>
                <li><Link to='/' classname="link">Signup</Link></li>
            </ul>
          </nav>
        </header>
    )
}

export default Navbar