import BlockIcon from '@mui/icons-material/Block';
import SchoolIcon from '@mui/icons-material/School';
import ForestIcon from '@mui/icons-material/Forest';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Home } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import BrushIcon from '@mui/icons-material/Brush';
import { Category } from 'types/User.types';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import StarIcon from '@mui/icons-material/Star';
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

export const BASE_CATEGORIES: Category[] = [
  { name: 'Work', icon: <BusinessCenterIcon />, color: '#FF4500' },
  { name: 'Art', icon: <BrushIcon />, color: '#FF8D1A' },
  { name: 'Quit a bad habit', icon: <BlockIcon />, color: '#FF5733' },
  { name: 'Health', icon: <LocalHospitalIcon />, color: '#FF69B4' },
  { name: 'Task', icon: <AccessTimeIcon />, color: '#FFD700' },
  { name: 'Study', icon: <SchoolIcon />, color: '#ADFF2F' },
  { name: 'Nutrition', icon: <RestaurantIcon />, color: '#32CD32' },
  { name: 'Home', icon: <Home />, color: '#00CED1' },
  { name: 'Sport', icon: <DirectionsBikeIcon />, color: '#40E0D0' },
  { name: 'Social', icon: <ChatIcon />, color: '#1E90FF' },
  { name: 'Outdoor', icon: <ForestIcon />, color: '#4169E1' },
  { name: 'Finance', icon: <MonetizationOnIcon />, color: '#9370DB' },
  { name: 'Other', icon: <WidgetsIcon />, color: '#8A2BE2' },
];
export const CUSTOM_CATEGORIES = [
  { name: 'adb', icon: <AdbIcon /> },
  { name: 'star', icon: <StarIcon /> },
  { name: 'favorite', icon: <FavoriteIcon /> },
  { name: 'emoji', icon: <EmojiEmotionsIcon /> },
  { name: 'bathtub', icon: <BathtubIcon /> },
  { name: 'autoawesome', icon: <AutoAwesomeIcon /> },
  { name: 'batteryCharging', icon: <BatteryCharging90Icon /> },
  { name: 'autodelete', icon: <AutoDeleteIcon /> },
  { name: 'alarms', icon: <AccessAlarmsIcon /> },
  { name: 'allInclusive', icon: <AllInclusiveIcon /> },
  { name: 'accountBalance', icon: <AccountBalanceIcon /> },
  { name: 'individualSuite', icon: <AirlineSeatIndividualSuiteIcon /> },
  { name: 'airplaneTicket', icon: <AirplaneTicketIcon /> },
  { name: 'album', icon: <AlbumIcon /> },
];

export const CONCATED_CATEGORIES = [...BASE_CATEGORIES, ...CUSTOM_CATEGORIES];