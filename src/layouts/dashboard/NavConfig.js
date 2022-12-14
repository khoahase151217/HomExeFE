// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
    {
        title: 'My Personal Training',
        path: '/dashboard/app',
        icon: getIcon('eva:pie-chart-2-fill'),
    },
    {
        title: 'Personal Trainers List',
        path: '/dashboard/products',
        icon: getIcon('eva:shopping-bag-fill'),
    },
    {
        title: 'blog',
        path: '/dashboard/blog',
        icon: getIcon('eva:file-text-fill'),
    },
    {
        title: 'Personal Page',
        path: '/dashboard/personalPage',
        icon: getIcon('eva:lock-fill'),
    },

    {
        title: 'register',
        path: '/register',
        icon: getIcon('eva:person-add-fill'),
    },
];

export default navConfig;
