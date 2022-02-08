import {createWebHistory, createRouter} from "vue-router";

import Login from '../components/Login';
import Dashboard from '../components/Dashboard';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Login
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'dashboard',
        path: '/dashboard',
        component: Dashboard
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;