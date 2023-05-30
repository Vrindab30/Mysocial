import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import seeta from "../../Assests/seeta.jpg"
import { Avatar } from "@mui/material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Mysocial &trade; </span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <SearchIcon className="searchIcon" />
            <input placeholder="Search for friend, post or video" className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarlink">Homepage</span>
            <span className="topbarlink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItems">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItems">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItems">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
            </div>
            <Avatar src={seeta} alt="" className="topbarImg"/>
          </div>
        </div>
    </div>
  )
}
