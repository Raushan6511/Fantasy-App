import Home from '../../screens/home/Home';
import Portfolio from '../../screens/portfolio/Portfolio';
import Profile from '../../screens/profile/Profile';
import Wallet from '../../screens/wallet/Wallet';

import {APP_ICON_TYPES, TAB_ROUTES} from '../../common/constants';

const BottomTabScreens = [
  {
    index: 1,
    route: TAB_ROUTES.HOME,
    label: 'Home',
    icon: 'home-outline',
    type: APP_ICON_TYPES.IONICONS,
    component: Home,
  },
  {
    index: 2,
    route: TAB_ROUTES.PORTFOLIO,
    label: 'Portfolio',
    icon: 'contacts-outline',
    type: APP_ICON_TYPES.MATERIAL_COMMUNITY,
    component: Portfolio,
  },

  {
    index: 3,
    route: TAB_ROUTES.WALLET,
    label: 'Wallet',
    icon: 'wallet-outline',
    type: APP_ICON_TYPES.IONICONS,
    component: Wallet,
  },

  {
    index: 4,
    route: TAB_ROUTES.PROFILE,
    label: 'Profile',
    icon: 'user-o',
    type: APP_ICON_TYPES.FONT_AWESOME,
    component: Profile,
  },
];

export {BottomTabScreens};
