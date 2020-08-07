import React, { Component } from 'react'

export class add extends Component {
    state = {
        title: ''
    }

    change = (e) => this.setState({ title: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input onChange={this.change} value={this.state.title} type="text" name="title" placeholder="Add Todo..." style={{flex:'10',padding: '5px'}}/>
                <input type="submit" value="Submit" className="btn" style={{flex: '1'}}/>
            </form>
        )
    }
}

export default add
