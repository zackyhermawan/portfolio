import React from 'react'
import { Link, useParams } from 'react-router-dom'
import CardWeb from '../assets/card/Web'
import Navbar from './Navbar'
import Footer from './Footer'
import CardUiUx from '../assets/card/UIUX'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const ProjectDetail = () => {
  const { type, id } = useParams()
  let project
  if (type === 'web') {
    project = CardWeb.find(p => p.id === parseInt(id))
  } else if (type === 'uiux') {
    project = CardUiUx.find(p => p.id === parseInt(id))
  }

  const labelTotal = type === 'web' ? 'Total Teknologi' : 'Total Alat Desain';
  const fitur = type === 'web' ? 'Fitur Utama' : 'Total Halaman';
  const fiturUtama = type === 'web' ? 'Fitur Utama' : 'Total Halaman';
  const title = type === 'web' ? 'Teknologi yang digunakan': 'Alat yang digunakan';
  const view = type === 'web' ? 'Lihat Github' : 'Lihat Prototype';
  const iconTotal = type === 'web' 
    ? 'fa-solid fa-code' 
    : 'fa-solid fa-paintbrush'

  const iconFitur = type === 'web'
    ? 'fa-solid fa-layer-group'
    : 'fa-solid fa-mobile-screen'

  if (!project) {
    return <div className="text-center py-20 text-red-500">Project not found</div>
  }

  return (
    <>
      <Navbar />
      <div className="py-20 bg-gray-100 px-4 sm:px-6 lg:px-12">
        <Link
          to="/"
          className="flex items-center gap-2 my-3 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-400 w-fit rounded"
        >
          <i className="fa-solid fa-arrow-left text-white"></i>
          <p className="text-white font-semibold text-sm sm:text-base">Kembali</p>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12">
          <section className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              {project.title}
            </h1>
            <p className="text-gray-900 text-sm sm:text-base leading-relaxed">
              {project.deskripsi}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 my-7">
              <div className="flex items-center gap-3 text-gray-900 rounded-full border border-blue-400 py-2 px-6 w-full sm:w-auto">
                <i className={`${iconTotal} text-lg bg-blue-100 w-10 h-10 flex items-center justify-center rounded-full text-blue-500`}></i>
                <div className="flex flex-col">
                  <h1 className="text-gray-900 text-xl font-semibold">
                    {project.tags.length}
                  </h1>
                  <p className="text-gray-800 text-sm">{labelTotal}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-900 rounded-full border border-pink-400 py-2 px-6 w-full sm:w-auto">
                <i className={`${iconFitur} text-lg bg-pink-100 w-10 h-10 flex items-center justify-center rounded-full text-pink-500`}></i>
                <div className="flex flex-col">
                  <h1 className="text-gray-900 text-xl font-semibold">
                    {project.fitur.length}
                  </h1>
                  <p className="text-gray-800 text-sm">{fitur}</p>
                </div>
              </div>
            </div>

            {project.type === 'web'}
            <a
              href={`${project.link}`} target='_blank'
              className="flex items-center rounded gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-400 w-fit text-white text-sm sm:text-base"
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              <p>{view}</p>
            </a>

            <div className="flex flex-col my-7 gap-2">
              <div className="flex items-center mb-2">
                <i className={`${iconTotal} text-lg flex items-center justify-center rounded-full text-gray-900`}></i>
                <h1 className="text-gray-900 text-lg sm:text-xl font-bold ml-2">
                  {title}
                </h1>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm md:text-base"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="container mx-auto py-3">
              {project.images && project.images.length > 1 ? (
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="rounded-xl mb-6"
              >
                {project.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`Gambar ${idx + 1}`}
                      className="w-full h-auto object-contain object-top rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-auto object-contain object-top rounded-xl mb-6"
              />
            )}

            </div>

            <div className="flex flex-col bg-gray-200/50 px-4 py-4 rounded">
              <div className="flex items-center gap-2 mb-3">
                <i className="fa-regular fa-star text-yellow-500 text-lg"></i>
                <h1 className="text-lg text-gray-900 font-semibold">
                  {fiturUtama}
                </h1>
              </div>
              <ul className="list-disc list-inside marker:text-purple-500 text-gray-700 ml-4 space-y-2 text-sm sm:text-base">
                {project.fitur.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProjectDetail
