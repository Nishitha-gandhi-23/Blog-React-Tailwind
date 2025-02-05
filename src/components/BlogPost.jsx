

  import { useParams, Link } from "react-router-dom"

  export default function BlogPost({ blogPosts }) {
    const { id } = useParams()
    const post = blogPosts.find((post) => post.id === Number.parseInt(id))
  
    if (!post) {
      return <div className="text-center">Post not found</div>
    }
  
    return (
      <div className="max-w-screen-xl mx-auto px-4 bg-white shadow-md rounded overflow-hidden">
        {post.image && (
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-64 object-cover" />
        )}
        <div className="px-8 pt-6 pb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h2>
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600">Published on: {post.date}</p>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{post.type}</span>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">{post.content}</p>
          <Link to="/" className="text-blue-600 hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    )
  }
  
  