import * as React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {fetchParticipants} from "../../actions";

class ParticipantList extends React.Component {
    componentDidMount() {
        this.props.fetchParticipants();
    }

    renderAdmin(participant) {
        return (
            <div className="right floated content">
                <Link to={`/participants/edit/${participant.id}`} className="ui button primary">
                    Edit
                </Link>
                <Link
                    to={`/participants/delete/${participant.id}`}
                    className="ui button negative">
                    Delete
                </Link>
            </div>
        );
    }

    renderList() {
        return this.props.participants.map(participant => {
            return (
                <div className="item" key={participant.id}>
                    {this.renderAdmin(participant)}
                    <i className="large middle aligned icon camera"/>
                    <div className="content">
                        <Link to={`/streams/${participant.id}`} className="header">
                            {participant.name}
                        </Link>
                        <div className="description">Age: {participant.age}</div>
                    </div>
                </div>
            );
        });
    }

    renderCreate() {
        return (
            <div style={{textAlign: 'right'}}>
                <Link to="/participants/new" className="ui button primary">
                    Register Participant
                </Link>
            </div>
        );
    }

    render() {
        return (
            <div>
                <h2>Participants</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        participants: Object.values(state.participants)
    };
};

export default connect(
    mapStateToProps,
    {fetchParticipants}
)(ParticipantList);
