import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';


export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className='birthdayImg' src="assets/gift.jpg" alt="" />
          <span className="birthdayText">
            <b>Don frank</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img src="assets/ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}
