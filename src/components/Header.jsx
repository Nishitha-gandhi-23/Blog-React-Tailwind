/*   import { Link } from "react-router-dom"

  export default function Header() {
    return (
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-xl font-bold">TechBlog</span>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-gray-300 transition duration-300">
                  Home
                </Link>
              </li>
              <Link to="/create" className="hover:text-gray-300 transition duration-300">
                Create Post
              </Link>
              <Link to="/about" className="hover:text-gray-300 transition duration-300">
                About Us
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
  
  

 */

import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                    <span className="text-xl font-bold">Writely</span>
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="hover:text-gray-300 transition duration-300">
                                Home
                            </Link>
                        </li>
                        <Link to="/create" className="hover:text-gray-300 transition duration-300">
                            Create Post
                        </Link>
                        <Link to="/about" className="hover:text-gray-300 transition duration-300">
                            About Us
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

