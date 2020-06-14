import * as React from "react";

import ParticipantForm from "./ParticipantForm";

class ParticipantEdit extends React.Component {
    render() {
        return (
            <div>
                <h3>Edit a Participant</h3>
                <ParticipantForm/>
            </div>
        )
    }
}

export default ParticipantEdit;
