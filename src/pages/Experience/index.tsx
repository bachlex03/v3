import { useRef, useState, useEffect, type FC, type MouseEventHandler } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsArrowDownRight } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { personalInfo, experiences, navItems, projects, certificates } from './_data'

type ExperiencePageProps = object

const ExperiencePage: FC<ExperiencePageProps> = () => {
  const navRefs = useRef<Array<HTMLElement | null>>([])
  const ItemRefs = useRef<Array<HTMLElement | null>>([])
  const [activeSection, setActiveSection] = useState<string>('about')

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
      const scrollPosition = window.scrollY + 150 // Offset for better detection

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const elementTop = element.offsetTop
          const elementBottom = elementTop + element.offsetHeight

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Initial check
    handleScroll()

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleActiveNav: MouseEventHandler = (event) => {
    event.preventDefault()
    const target = event.currentTarget as HTMLElement
    const link = target.querySelector('a') as HTMLAnchorElement
    const href = link?.getAttribute('href')

    if (href) {
      const sectionId = href.replace('#', '')
      setActiveSection(sectionId)

      // Smooth scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }
  }

  const handleActiveExperience: MouseEventHandler = (event) => {
    ItemRefs.current.forEach((ref) => {
      if (ref) {
        ref.classList.add('inactive')
      }
    })

    event.currentTarget.classList.remove('inactive')
  }

  return (
    <div className='h-full px-[100px] pt-[96px] lg:flex lg:gap-4'>
      <header className='relative w-1/2'>
        <div className='fixed flex h-screen flex-col justify-between'>
          <div className=''>
            <h1 className='font-inter text-[48px] font-bold tracking-tight text-[#e2e8f0]'>Bach (Bale) Le Xuan</h1>
            <h2 className='pt-[12px] font-mono text-lg font-medium tracking-tight text-[#e2e8f0]'>
              Fullstack Blockchain Engineer
            </h2>
            <p className='font-inter w-[320px] pt-[16px] text-[16px] font-light text-[#94a3b8]'>
              I build accessible, pixel-perfect digital experiences for the web.
            </p>

            <nav className='pt-[60px]'>
              <ul className='flex flex-col text-[14px] font-bold tracking-widest text-[#64748b] uppercase'>
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className={`group cursor-pointer py-3 text-[12px] ${activeSection === item ? 'active' : ''}`}
                    ref={(el) => {
                      navRefs.current[index] = el
                    }}
                    onClick={handleActiveNav}
                  >
                    <a href={`#${item}`} className='flex items-center'>
                      <span
                        className={`nav-indicator mr-4 inline-block h-px bg-slate-200/60 transition-all duration-300 group-hover:w-[80px] group-hover:bg-slate-200 ${
                          activeSection === item ? 'w-[80px] bg-slate-200' : 'w-10'
                        }`}
                      ></span>
                      <span
                        className={`transition-colors duration-300 group-hover:text-[#e2e8f0] ${
                          activeSection === item ? 'text-[#e2e8f0]' : ''
                        }`}
                      >
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <ul className='group flex gap-5 pb-[200px] text-[24px] text-slate-300/80'>
            <li className='hover:text-slate-200'>
              <a href='https://github.com/bachlex03' target='_blank' rel='noopener noreferrer'>
                <FaGithub />
              </a>
            </li>
            <li className='hover:text-slate-200'>
              <a href='https://www.linkedin.com/in/lxbach1608/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedinIn />
              </a>
            </li>
            <li className='hover:text-slate-200'>
              <a href='https://www.instagram.com/bashlee.16/' target='_blank' rel='noopener noreferrer'>
                <FiInstagram />
              </a>
            </li>
          </ul>
        </div>
      </header>

      <div className='w-1/2'>
        <section id='about' className='pb-[96px]'>
          <p className='pb-4 text-[16px] leading-relaxed text-slate-400'>
            I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful
            design with robust engineering. My favorite work lies at the intersection of design and development,
            creating experiences that not only look great but are meticulously built for performance and usability.
          </p>
          <p className='pb-4 text-[16px] leading-relaxed text-slate-400'>
            Currently, I'm a Senior Front-End Engineer at QKIT, specializing in accessibility. I contribute to the
            creation and maintenance of UI components that power QKIT's frontend, ensuring our platform meets web
            accessibility standards and best practices to deliver an inclusive user experience.
          </p>
          <p className='pb-4 text-[16px] leading-relaxed text-slate-400'>
            In the past, I've had the opportunity to develop software across a variety of settings — from advertising
            agencies and large corporations to start-ups and small digital product studios. Additionally, I also
            released a comprehensive video course a few years ago, guiding learners through building a web app with the
            Spotify API.
          </p>
          <p className='pb-4 text-[16px] leading-relaxed text-slate-400'>
            In my spare time, I'm usually climbing, reading, hanging out with my wife and two cats, or running around
            Hyrule searching for Korok seeds.
          </p>

          <ul className='mt-8'>
            {personalInfo.map((item, index) => (
              <li key={index} className='flex items-center gap-2 pb-4'>
                <span className='min-w-[100px] font-mono text-xs font-bold text-slate-400'>{item.label}</span>
                <span className='font-mono text-lg font-medium text-slate-200'>{item.value}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section id='experience' className='pb-[96px]'>
          <div className='space-y-6'>
            {experiences.map((experience, index) => {
              return (
                <div
                  key={index}
                  className='group relative grid grid-cols-8 gap-1 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/5'
                  ref={(el) => {
                    ItemRefs.current[index] = el
                  }}
                  onMouseOver={handleActiveExperience}
                  onMouseLeave={() => {
                    ItemRefs.current.forEach((ref) => {
                      if (ref) {
                        ref.classList.remove('inactive')
                      }
                    })
                  }}
                >
                  {/* Duration */}
                  <div className='col-span-2'>
                    <div className=''>
                      <span className='text-xs font-bold tracking-wider text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-400'>
                        {experience.duration.split(' - ').map((part, index) => (
                          <span key={index}>
                            {part}
                            {index === 0 && (
                              <>
                                <br />
                                <span>-</span>
                                <br />
                              </>
                            )}
                          </span>
                        ))}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className='col-span-6 pl-4'>
                    <div className='mb-3 flex items-center'>
                      <h3 className='text-[16px] font-semibold text-slate-200 transition-colors duration-300 group-hover:text-teal-300'>
                        <span className='hover:cursor-pointer'>
                          {experience.position} · {experience.company}
                        </span>
                      </h3>
                      <div className='ml-2 transition-opacity duration-300 group-hover:opacity-100'>
                        <BsArrowDownRight className='transform text-sm text-teal-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                      </div>
                    </div>

                    <p className='mb-4 text-[14px] leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300'>
                      {experience.description}
                    </p>

                    <div className='flex flex-wrap gap-2'>
                      {experience.techs.map((tech, index) => (
                        <span
                          key={index}
                          className='rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 transition-colors duration-300 group-hover:border-teal-400/30 group-hover:bg-teal-400/15'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Subtle gradient overlay */}
                  <div className='pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-transparent to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Certificates Section */}
        <section id='certificates' className='pt-[96px] pb-[96px]'>
          <div className='space-y-6'>
            {certificates.map((certificate, index) => {
              return (
                <div
                  key={index}
                  className='group relative grid grid-cols-8 gap-1 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/5'
                >
                  <div className='col-span-2'>
                    <a href={certificate.link} target='_blank' rel='noopener noreferrer' className='block'>
                      <div className='relative h-[100px] w-full cursor-pointer overflow-hidden rounded border border-slate-700/50 bg-slate-800/30 transition-colors duration-300 group-hover:border-slate-600/50'>
                        {certificate.image ? (
                          <img
                            src={certificate.image}
                            alt={certificate.title}
                            className='h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105'
                          />
                        ) : (
                          <div className='flex h-full w-full items-center justify-center p-2'>
                            <div className='text-center'>
                              <div className='mb-1 text-2xl text-slate-500'>📜</div>
                              <div className='text-xs font-medium text-slate-500'>Certificate</div>
                            </div>
                          </div>
                        )}
                        <div className='absolute inset-0 bg-slate-900/10 transition-colors duration-300 group-hover:bg-slate-900/5'></div>
                      </div>
                    </a>
                  </div>

                  <div className='col-span-6 pl-4'>
                    <div className='mb-2 flex items-center'>
                      <h3 className='text-[16px] font-semibold text-slate-200 transition-colors duration-300 group-hover:text-teal-300'>
                        <a
                          href={certificate.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='hover:cursor-pointer'
                        >
                          {certificate.title}
                        </a>
                      </h3>
                      <div className='ml-2 transition-opacity duration-300 group-hover:opacity-100'>
                        <BsArrowDownRight className='transform text-sm text-teal-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                      </div>
                    </div>

                    <p className='mb-2 text-xs font-bold tracking-wider text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-400'>
                      {certificate.issueDate}
                    </p>

                    <p className='mb-4 text-[14px] leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300'>
                      {certificate.description}
                    </p>

                    {certificate.skills && (
                      <div className='flex flex-wrap gap-2'>
                        {certificate.skills.map((skill, index) => (
                          <span
                            key={index}
                            className='rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 transition-colors duration-300 group-hover:border-teal-400/30 group-hover:bg-teal-400/15'
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects' className='pt-[96px] pb-[96px]'>
          <div className='space-y-6'>
            {projects.map((project, index) => {
              return (
                <div
                  key={index}
                  className='group relative grid grid-cols-8 gap-1 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/5'
                  ref={(el) => {
                    ItemRefs.current.push(el)
                  }}
                  onMouseOver={handleActiveExperience}
                  onMouseLeave={() => {
                    ItemRefs.current.forEach((ref) => {
                      if (ref) {
                        ref.classList.remove('inactive')
                      }
                    })
                  }}
                >
                  {/* Image */}
                  <div className='col-span-2'>
                    <div className='relative h-[75px] w-full overflow-hidden rounded border border-slate-700/50 transition-colors duration-300 group-hover:border-slate-600/50'>
                      <img
                        src={project.image}
                        alt={project.title}
                        className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                      />
                      <div className='absolute inset-0 bg-slate-900/20 transition-colors duration-300 group-hover:bg-slate-900/10'></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className='col-span-6 pl-4'>
                    <div className='mb-2 flex items-center'>
                      <h3 className='text-[16px] font-semibold text-slate-200 transition-colors duration-300 group-hover:text-teal-300'>
                        {project.title}
                      </h3>
                      <div className='ml-2 transition-opacity duration-300 group-hover:opacity-100'>
                        <BsArrowDownRight className='transform text-sm text-teal-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                      </div>
                    </div>

                    <p className='mb-4 text-[14px] leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300'>
                      {project.description}
                    </p>

                    <div className='flex flex-wrap gap-2'>
                      {project.techs.map((tech, index) => (
                        <span
                          key={index}
                          className='rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 transition-colors duration-300 group-hover:border-teal-400/30 group-hover:bg-teal-400/15'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Subtle gradient overlay */}
                  <div className='pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-transparent to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                </div>
              )
            })}
          </div>
        </section>

        <section id='end' className='pt-[48px] pb-[96px]'>
          <div className='max-w-lg'>
            <p className='font-calibre text-[15px] leading-relaxed text-slate-400/80 xl:text-[17px]'>
              Loosely designed in{' '}
              <span className='cursor-pointer font-medium text-slate-300 transition-colors duration-300 hover:text-teal-300'>
                Figma
              </span>{' '}
              and coded in{' '}
              <span className='cursor-pointer font-medium text-slate-300 transition-colors duration-300 hover:text-teal-300'>
                Visual Studio Code
              </span>{' '}
              by yours truly. Built with{' '}
              <span className='cursor-pointer font-medium text-slate-300 transition-colors duration-300 hover:text-teal-300'>
                React
              </span>{' '}
              and{' '}
              <span className='cursor-pointer font-medium text-slate-300 transition-colors duration-300 hover:text-teal-300'>
                Tailwind CSS
              </span>
              , deployed with{' '}
              <span className='cursor-pointer font-medium text-slate-300 transition-colors duration-300 hover:text-teal-300'>
                Vercel
              </span>
              . All text is set in the{' '}
              <span className='cursor-pointer font-medium text-slate-300 transition-colors duration-300 hover:text-teal-300'>
                Calibre
              </span>{' '}
              typeface.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ExperiencePage
