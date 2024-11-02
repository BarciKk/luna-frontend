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

//!IMPORTANT
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
