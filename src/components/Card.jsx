import React from 'react'
import CardWeb from '../assets/card/Web.js'
import { Link } from 'react-router-dom'

const Card = ({id, image, alt, title, text, tags, type }) => {
  return (
    <>
        <div className="card-hover bg-white rounded-xl shadow-md overflow-hidden group animate-fade-in-up flex flex-col">
            <div className="relative overflow-hidden">
                <img
                    src={image}
                    alt={alt}
                    className="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
                <p className="text-gray-600 flex-grow">{text}</p>

                <div className="flex flex-wrap gap-2 my-4">
                {tags.map((tag, idx) => (
                    <span
                    key={idx}
                    className="bg-gray-400 px-3 py-1 rounded mt-auto text-sm"
                    >
                    {tag}
                    </span>
                ))}
                </div>

                {/* bagian tombol selalu di bawah */}
                <div className="mt-auto">
                <Link
                    to={`/project/${type}/${id}`}
                    className="flex items-center hover:text-secondary font-semibold text-blue-600 hover:text-purple-500 transition-all duration-200 w-fit"
                >
                    <p>View Project</p> <i className="fas fa-arrow-right ml-2"></i>
                </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card