import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function NavBar() {
    

   


    return (
    <>
        
        <nav className="navbar">
          <div className="navbar-wrapper">
            <div className="navbrand">
            <Image 
                src="/vercel.svg"
                style={{ color: "#000", marginLeft: "30px" }}
                width={30}
                height={30} />
              
            </div>
  
            <ul className="navbar-left">
              <li>
                <a href="#">Menu</a>
                </li>
                <li>
                <a href="#">About us</a>
                </li>
                <li>
                <a href="#">Products</a>
                </li>
              </ul>
            <ul className="navbar-right">
              <li>
              <a href="#">
              <Image 
                src="/location.svg"
                style={{ color: "#000" }}
                width={30}
                height={30} />
              </a>
              </li>
              <li>Find our stores</li>
              <li><button className="btn btn-darkoutline">Sign in</button></li>
              <li><button className="btn btn-dark">Join now</button></li>
            </ul>

            {/* hamburger menu */}
            <button type="button" className="hamburger" id="menu-btn" onClick={()=>setShow(HTMLFrameSetElement(ope))}>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
                <span className="hamburger"></span>
            </button>
          </div>
        </nav>

    </>
    )
  }
  
