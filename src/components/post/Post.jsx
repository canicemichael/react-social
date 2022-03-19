import './post.css';
import {MoreVert} from "@material-ui/icons"

export default function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/persons/1.jpg" alt="" className="postProfileImg" />
                    <span className="postUsername">Long Ygsf</span>
                    <span className="postDate">3 days ago</span>
                </div>
                <div className="postTopRight">
                  <MoreVert />
                </div>
            </div>
            <div className="postCenter">
              <span className="postText">Hey, this is my first post</span>
              <img className='postImg' src="/assets/post/1.jpg" alt="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img className='likeIcon' src="assets/like.png" alt="" />
                <img className='likeIcon' src="assets/heart.jpg" alt="" />
                <span className="postLikeCounter">32 people liked it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
              </div>
            </div>
        </div>
    </div>
  )
}
