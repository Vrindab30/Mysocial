import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbaWrapper">
        <div className="brithdayContainer">
          <img className="brithdayImg" src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/gift.png?raw=true" alt="" />
          <span className="brithdayText">
            <b>Pranav Kangale</b> and <b>3 other friends</b> have a brithday today
          </span>
        </div>
        <img className="rightbarAd" src="/profile/ad.png" alt="" />
        <h4 className="rightbarTitle">online friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarfriend">
              <div className="rightbarProfileImgContainer">
                  <img className="rightbarProfilImg" src="/src/Assests/roy.jpg" alt="" />
                  <span className="rightbarOnline"></span>
              </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
