import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content mt-8">
      <nav>
        <h6 className="footer-title">Services</h6> 
        <Link to = '' className="link link-hover">Branding     </Link>
        <Link to = '' className="link link-hover">Design       </Link>
        <Link to = '' className="link link-hover">Marketing    </Link>
        <Link to = '' className="link link-hover">Advertisement</Link>
      </nav> 
      <nav>
        <h6 className="footer-title">Company</h6> 
        <Link to = '' className="link link-hover">About us    </Link>
        <Link to = '' className="link link-hover">Contact     </Link>
        <Link to = '' className="link link-hover">Jobs        </Link>
        <Link to = '' className="link link-hover">Press kit   </Link>
      </nav> 
      <nav>
        <h6 className="footer-title">Legal</h6> 
        <Link to = '' className="link link-hover">Terms of use  </Link>
        <Link to = '' className="link link-hover">Privacy policy</Link>
        <Link to = '' className="link link-hover">Cookie policy </Link>
      </nav>
    </footer>
  )
}

export default Footer