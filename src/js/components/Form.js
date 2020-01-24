import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions/addArticle';

function mapDispatchToProps(dispatch) {
    return { addArticle: article => dispatch(addArticle(article)) };
};

class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '' };
    }

    handelChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handelSubmit = (event) => {
        event.preventDefault();
        const { title } = this.state;
        this.props.addArticle({ title });
        this.setState({ title: '' });
    };

    render() {
        const { title } = this.state;

        return (<>
            <form onSubmit={this.handelSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={title} onChange={this.handelChange} />
                </div>
                <button type="submit">Save</button>
            </form>
        </>);
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;