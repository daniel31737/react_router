import React, { Component } from 'react';
import axios from 'axios';

export default class User extends Component {
    state = {
        infoUser: ' '
    }
    componentDidMount() {
        const { match } = this.props;
        axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
            .then(res => {
                const infoUser = res.data;
                this.setState({ infoUser})
            })
    }
    render() {
        const { infoUser } = this.state;
        return (
            <div>
                <div><span>ID: {infoUser.id}</span></div>
                <div><span>Name: {infoUser.name}</span></div>
                <div><span>Username: {infoUser.username}</span></div>
                <div><span>Email: {infoUser.email}</span></div>
                <div><span>Phone: {infoUser.phone}</span></div>
            </div>
        );
    }
}
