import Share from "../share/Share";
import Post from "../post/Post";
import './feed.css';
import { useEffect, useState } from "react";
import axios from "axios";
// import { Posts } from "../../dummyData";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/62137bf65f5deb5b8bab7edf")
      // setPosts(res.data)
      console.log(res);
    }    
    fetchPosts();
  },[]);

  return (
    <div className='feed'>
        <div className="feedWrapper">
          <Share />
          
          {/* {posts?.map((post) => (
            <Post key={post.id} post={post} />
          ))} */}
        </div>
    </div>
  )
}
