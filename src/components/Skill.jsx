import React from 'react'
import Title from './Title'
import SkillBar from './SkillBar'
import technologi from './../assets/tools/Tools';

const Skill = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <Title
          judul="Technical Expertise"
          text="Menguasai teknologi modern untuk memberikan solusi mutakhir."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {/* Kolom kiri */}
          <div className="animate-fade-in-up">
            <h3 className="text-xl sm:text-2xl text-gray-900 font-semibold mb-6">
              Development Skills
            </h3>

            <div className="space-y-6">
              <SkillBar skill="Frontend Developer" percent="93%" />
              <SkillBar skill="Backend Developer" percent="84%" />
              <SkillBar skill="Database Management" percent="84%" />
              <SkillBar skill="UI/UX" percent="80%" />
            </div>
          </div>

          {/* Kolom kanan */}
          <div className="animate-fade-in-up">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">
              Technologies & Tools
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {technologi.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg text-center card-hover"
                >
                  <i className={`${item.icon} text-2xl sm:text-3xl mb-2`}></i>
                  <div className="font-medium text-gray-950 text-sm sm:text-base">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
