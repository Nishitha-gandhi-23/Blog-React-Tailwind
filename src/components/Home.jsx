import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home({ blogPosts }) {
    const [filter, setFilter] = useState("all");

    // Filter blog posts based on selected category
    const filteredPosts = filter === "all" 
        ? blogPosts 
        : blogPosts.filter((post) => post.type === filter);

    return (
        <div className="max-w-screen-xl mx-auto px-4 space-y-6">
            <h2 className="text-3xl font-bold text-center text-gray-800">Welcome to Writely</h2>

            <div className="flex justify-center space-x-4">
                <FilterButton label="All" filter={filter} setFilter={setFilter} />
                <FilterButton label="Tech" filter={filter} setFilter={setFilter} />
                <FilterButton label="Food" filter={filter} setFilter={setFilter} />
                <FilterButton label="Lifestyle" filter={filter} setFilter={setFilter} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                    <BlogPreview key={post.id} {...post} />
                ))}
            </div>
        </div>
    );
}

// Reusable Button Component
function FilterButton({ label, filter, setFilter }) {
    const isActive = filter === label.toLowerCase(); // Check active filter

    return (
        <button
            onClick={() => setFilter(label.toLowerCase())}
            className={`px-4 py-2 rounded-md font-semibold transition duration-300 ease-in-out ${
                isActive 
                    ? "bg-blue-300 text-black"  // Active State
                    : "bg-blue-600 text-white hover:bg-blue-300 hover:text-black" // Default + Hover
            }`}
        >
            {label}
        </button>
    );
}

// Blog Preview Component
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
    );
}

