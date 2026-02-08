import axios from "axios";
import { useEffect, useState } from "react";

const AllPosts = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/dashboard/all-post", {
          withCredentials: true,
        });
        setPosts(response.data.posts);
      } catch (err) {
        console.error("Error fetching all posts", err);
      }
    };

    fetchAllPosts();
  }, []);

  const handleLike = async (postId: number) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/dashboard/like-post/${postId}`,
        {},
        { withCredentials: true }
      );
      setPosts((prev) =>
        prev.map((post) =>
          post.id === postId ? { ...post, like_count: response.data.post.like_count } : post
        )
      );
    } catch (err) {
      console.error("Error liking post", err);
    }
  };

  const handleComment = async (postId: number) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/dashboard/comment-post/${postId}`,
        {},
        { withCredentials: true }
      );
      setPosts((prev) =>
        prev.map((post) =>
          post.id === postId ? { ...post, comment_count: response.data.post.comment_count } : post
        )
      );
    } catch (err) {
      console.error("Error commenting on post", err);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">All Posts</h1>

      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="mb-4 border p-4 rounded">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.description}</p>
            {post.img_url && <img src={post.img_url} alt={post.title} className="mt-2" />}
            <p className="text-sm text-gray-500">By User ID: {post.user_id}</p>

            <div className="flex gap-4 mt-2">
              <button
                onClick={() => handleLike(post.id)}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                👍 Like ({post.like_count || 0})
              </button>
              <button
                onClick={() => handleComment(post.id)}
                className="bg-green-500 text-white px-2 py-1 rounded"
              >
                💬 Comment ({post.comment_count || 0})
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AllPosts;
