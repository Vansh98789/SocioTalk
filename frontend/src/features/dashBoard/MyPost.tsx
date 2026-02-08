import axios from "axios";
import { useEffect, useState } from "react";

const MyPosts = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/dashboard/my-post", {
          withCredentials: true,
        });
        setPosts(response.data.posts);
      } catch (err) {
        console.error("Error fetching my posts", err);
      }
    };

    fetchMyPosts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">My Posts</h1>

      {posts.length === 0 ? (
        <p>You haven't created any posts yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="mb-4 border p-4 rounded">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.description}</p>
            {post.img_url && <img src={post.img_url} alt={post.title} className="mt-2" />}

            <div className="flex gap-4 mt-2">
              <button className="bg-blue-500 text-white px-2 py-1 rounded cursor-default">
                👍 Likes: {post.like_count || 0}
              </button>
              <button className="bg-green-500 text-white px-2 py-1 rounded cursor-default">
                💬 Comments: {post.comment_count || 0}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyPosts;
