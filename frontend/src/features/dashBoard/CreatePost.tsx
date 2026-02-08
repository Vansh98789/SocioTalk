import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [url,setUrl]=useState("");
  const navigate=useNavigate();
 async function handleClick(e:React.MouseEvent<HTMLButtonElement>) {
   e.preventDefault();
  try
  {const response = await axios.post(
    "http://localhost:3000/dashboard/create-post",
    {
      title,
      description,
      img_url: url,
    },
    {
      withCredentials: true, 
    }
  );
  console.log(response);
  navigate("/dashboard/my")


}
catch(e){
  console.log(
    "something went wrong"
  )
}

}

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Create New Post</h1>

      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Post title"
          className="w-full border rounded px-3 py-2"
          onChange={(e)=>{setTitle(e.target.value)}}
        />

        <textarea
          placeholder="Post content"
          className="w-full border rounded px-3 py-2"
          onChange={(e)=>{setDescription(e.target.value)}}

        />
        <input
          type="text"
          placeholder="img-url"
          className="w-full border rounded px-3 py-2"
          onChange={(e)=>{setUrl(e.target.value)}}

        />

        <button
        onClick={handleClick} 
        className="bg-blue-600 text-white px-4 py-2 rounded">
          Publish
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
