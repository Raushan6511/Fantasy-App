import {Dimensions} from 'react-native';

export enum SCREEN {
  SCREEN_HEIGHT = Dimensions.get('window').height,
  SCREEN_WIDTH = Dimensions.get('window').width,
}

export enum BUTTON_PRESET {
  CUSTOM = 'custom',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  WITH_ICON = 'with_icon',
}

export enum APP_ICON_TYPES {
  ANT_DESIGN = 'AntDesign',
  ENTYPO = 'Entypo',
  EVIL_ICONS = 'EvilIcons',
  FEATHER = 'Feather',
  FONT_AWESOME = 'FontAwesome',
  FONT_AWESOME5 = 'FontAwesome5',
  FONT_AWESOME_5PRO = 'FontAwesome5Pro',
  FONT_AWESOME6 = 'FontAwesome6',
  FONT_AWESOME_6PRO = 'FontAwesome6Pro',
  FONTISTO = 'Fontisto',
  FOUNDATION = 'Foundation',
  IONICONS = 'Ionicons',
  MATERIAL_COMMUNITY = 'MaterialCommunityIcons',
  MATERIAL_ICONS = 'MaterialIcons',
  OCTICONS = 'Octicons',
  ZOCIAL = 'Zocial',
}

export enum CAROUSEL_PRESET {
  DEFAULT = 'DEFAULT',
  HORIZONTAL = 'HORIZONTAL',
  BANNER = 'BANNER',
}

export enum APP_HEADER_PRESET {
  HOME_HEADER = 'HOME_HEADER',
  SCREEN_HEADER = 'SCREEN_HEADER',
}

// Routes
export enum STACK_ROUTES {
  BOTTOM_HOME = 'BOTTOM_HOME',
  EVENT = 'EVENT',
}

export enum TAB_ROUTES {
  HOME = 'Home',
  PORTFOLIO = 'Portfolio',
  WALLET = 'Wallet',
  PROFILE = 'Profile',
}
