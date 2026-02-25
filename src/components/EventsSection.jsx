import React from 'react'

function EventsSection({ events, isMobile, showAllEvents, setShowAllEvents }) {
  return (
    <section id="events" className="py-20 bg-brand-dark relative">
      {/* Smooth Transition from Education Section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent via-brand-dark/50 to-brand-dark"></div>

      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500/30 blur-[130px] rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-pink-500/20 blur-[120px] rounded-full animate-pulse-slow" style={{animationDelay: '0.7s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-brand-blue/15 blur-[110px] rounded-full animate-float-reverse" style={{animationDelay: '1s'}}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white mb-6">Eventos & Participações</h2>
          <p className="text-gray-300 text-lg">Minha presença na comunidade tech</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events?.slice(0, showAllEvents ? events.length : (isMobile ? 3 : 6)).map((event, index) => (
            <div key={index} className="bg-white rounded-xl p-6 hover:shadow-md transition animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                  {event.type === 'Palestra' && '🎤'}
                  {event.type === 'Hackathon' && '💻'}
                  {event.type === 'Meetup' && '👥'}
                  {event.type === 'Workshop' && '🛠️'}
                  {event.type === 'Congresso' && '🎓'}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-brand-dark mb-1">{event.title}</h3>
                  <p className="text-brand-blue text-sm font-medium mb-2">{event.role} • {event.organization}</p>
                  <p className="text-gray-600 text-sm mb-2">{event.location} • {event.date}</p>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                  {event.achievement && (
                    <div className="mt-2 inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                      🏆 {event.achievement}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {events?.length > (isMobile ? 3 : 6) && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllEvents(!showAllEvents)}
              className="bg-brand-blue hover:bg-brand-accent text-white px-8 py-3 rounded-md font-medium transition shadow-lg shadow-brand-blue/30"
            >
              {showAllEvents ? 'Ver Menos' : `Ver Todos os Eventos (${events.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default EventsSection