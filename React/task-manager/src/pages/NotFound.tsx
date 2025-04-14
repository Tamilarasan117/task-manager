import { Link } from "react-router-dom"
import { PageNotFound } from '../utils/imgData'

const NotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold text-red-500">404</h1>
          <img
            src={ PageNotFound }
            alt="404 Page not found"
            className="w-[20rem]"
          />
          <p className="!mt-4 text-lg text-gray-600">We couldn’t find the page you’re looking for. The page may have been removed or you might have the wrong address.</p>
          <div className="!mt-6">
            <Link to={'/'}>
              <button className="!px-6 !py-2 bg-red-500 cursor-pointer text-white rounded-md hover:bg-red-600 transition duration-300">
                Go to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
