import * as React from "react";
import {Field, reduxForm} from 'redux-form';

import {REVIEWED_STATUS_NOT_REVIEWED} from "../../constants/participantsConsts";

class ParticipantForm extends React.Component {
    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderCheckboxInput = ({input, label, type, placeholder, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <div className="ui checkbox">
                    <input {...input} autoComplete="off" type={type} placeholder={placeholder}/>
                    <label>{label}</label>
                    {this.renderError(meta)}
                </div>
            </div>
        );
    };

    renderSelectInput = ({input, label, source, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <select
                    {...input}
                    multiple=" "
                    className="ui fluid search dropdown"
                    style={{'minHeight': '100px'}}>
                    {source.map(option =>
                        <option key={option} value={option}>{option}</option>)
                    };
                </select>
                {this.renderError(meta)}
            </div>
        );
    };

    renderInput = ({input, label, type, placeholder, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" type={type} placeholder={placeholder}/>
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = formValues => {
        formValues = {...formValues, reviewedStatus: REVIEWED_STATUS_NOT_REVIEWED}
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
                <Field
                    name="name"
                    component={this.renderInput}
                    label="Enter Name"
                    type="text"
                    placeholder="Participant Name"/>
                <Field
                    name="age"
                    component={this.renderInput}
                    label="Age"
                    type="number"
                    placeholder="Age"
                />
                <Field
                    name="hasSibling"
                    component={this.renderCheckboxInput}
                    label="Has siblings?"
                    type="checkbox"
                />
                <Field
                    name="envExposures"
                    component={this.renderSelectInput}
                    source={this.props.envExposuresList}
                    multiple={true}
                    type="select-multiple"
                    label="Environmental Exposures"
                    onBlur={() => null}
                />
                <Field
                    name="geneMutations"
                    component={this.renderSelectInput}
                    source={this.props.geneMutationsList}
                    multiple={true}
                    type="select-multiple"
                    label="Genetic Mutations"
                    onBlur={() => null}
                />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.name) {
        errors.title = 'You must enter a name';
    }

    if (!formValues.age) {
        errors.description = 'You must enter an age';
    }

    return errors;
};

export default reduxForm({
    form: 'participantsForm',
    validate
})(ParticipantForm);
