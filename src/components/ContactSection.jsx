import React from 'react'

function ContactSection({ contact }) {
  return (
    <section id="contact" className="py-20 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-6">Vamos Conversar?</h2>
          <p className="text-gray-400 text-lg">Estou sempre aberto a novas oportunidades e colaborações</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold mb-6">Entre em Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-brand-blue text-xl">📧</span>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-400">{contact?.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-brand-blue text-xl">📱</span>
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-gray-400">{contact?.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-brand-blue text-xl">📍</span>
                  <div>
                    <p className="font-medium">Localização</p>
                    <p className="text-gray-400">{contact?.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                {contact?.social?.linkedin && (
                  <a href={contact.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-brand-blue rounded-lg flex items-center justify-center transition">
                    <span className="text-lg">💼</span>
                  </a>
                )}
                {contact?.social?.github && (
                  <a href={contact.social.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-brand-blue rounded-lg flex items-center justify-center transition">
                    <span className="text-lg">📁</span>
                  </a>
                )}
                {contact?.social?.twitter && (
                  <a href={contact.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-brand-blue rounded-lg flex items-center justify-center transition">
                    <span className="text-lg">🐦</span>
                  </a>
                )}
                {contact?.social?.instagram && (
                  <a href={contact.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-brand-blue rounded-lg flex items-center justify-center transition">
                    <span className="text-lg">📷</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold mb-6">Pronto para começar um projeto?</h3>
            <p className="text-gray-400 mb-6">
              Seja para desenvolvimento de aplicações web, tecnologias assistivas ou consultoria técnica,
              estou aqui para ajudar sua ideia se tornar realidade.
            </p>
            <button className="w-full bg-brand-blue hover:bg-brand-accent text-white font-bold py-3 rounded-lg transition shadow-lg">
              Iniciar Conversa
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection