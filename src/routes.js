import React from 'react';
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));
const NotFound = React.lazy(() => import('./components/NotFound'));
const Users = React.lazy(() => import('./components/Users'));
const User = React.lazy(() => import('./components/User'));
// const Login = React.lazy(() => import('./components/Login'));

const routes = [
    {
        path: '/',
        exact: true,
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        exact: false,
        name: 'About',
        component: About,
    },
    {
        path: '/contact',
        exact: false,
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/notfound',
        exact: false,
        name: 'Not Found',
        component: NotFound,
    },
    {
        path: '/users',
        exact: false,
        name: 'Users',
        component: Users,
    },
    {
        path: '/user/:id',
        exact: false,
        name: 'User',
        component: User,
    }
];

export default routes;