import React from 'react';

const LoadingParticipant = () => {
    return (
        <div className="ui icon message">
            <i className="notched circle loading icon" />
            <div className="content">
                <div className="header">
                    Just one second
                </div>
                <p>We're fetching that participant for you.</p>
            </div>
        </div>
    );
}
export default LoadingParticipant;
