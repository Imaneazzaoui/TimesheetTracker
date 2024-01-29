import { useTheme, Box, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CropFreeIcon from '@mui/icons-material/CropFree';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import {AvatarComponent} from '../AvatarComponent/AvatarComponent';

const Navbar = () => {
  const theme = useTheme();

  return (
      <Box display="flex" justifyContent="space-between" sx={{ borderBottom: '1px solid #f3f3f9' }}>
        {/* SEARCH BAR */}
        <Box display="flex" alignItems="center" >
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Box
            display="flex"
            alignItems="center"
            bgcolor="#f3f3f9"
            borderRadius="3px"
            height="50px"
            width="500px"
            ml={2}
            px={1}
          >
            <SearchIcon />
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Rechercher un projet/consultant" />
          </Box>
        </Box>

        {/* ICONS */}
        <Box display="flex">
          <IconButton>
            <CropFreeIcon />
          </IconButton>
          <IconButton>
            {theme.palette.mode === 'light' ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton style={{ marginRight: '20px' }}>
            <NotificationsOutlinedIcon />
          </IconButton>
          <AvatarComponent />
        </Box>
      </Box>
  );
};

export default Navbar;




