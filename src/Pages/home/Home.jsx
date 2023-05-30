
import Topbar from "../../Components/topbar/Topbar.jsx";
import Sidebar from "../../Components/sidebar/Sidebar.jsx";
import Feed from "../../Components/feed/Feed.jsx";
import Rightbar from "../../Components/rightbar/Rightbar.jsx";
import "./home.css"

export default function Home() {
  return (
    <>
    <Topbar />
    <div className="homeContainer">
    <Sidebar />
    <Feed />
    <Rightbar />
    </div>
    
    </>
  )
}
