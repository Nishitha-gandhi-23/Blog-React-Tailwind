import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import CreatePost from "./components/CreatePost"
import AboutUs from "./components/AboutUs"
import BlogPost from "./components/BlogPost"
import { blogPosts as initialBlogPosts } from "./data/blogPosts"

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 TechBlog. All rights reserved.</p>
      </div>
    </footer>
  )
}

function App() {
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts)

  const addNewPost = (newPost) => {
    setBlogPosts([...blogPosts, { ...newPost, id: blogPosts.length + 1 }])
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home blogPosts={blogPosts} />} />
            <Route path="/create" element={<CreatePost addNewPost={addNewPost} />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog/:id" element={<BlogPost blogPosts={blogPosts} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App


