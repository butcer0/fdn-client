import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import ParticipantForm from "./ParticipantForm";
import {editParticipant, fetchParticipant} from "../../actions";
import {ENVIRONMENTAL_EXPOSURES_LIST, GENE_MUTATIONS_LIST} from "../../apis/participantsAPI";
import LoadingParticipant from "./LoadingParticipant";

class ParticipantEdit extends React.Component {
    componentDidMount() {
        this.props.fetchParticipant(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.editParticipant(this.props.match.params.id, formValues);
    }

    render() {
        if (!this.props.participant) {
            return <LoadingParticipant />
        }

        return (
            <div>
                <h3>Edit a Participant</h3>
                <ParticipantForm
                    envExposuresList={ENVIRONMENTAL_EXPOSURES_LIST}
                    geneMutationsList={GENE_MUTATIONS_LIST}
                    initialValues={_.pick(this.props.participant, 'name', 'age', 'hasSiblings', 'envExposures', 'geneMutations')}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { participant: state.participants[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps,
    { fetchParticipant, editParticipant }
)(ParticipantEdit);
