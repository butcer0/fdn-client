import * as React from "react";
import { connect } from 'react-redux';
import {fetchParticipant} from "../../actions";
import {Link} from "react-router-dom";

import {DEFAULT_PROFILE_IMAGE_URL} from "../../constants/participantsConsts";
import LoadingParticipant from "./LoadingParticipant";

class ParticipantShow extends React.Component {
    render() {
        if (!this.props.participant) {
            return <LoadingParticipant />
        }

        const { name, age, hasSiblings, envExposures, geneMutations, reviewedStatus } = this.props.participant;

        return (
            <div>
                <div className="ui vertical stripe segment">
                    <div className="ui middle aligned stackable grid container">
                        <div className="row">
                            <div className="eight wide column">
                                <h3 className="ui header">{name}</h3>
                                <p><strong>Age:</strong> {age}</p>
                                <p><strong>Has Siblings:</strong> {hasSiblings || 'false'}</p>
                                <p><strong>Environmental Exposures:</strong> {envExposures.join(',')}</p>
                                <p><strong>Gene Mutations:</strong> {geneMutations.join(',')}</p>
                                <p><strong>Reviewed Status:</strong> {reviewedStatus}</p>
                            </div>
                            <div className="six wide right floated column">
                                <img src={DEFAULT_PROFILE_IMAGE_URL}
                                     alt="participant profile"
                                     className="ui large bordered rounded image" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="center aligned column">
                                <Link to='/' className="ui large button">Return to Participant List</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { participant: state.participants[ownProps.match.params.id] };
};

export default connect(
    mapStateToProps,
    { fetchParticipant }
)(ParticipantShow);
