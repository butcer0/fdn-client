import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="header item">
                The Found Diagnosis Network
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    View Participants
                </Link>
                <Link to="/participants/new" className="item">
                    Register Participant
                </Link>
            </div>
        </div>
    );
};

export default Header;
