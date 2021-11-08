import IRoutes from '../interfaces/route';
import BlogPage from '../pages/blog';
import EditPage from '../pages/edit';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';

const authRoutes: IRoutes[] = [
    {
        path: 'login',
        auth: false,
        component: LoginPage,
        name: 'Login'
    },
    {
        path: 'Register',
        auth: false,
        component: LoginPage,
        name: 'Register'
    }
];

const blogRoutes: IRoutes[] = [
    {
        path: '/edit',
        auth: true,
        component: EditPage,
        name: 'Edit'
    },
    {
        path: '/edit/:blogID',
        auth: true,
        component: EditPage,
        name: 'Edit'
    },
    {
        path: '/blog/:blogID',
        auth: false,
        component: BlogPage,
        name: 'Blog'
    }
];

const mainRoutes: IRoutes[] = [
    {
        path: '/',
        auth: true,
        component: HomePage,
        name: 'Home'
    }
];

const routes: IRoutes[] = [...authRoutes, ...blogRoutes, ...mainRoutes];

export default routes;
