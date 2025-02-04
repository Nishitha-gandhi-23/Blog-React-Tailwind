

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
  
  
  