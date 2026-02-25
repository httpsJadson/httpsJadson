import React from 'react'

function AboutSection({ bio }) {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-bold text-brand-dark mb-6">Sobre Mim</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {bio}
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection