import React, { useState, useEffect } from 'react'
import profile from '../profile.json'
import './index.css'
import {
  Header,
  HeroSection,
  StatsSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  EducationSection,
  EventsSection,
  TimelineSection,
  ValuesSection,
  CertificationsSection,
  ContactSection
} from './components'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showAllExperience, setShowAllExperience] = useState(false)
  const [showAllEducation, setShowAllEducation] = useState(false)
  const [showAllEvents, setShowAllEvents] = useState(false)
  const [showAllCertifications, setShowAllCertifications] = useState(false)

  // Detect mobile screen
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const {
    name,
    title,
    summary,
    bio,
    location,
    photo,
    stats,
    projects,
    skills,
    experience,
    education,
    certifications,
    events,
    contact
  } = profile

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-brand-light text-brand-gray font-sans antialiased overflow-x-hidden">
      <Header
        name={name}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      <main className="pt-20">
        <HeroSection
          name={name}
          title={title}
          summary={summary}
          photo={photo}
          scrollToSection={scrollToSection}
        />

        <StatsSection stats={stats} />

        <AboutSection bio={bio} />

        <SkillsSection skills={skills} />

        <ProjectsSection
          projects={projects}
          isMobile={isMobile}
          showAllProjects={showAllProjects}
          setShowAllProjects={setShowAllProjects}
        />

        <ExperienceSection
          experience={experience}
          isMobile={isMobile}
          showAllExperience={showAllExperience}
          setShowAllExperience={setShowAllExperience}
        />

        <EducationSection
          education={education}
          isMobile={isMobile}
          showAllEducation={showAllEducation}
          setShowAllEducation={setShowAllEducation}
        />

        <EventsSection
          events={events}
          isMobile={isMobile}
          showAllEvents={showAllEvents}
          setShowAllEvents={setShowAllEvents}
        />

        {/* <TimelineSection /> */}

        <CertificationsSection
          certifications={certifications}
          isMobile={isMobile}
          showAllCertifications={showAllCertifications}
          setShowAllCertifications={setShowAllCertifications}
        />

        {/* <ValuesSection /> */}

        <ContactSection contact={contact} />
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 {name}. Desenvolvido com ❤️ usando React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App