import { Avatar, IconButton, Typography } from "@material-tailwind/react";
import avatarImage from "../../assets/image.png";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
 
export function AvatarComponent() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = "/"; 
  };
  const addUser = () => {
    localStorage.removeItem('token');
    window.location.href = "/RegisterFm"; 
  };
  return (
    <Menu>
      <MenuHandler>
        <div className="flex flex-col gap-6 p-4" style={{ background: "#f3f3f9", cursor: "pointer" }}>
          <div className="flex items-center gap-4">
            <MenuList>
              <MenuItem onClick={addUser}> 
              <AccountBoxOutlinedIcon color="action"/>
              &nbsp;
              Profile
              </MenuItem>
              <MenuItem> 
              <SettingsOutlinedIcon color="action"/>
              &nbsp;
              Settings
              </MenuItem>
              <MenuItem onClick={handleLogout}> 
              <LogoutOutlinedIcon color="action"/>
              &nbsp;
              Logout
              </MenuItem>
            </MenuList>
            <Avatar src={avatarImage} alt="avatar" />
            <div>
              <Typography variant="h6">Omar Hilale</Typography>
              <Typography variant="small" className="font-normal" style={{ color: '#878a99' }}>
                UX/UI Designer
              </Typography>
            </div>
          </div>
        </div>
      </MenuHandler>
    </Menu>
  );
}

