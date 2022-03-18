import './sidebar.css';
import { RssFeed } from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed className='sidebarIcon'/>
              <span className="sidebarListItemText">Feed</span>
            </li>
          </ul>
          <button className='sidebarButton'>Show More</button>
          <hr className='sidebarHr' />
          <ul className="sidebarFriendList">
            <li className='sidebarFriend'>
              <img src="/assets/persons/2.jpg" alt="apicture" className="sidebarFriendImg" />
              <span className="sidebarFriendName">James Bond</span>
            </li>
          </ul>
        </div>
    </div>
  )
}
