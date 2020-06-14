import * as React from "react";

import ParticipantForm from "./ParticipantForm";

class ParticipantCreate extends React.Component {
    render() {
        return (
            <div>
                <h3>Register a Participant</h3>
                <ParticipantForm/>
            </div>
        )
    }
}

export default ParticipantCreate;
