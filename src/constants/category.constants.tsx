import BlockIcon from '@mui/icons-material/Block';
import SchoolIcon from '@mui/icons-material/School';
import ForestIcon from '@mui/icons-material/Forest';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Home, Star } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import BrushIcon from '@mui/icons-material/Brush';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import BatteryCharging90Icon from '@mui/icons-material/BatteryCharging90';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import AlbumIcon from '@mui/icons-material/Album';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import AdbIcon from '@mui/icons-material/Adb';
type IconMap = {
  [key: string]: JSX.Element;
};
export const BASE_ICON_NAME = 'Highlights';
export const BASE_ICON_ID = 'base-14';
export const BASE_CATEGORIES = [
  {
    id: `base-1`,
    name: 'Work',
    icon: 'Work',
    color: '#FF4500',
    isBase: true,
  },
  {
    id: `base-2`,
    name: 'Art',
    icon: 'Art',
    color: '#FF8D1A',
    isBase: true,
  },
  {
    id: `base-3`,
    name: 'BadHabit',
    icon: 'BadHabit',
    color: '#FF5733',
    isBase: true,
  },
  {
    id: `base-4`,
    name: 'Health',
    icon: 'Health',
    color: '#FF69B4',
    isBase: true,
  },
  {
    id: `base-5`,
    name: 'Task',
    icon: 'Task',
    color: '#FFD700',
    isBase: true,
  },
  {
    id: `base-6`,
    name: 'Study',
    icon: 'Study',
    color: '#ADFF2F',
    isBase: true,
  },
  {
    id: `base-7`,
    name: 'Nutrition',
    icon: 'Nutrition',
    color: '#32CD32',
    isBase: true,
  },
  {
    id: `base-8`,
    name: 'Home',
    icon: 'Home',
    color: '#00CED1',
    isBase: true,
  },
  {
    id: `base-9`,
    name: 'Sport',
    icon: 'Sport',
    color: '#40E0D0',
    isBase: true,
  },
  {
    id: `base-10`,
    name: 'Social',
    icon: 'Social',
    color: '#1E90FF',
    isBase: true,
  },
  {
    id: `base-11`,
    name: 'Outdoor',
    icon: 'Outdoor',
    color: '#4169E1',
    isBase: true,
  },
  {
    id: `base-12`,
    name: 'Finance',
    icon: 'Finance',
    color: '#9370DB',
    isBase: true,
  },
  {
    id: `base-13`,
    name: 'Other',
    icon: 'Other',
    color: '#8A2BE2',
    isBase: true,
  },
  {
    id: `base-14`,
    name: 'Highlights',
    icon: 'Highlights',
    color: '#9A2BE2',
    isBase: true,
  },
];

export const CUSTOM_ICON_MAP: IconMap = {
  Adb: <AdbIcon />,
  Favorite: <FavoriteIcon />,
  Emoji: <EmojiEmotionsIcon />,
  Bathtub: <BathtubIcon />,
  Autoawesome: <AutoAwesomeIcon />,
  BatteryCharging: <BatteryCharging90Icon />,
  Autodelete: <AutoDeleteIcon />,
  Alarms: <AccessAlarmsIcon />,
  AllInclusive: <AllInclusiveIcon />,
  AccountBalance: <AccountBalanceIcon />,
  IndividualSuite: <AirlineSeatIndividualSuiteIcon />,
  AirplaneTicket: <AirplaneTicketIcon />,
  Album: <AlbumIcon />,
  Work: <BusinessCenterIcon />,
  Art: <BrushIcon />,
  BadHabit: <BlockIcon />,
  Health: <LocalHospitalIcon />,
  Task: <AccessTimeIcon />,
  Study: <SchoolIcon />,
  Nutrition: <RestaurantIcon />,
  Home: <Home />,
  Sport: <DirectionsBikeIcon />,
  Social: <ChatIcon />,
  Outdoor: <ForestIcon />,
  Finance: <MonetizationOnIcon />,
  Other: <WidgetsIcon />,
  Highlights: <Star />,
  AutoDelete: <AutoDeleteIcon />,
};

export const CUSTOM_CATEGORIES = [
  { name: 'Adb', icon: 'Adb', iconPlaceholder: <AdbIcon /> },
  { name: 'Favorite', icon: 'Favorite', iconPlaceholder: <FavoriteIcon /> },
  { name: 'Emoji', icon: 'Emoji', iconPlaceholder: <EmojiEmotionsIcon /> },
  { name: 'Bathtub', icon: 'Bathtub', iconPlaceholder: <BathtubIcon /> },
  {
    name: 'Autoawesome',
    icon: 'Autoawesome',
    iconPlaceholder: <AutoAwesomeIcon />,
  },
  {
    name: 'BatteryCharging',
    icon: 'BatteryCharging',
    iconPlaceholder: <BatteryCharging90Icon />,
  },
  {
    name: 'Autodelete',
    icon: 'Autodelete',
    iconPlaceholder: <AutoDeleteIcon />,
  },
  { name: 'Alarms', icon: 'Alarms', iconPlaceholder: <AccessAlarmsIcon /> },
  {
    name: 'AllInclusive',
    icon: 'AllInclusive',
    iconPlaceholder: <AllInclusiveIcon />,
  },
  {
    name: 'AccountBalance',
    icon: 'AccountBalance',
    iconPlaceholder: <AccountBalanceIcon />,
  },
  {
    name: 'IndividualSuite',
    icon: 'IndividualSuite',
    iconPlaceholder: <AirlineSeatIndividualSuiteIcon />,
  },
  {
    name: 'AirplaneTicket',
    icon: 'AirplaneTicket',
    iconPlaceholder: <AirplaneTicketIcon />,
  },
  { name: 'Album', icon: 'Album', iconPlaceholder: <AlbumIcon /> },
];

export const CONCATED_CATEGORIES = [...BASE_CATEGORIES, ...CUSTOM_CATEGORIES];
