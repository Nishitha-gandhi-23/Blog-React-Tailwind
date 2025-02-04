import { useState } from "react"
import { Link } from "react-router-dom"

export default function Home({ blogPosts }) {
    const [filter, setFilter] = useState("all")

    const filteredPosts = filter === "all" ? blogPosts : blogPosts.filter((post) => post.type === filter)

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-gray-800">Welcome to TechBlog</h2>
            <div className="flex justify-center space-x-4">
                <button
                    onClick={() => setFilter("all")}
                    className={`px-4 py-2 rounded ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                >
                    All
                </button>
                <button
                    onClick={() => setFilter("tech")}
                    className={`px-4 py-2 rounded ${filter === "tech" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                >
                    Tech
                </button>
                <button
                    onClick={() => setFilter("food")}
                    className={`px-4 py-2 rounded ${filter === "food" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                >
                    Food
                </button>
                <button
                    onClick={() => setFilter("lifestyle")}
                    className={`px-4 py-2 rounded ${filter === "lifestyle" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                >
                    Lifestyle
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                    <BlogPreview key={post.id} {...post} />
                ))}
            </div>
        </div>
    )
}

function BlogPreview({ id, title, content, type, date, image }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
            <img src={image || "/placeholder.jpg"} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
                    <p className="text-sm text-gray-600 mb-2">Published on: {date}</p>
                    <p className="text-gray-700">{content.substring(0, 100)}...</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{type}</span>
                    <Link to={`/blog/${id}`} className="text-blue-600 hover:underline">
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    )
}


