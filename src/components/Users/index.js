import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";
import axios from 'axios';
import User from '../User';
import './style.scss';

export default class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            temp: [],
            isActive: false
        }
    }

    handleChange = (e) => {
        const value = e.target.value.toLowerCase();
        let newList = [];
        if (value !== "") {
            newList = this.state.temp.filter(user => {
                return user.name.toLowerCase().includes(value);
            })
        } else {
            newList = this.state.temp;
        }
        this.setState({
            users: newList
        })
    }

    listUser = () => {
        const { users } = this.state;
        var result = users.map((user, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{user.id}</th>
                    <td>
                        <NavLink to={`/user/${user.id}`}>
                            {user.name}
                        </NavLink>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                </tr>
            );
        });
        return result;
    }

    sortUp = () => {
        let { users } = this.state;
        let sortUp = users.sort((a, b) => {
            return b.id - a.id;
        })
        this.setState({
            users: sortUp
        })

    }

    sortDown = () => {
        let { users } = this.state;
        let sortDown = users.sort((a, b) => {
            return a.id - b.id;
        })
        this.setState({
            users: sortDown
        })
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data;
                this.setState({
                    users,
                    temp: users
                });
            })
    }
    render() {
        return (
            <React.Fragment>
                <div className="form-search">
                    <div className="col-md-6">
                        <h1>Users</h1>
                    </div>
                    <div className="col-md-6">
                        <input id="input-search" type="text" onChange={this.handleChange} placeholder="Search..." />
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">
                                <button onClick={this.sortUp}>
									<i className="fa fa-sort-desc" aria-hidden="true"/>
								</button>
                                <button onClick={this.sortDown}>
                                    <i className="fa fa-sort-asc" aria-hidden="true"/>
								</button>
                            </th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.listUser()}
                    </tbody>
                </table>
                <div className="row">
                    <Route path={`/user/:id`} component={User} />
                </div>
            </React.Fragment>
        );
    }
}
