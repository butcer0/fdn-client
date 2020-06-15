import * as React from "react";
import {connect} from 'react-redux';

import {createParticipant} from "../../actions";
import ParticipantForm from "./ParticipantForm";
import {ENVIRONMENTAL_EXPOSURES_LIST, GENE_MUTATIONS_LIST} from "../../apis/participantsAPI";

class ParticipantCreate extends React.Component {
    onSubmit = formValues => {
        this.props.createParticipant(formValues);
    };

    render() {
        return (
            <div>
                <h3>Register a Participant</h3>
                <ParticipantForm
                    envExposuresList={ENVIRONMENTAL_EXPOSURES_LIST}
                    geneMutationsList={GENE_MUTATIONS_LIST}
                    onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default connect(
    null,
    {createParticipant}
)(ParticipantCreate);
