import * as React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {deleteParticipant, fetchParticipant} from "../../actions";
import Modal from "../shared/Modal";
import history from '../../history';

class ParticipantDelete extends React.Component {
    componentDidMount() {
        this.props.fetchParticipant(this.props.match.params.id);
    }

    renderActions() {
        const { id } = this.props.match.params;

        return (
            <React.Fragment>
                <button
                    onClick={() => this.props.deleteParticipant(id)}
                    className="ui button negative"
                >
                    Delete
                </button>
                <Link to="/" className="ui button">
                    Cancel
                </Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.participant) {
            return 'Are you sure you want to delete this participant?';
        }

        return `Are you sure you want to delete the participant with title: ${
            this.props.participant.name
        }`;
    }

    render() {
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { participant: state.participants[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps,
    { fetchParticipant, deleteParticipant }
)(ParticipantDelete);
