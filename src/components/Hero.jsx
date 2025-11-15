import React from 'react'

const Hero = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 hero-gradient"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 text-center md:text-left animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Mengubah Ide Menjadi
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                Realitas Digital
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Saya menciptakan pengalaman digital luar biasa yang menggabungkan teknologi mutakhir dengan desain menakjubkan untuk memberikan solusi yang mendorong pertumbuhan bisnis dan keterlibatan pengguna.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
              <a
                onClick={()=> scrollToSection('projects')}
                className="bg-white cursor-pointer text-purple-500 px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
              >
                View My Work
              </a>
              <a
              onClick={()=> scrollToSection('contact')}
                className="border-2 cursor-pointer border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-500 transition-all duration-300 text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="md:w-1/2 animate-fade-in-up">
            <div className="relative flex justify-center">
              <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-white/20 rounded-full flex items-center justify-center">
                  <img
                    src="profile.jpg"
                    alt="Professional portrait of a skilled developer and designer"
                    className="w-32 h-32 sm:w-44 sm:h-44 lg:w-56 lg:h-56 rounded-full object-cover shadow-2xl"
                  />
                </div>
              </div>

              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-purple-400 rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
