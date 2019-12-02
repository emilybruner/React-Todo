import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            data: ''
        };
    }

    handleChanges = e => {
        this.setState({ newItem: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.newItem)
        this.setState({
            newItem: ''
        });
    };


    render() {
        console.log('rendering form');
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.newItem}
                    onChange={this.handleChanges}
                    type='text'
                    task="item"
                />
                <button className="submit-btn">Add</button>

            </form>
        )
    }
}

export default TodoForm;