import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2023 Your Company Name. All rights reserved.</p>
                <p></p>
                <p>Follow us on social media:</p>
                <div className="social-icons">

{/* 🔍 target="_blank"
This tells the browser to open the link in a new tab (or window).
Without it, the link would open in the same tab, replacing your current page. */}


{/* 🔐 rel="noopener noreferrer"
This is a security and performance improvement used alongside target="_blank".

🔒 noopener
Prevents the new tab from being able to access the window.opener object of your page.

This protects your site from potential malicious actions (like the new page trying to redirect your page or steal data).

🕵️ noreferrer
Prevents the browser from sending the HTTP Referer header to the new site.

This means the new site won’t know where the user came from (i.e., your site’s URL won’t be shared). */}


                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"></a>
                </div>
            </div>
        </footer>            
    );
};

export default Footer;