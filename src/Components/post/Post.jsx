import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import joy from "../../Assests/joy.jpg"
import geeta from "../../Assests/geeta.jpg"
import lambo from "../../Assests/lambo.jpg"
import rise from "../../Assests/rise.jpg"
import { Avatar } from "@mui/material";


export default function Post() {
  return (
    <> 
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Avatar src={joy} alt="" />
            <span className="postUsername">Vishrut Borale</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hi Everyone</span>
          <img
            className="postImg"
            src={lambo}
            alt=""
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/heart.png?raw=true"
              alt=""
            />
            <img
              className="likeIcon"
              src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/like.png?raw=true"
              alt=""
            />
            <span className="postLikeCounter">97 people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">35 comments</span>
          </div>
        </div>
        </div>
        </div>



        {/*vrinda post */}
        <div className="post"> 
        <div className="postWrapper"> 
         <div className="postTop"> 
          <div className="postTopLeft">
            <Avatar src={geeta} alt="" />
            <span className="postUsername">Supraja Karampuri</span>
            <span className="postDate">1 day ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
         </div> 
        <div className="postCenter">
          <span className="postText">Hi myself Vrinda</span>
          <img
            className="postImg"
            src={rise}
            alt=""
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/heart.png?raw=true"
              alt=""
            />
            <img
              className="likeIcon"
              src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/like.png?raw=true"
              alt=""
            />
            <span className="postLikeCounter">105 people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">53 comments</span>
          </div>
        </div>
        </div>
        </div>





        



        </>  
    
  );
}
