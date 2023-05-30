import "./sidebar.css"
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PeopleIcon from '@mui/icons-material/People';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import SchoolIcon from '@mui/icons-material/School';
import seeta from "../../Assests/seeta.jpg"
import roy from "../../Assests/roy.jpg"
import joy from "../../Assests/joy.jpg"
import lambo from "../../Assests/lambo.jpg"
import geeta from "../../Assests/geeta.jpg"
import gt from "../../Assests/gt.jpg"
import { Avatar } from "@mui/material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">

          <li className="sidebarListItem">
<RssFeedIcon className="sidebarIcon"/>
<span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
<ChatIcon className="sidebarIcon"/>
<span className="sidebarListItemText">Chat</span>
          </li>

          <li className="sidebarListItem">
<PlayCircleIcon className="sidebarIcon"/>
<span className="sidebarListItemText">Video</span>
          </li>

          <li className="sidebarListItem">
<PeopleIcon className="sidebarIcon"/>
<span className="sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarListItem">
<BookmarksIcon className="sidebarIcon"/>
<span className="sidebarListItemText">Bookmarks</span>
          </li>

          <li className="sidebarListItem">
<HelpOutlineIcon className="sidebarIcon"/>
<span className="sidebarListItemText">Question</span>
          </li>

          <li className="sidebarListItem">
<WorkIcon className="sidebarIcon"/>
<span className="sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarListItem">
<EventRepeatIcon className="sidebarIcon"/>
<span className="sidebarListItemText">Events</span>
          </li>

          <li className="sidebarListItem">
<SchoolIcon className="sidebarIcon"/>
<span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <Avatar className="sidebarFriendImg" src={seeta} alt="" />
            <span className="sidebarFriendName">Vrinda</span>
            </li>

            <li className="sidebarFriend">
            <Avatar className="sidebarFriendImg" src={joy} alt="" />
            <span className="sidebarFriendName">Vishrut</span>
            </li>

            <li className="sidebarFriend">
            <Avatar className="sidebarFriendImg" src={roy} alt="" />
            <span className="sidebarFriendName">Pranav</span>
            </li>

            <li className="sidebarFriend">
            <Avatar className="sidebarFriendImg" src={lambo} alt="" />
            <span className="sidebarFriendName">Riya</span>
            </li>

            <li className="sidebarFriend">
            <Avatar className="sidebarFriendImg" src={gt} alt="" />
            <span className="sidebarFriendName">Riya</span>
            </li>

            <li className="sidebarFriend">
            <Avatar className="sidebarFriendImg" src={geeta} alt="" />
            <span className="sidebarFriendName">Supraja</span>
            </li>
        </ul>
    </div>
    </div>
      
  )

}
