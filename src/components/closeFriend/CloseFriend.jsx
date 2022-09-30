import './closeFriend.css'

export default function CloseFriend({user}) {
  const PF = "http://localhost:3000/assets/";
  return (
    <li className='sidebarFriend'>
        <img src={PF+user.profilePicture} alt="apicture" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
    </li>            
  )
}
