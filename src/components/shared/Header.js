import React from 'react';
import { Link } from 'react-router-dom';

import {ERIK_LINKEDIN_PROFILE_URL} from "../../constants/participantsConsts";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="header item">
                Found Diagnosis Network
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    View Participants
                </Link>
                <a href={ERIK_LINKEDIN_PROFILE_URL} className="item">
                    LinkedIn
                </a>
            </div>
        </div>
    );
};

export default Header;
