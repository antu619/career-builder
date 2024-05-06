import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="p-10 bg-base-200 text-base-content">
  <div className='footer justify-between	 max-w-6xl mx-auto'>
  <aside>
    <NavLink to="/"><img src="src/assets/career-builder-icon.png" className='w-40' alt="logo" /></NavLink>
    <p>Career Builder Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav>
    <h6 className="footer-title">Support</h6> 
    <a className="link link-hover">Help Desk</a>
    <a className="link link-hover">Sales</a>
    <a className="link link-hover">Become a Partner</a>
    <a className="link link-hover">Developers</a>
  </nav>
  </div>
</footer>
        </div>
    );
};

export default Footer;