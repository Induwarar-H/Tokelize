import {lazy} from 'react'

import * as constant from '../RouteConstant'
import {SHAREABLE_PROGRAM_PATH} from "../RouteConstant";
// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
    {
        path: constant.HOME_PATH,
        component: lazy(() => import('../../views/index'))
    }, {
        path: constant.ABOUT_US_PATH,
        component: lazy(() => import('../../views/aboutUs/aboutUs'))
    }
]

export {DefaultRoute, Routes}
