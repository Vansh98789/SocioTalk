const CreatePost = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Create New Post</h1>

      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Post title"
          className="w-full border rounded px-3 py-2"
        />

        <textarea
          placeholder="Post content"
          className="w-full border rounded px-3 py-2"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Publish
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
