import "./feed.css"
import Share from "../share/Share.jsx"
import Post from "../post/Post.jsx"

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        
        

      </div>
    </div>
  )
}
