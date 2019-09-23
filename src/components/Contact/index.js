import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }

    onChangeChecked = (status) => {
        this.setState({
            isChecked: status
        })
    }

    render() {
        var { isChecked } = this.state;
        console.log(isChecked)
        return (
            <div>
                Contact
                <br />
                <button type="button" className="btn btn-info" onClick={() => this.onChangeChecked(false)}>Cho phep</button>&nbsp;
                <button type="button" className="btn btn-default" onClick={() => this.onChangeChecked(true)}>Khong Cho phep</button>
                <Prompt
                    when={isChecked}
                    message={(location) => (`Ban chac chan muon di den ${location.pathname}`)}
                />
            </div>
        );
    }
}