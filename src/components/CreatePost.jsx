

  import { useState } from "react"
  import { useNavigate } from "react-router-dom"
  
  export default function CreatePost({ addNewPost }) {
    const [title, setTitle] = useState("")
    const [type, setType] = useState("tech")
    const [content, setContent] = useState("")
    const [image, setImage] = useState(null)
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const newPost = {
        title,
        type,
        content,
        date: new Date().toISOString().split("T")[0], // Format: YYYY-MM-DD
        image: image ? URL.createObjectURL(image) : null,
      }
      addNewPost(newPost)
      navigate("/")
    }
  
    const handleImageChange = (e) => {
      if (e.target.files[0]) {
        setImage(e.target.files[0])
      }
    }
  
    return (
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create a New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div>
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div>
            <label htmlFor="type" className="block text-gray-700 text-sm font-bold mb-2">
              Type of Post
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="tech">Technology</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="food">Food</option>
            </select>
          </div>
          <div>
            <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
              Image
            </label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              accept="image/*"
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="5"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Create Post
          </button>
        </form>
      </div>
    )
  }
  
  
   

/* 
  import { useState, useEffect } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  
  // Utility function to manage localStorage
  const getPostsFromStorage = () => {
    const storedPosts = localStorage.getItem("blogPosts");
    return storedPosts ? JSON.parse(storedPosts) : [];
  };
  
  export default function CreatePost({ addNewPost, updatePost }) {
    const navigate = useNavigate();
    const { postId } = useParams(); // For edit functionality
  
    // Form states
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [type, setType] = useState("tech");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
  
    // Load post data for editing
    useEffect(() => {
      if (postId) {
        const existingPosts = getPostsFromStorage();
        const postToEdit = existingPosts.find((post) => post.id === postId);
  
        if (postToEdit) {
          setTitle(postToEdit.title);
          setAuthor(postToEdit.author);
          setType(postToEdit.type);
          setContent(postToEdit.content);
          setImage(postToEdit.image);
        }
      }
    }, [postId]);
  
    // Handle Form Submission
    const handleSubmit = (e) => {
      e.preventDefault();
      const newPost = {
        id: postId || Date.now().toString(), // Unique ID
        title,
        author,
        type,
        content,
        date: new Date().toISOString().split("T")[0],
        image: image ? URL.createObjectURL(image) : null,
      };
  
      const existingPosts = getPostsFromStorage();
      if (postId) {
        // Update post if editing
        const updatedPosts = existingPosts.map((post) =>
          post.id === postId ? newPost : post
        );
        localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
        updatePost(newPost);
      } else {
        // Add new post
        const updatedPosts = [...existingPosts, newPost];
        localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
        addNewPost(newPost);
      }
  
      navigate("/");
    };
  
    const handleImageChange = (e) => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
  
    return (
      <div className="max-w-2xl mx-auto mt-10">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          {postId ? "Edit Post" : "Create a New Post"}
        </h2>
  
        <form
          onSubmit={handleSubmit}
          className="bg-white  shadow-2xl rounded-xl p-8 space-y-6"
        >
          <InputField
            label="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
  
          <InputField
            label="Author Name"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
  
          <div>
            <label className="block text-black text-sm font-bold mb-2">
              Type of Post
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full py-2 px-3 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option className="text-black" value="tech">Technology</option>
              <option className="text-black" value="lifestyle">Lifestyle</option>
              <option className="text-black" value="food">Food</option>
              <option className="text-black" value="food">Other</option>
            </select>
          </div>
  
          <InputField
            label="Image"
            placeholder="Upload Image"
            type="file"
            onChange={handleImageChange}
            accept="image/*"
          />
  
          <div>
            <label className="block text-black text-sm font-bold mb-2">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="5"
              className="w-full text-black py-2 px-3 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              required
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-bold transition duration-300"
          >
            {postId ? "Update Post" : "Create Post"}
          </button>
        </form>
      </div>
    );
  }
  
  // Reusable Input Field Component
  const InputField = ({ label, type, value, onChange, ...props }) => (
    <div>
      <label className="block text-black text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full py-2 px-3 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
        {...props}
      />
    </div>
  );
   */


 /*  third

  import { useState, useEffect } from "react";

  export default function Home() {
    const [blogPosts, setBlogPosts] = useState([]);
    const [filter, setFilter] = useState("all");
    const [newPost, setNewPost] = useState({
      title: "",
      author: "",
      type: "tech",
      content: "",
      image: null,
    });
  
    // Load posts from localStorage when the page loads
    useEffect(() => {
      const storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
      setBlogPosts(storedPosts);
    }, []);
  
    // Save posts to localStorage whenever blogPosts change
    useEffect(() => {
      localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
    }, [blogPosts]);
  
    const handleAddPost = (e) => {
      e.preventDefault();
      const postWithId = {
        ...newPost,
        id: Date.now(),
        date: new Date().toISOString().split("T")[0],
        image: newPost.image ? URL.createObjectURL(newPost.image) : null,
      };
      setBlogPosts([postWithId, ...blogPosts]);
  
      // Reset form
      setNewPost({ title: "", author: "", type: "tech", content: "", image: null });
    };
  
    const handleImageChange = (e) => {
      if (e.target.files[0]) {
        setNewPost({ ...newPost, image: e.target.files[0] });
      }
    };
  
    const filteredPosts =
      filter === "all" ? blogPosts : blogPosts.filter((post) => post.type === filter);
  
    return (
      <div className="max-w-3xl mx-auto p-4 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Welcome to Writely</h2>
  
        <div className="flex justify-center space-x-4">
          {["all", "tech", "food", "lifestyle"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded ${
                filter === category ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
              } hover:bg-blue-300 hover:text-black transition`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
  
        <form onSubmit={handleAddPost} className="bg-white shadow-md rounded p-4 space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
  
          <input
            type="text"
            placeholder="Author Name"
            value={newPost.author}
            onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
            className="w-full border p-2 rounded"
            required
          />
  
          <select
            value={newPost.type}
            onChange={(e) => setNewPost({ ...newPost, type: e.target.value })}
            className="w-full border p-2 rounded"
          >
            <option value="tech">Technology</option>
            <option value="food">Food</option>
            <option value="lifestyle">Lifestyle</option>
          </select>
  
          <textarea
            placeholder="Content"
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            className="w-full border p-2 rounded"
            rows="4"
            required
          ></textarea>
  
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            className="w-full border p-2 rounded"
          />
  
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Create Post
          </button>
        </form>
  
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded shadow">
              {post.image && (
                <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded" />
              )}
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-500">By {post.author}</p>
              <p className="text-sm text-gray-400">Published on: {post.date}</p>
              <p className="mt-2">{post.content}</p>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mt-2">
                {post.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
   */