import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './style.scss';

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'About',
        to: '/about',
        exact: false
    },
    {
        name: 'Contact',
        to: '/contact',
        exact: false
    },
    {
        name: 'Users',
        to: '/users',
        exact: false
    },
    // {
    //     name: 'Dang Nhap',
    //     to: '/login',
    //     exact: false
    // }
];

//Custom Link
const MenuLink = ({
    label,
    to,
    activeOnlyWhenExact
}) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => { //match la doi tuong xac dinh su trung khop cua URL
                var active = match ? 'active abc' : '';

                return (
                    <li className={`my-li ${active}`}>
                        <Link to={to} className="my-link">{label}</Link>
                    </li>
                );
            }}
        />
    );
}

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar-default">
                <div className="col-md-12 nav-left">
                    <ul>
                        {this.showMenus(menus)}
                    </ul>
                </div>
            </nav>
        );
    }

    showMenus = (menus) => {
        var result = null;

        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }
        return result;
    }
}
