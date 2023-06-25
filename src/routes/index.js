// Layout
import { HeaderOnly } from '~/Component/Layout';

import routesConfig from '~/config/routes';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
//publicRoutes -> không cần đăng nhập vẫn xem đc
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];
// privateRoutes -> Đăng nhập mới xem được
const privateRoutes = [];
export { privateRoutes, publicRoutes };
