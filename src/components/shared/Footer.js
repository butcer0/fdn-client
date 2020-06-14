import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className="ui vertical footer segment ">
            <div className="ui container">
                <div className="ui stackable divided equal height stackable grid">
                    <div className="three wide column">
                        <h4 className="ui header">About</h4>
                        <div className="ui link list">
                            <Link to="/" className="item">Sitemap</Link>
                            <Link to="/" className="item">Contact Us</Link>
                            <Link to="/" className="item">Current Projects</Link>
                            <Link to="/" className="item">Laboratory Articles</Link>
                        </div>
                    </div>
                    <div className="three wide column">
                        <h4 className="ui header">Services</h4>
                        <div className="ui link list">
                            <Link to="/" className="item">Register a Participant</Link>
                            <Link to="/" className="item">FDN FAQ</Link>
                            <Link to="/" className="item">Resources and Research</Link>
                            <Link to="/" className="item">How To Access</Link>
                        </div>
                    </div>
                    <div className="seven wide column">
                        <h5 className="ui header">Found Diagnosis Network - Erik Butcher
                            © {new Date().getFullYear()}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
