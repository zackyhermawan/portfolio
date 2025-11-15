import React, { useState } from 'react'
import Title from './Title'
import Card from './Card'
import CardWeb from '../assets/card/web.js'
import CardUiUx from '../assets/card/UIUX'

const Project = () => {

    const [activeTab, setActiveTab] = useState('web')

  return (
    <div>
        <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <Title judul="Featured Project" text="Jelajahi karya terbaru saya yang menampilkan solusi inovatif dan eksekusi desain yang luar biasa." />

            <div className="flex justify-center p-2 w-fit space-x-2 mx-auto my-8">
                <button 
                    onClick={() => setActiveTab('web')} 
                    className={`px-5 py-2 rounded font-semibold transition ${
                    activeTab === 'web' 
                    ? ' bg-gradient-to-r from-purple-500 to-blue-400 rounded text-white shadow-md' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                    Web Development
                </button>
                <button 
                    onClick={() => setActiveTab('uiux')} 
                    className={`px-5 py-2 rounded font-semibold transition ${
                    activeTab === 'uiux' 
                    ? ' bg-gradient-to-r from-purple-500 to-blue-400 rounded  text-white shadow-md' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                    UI/UX Design
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activeTab === 'web' && [...CardWeb].reverse().map((item) => (
                    <Card 
                    key={item.id} 
                    id={item.id} 
                    type="web"
                    image={item.image} 
                    alt={item.alt} 
                    title={item.title} 
                    text={item.text} 
                    tags={item.tags} 
                    link={item.link} 
                    />
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activeTab !== 'web' && CardUiUx.map((item) => (
                    <Card 
                    key={item.id} 
                    id={item.id} 
                    type="uiux"
                    image={item.image} 
                    alt={item.alt} 
                    title={item.title} 
                    text={item.text} 
                    tags={item.tags} 
                    link={item.link} 
                    />
                ))}
            </div>
        </div>
    </section>
    </div>
  )
}

export default Project