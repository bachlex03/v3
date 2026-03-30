import React, { useRef, useState, useEffect, useCallback, type FC, type MouseEventHandler } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsArrowDownRight } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'
import { FocusModeProvider, FocusItem } from '~/components/app'

type ExperiencePageProps = object

const navItems = ['about', 'experience', 'projects', 'certificates', 'education']

const microservicesImages = [
  '/assets/images/microservices/home_page.png',
  '/assets/images/microservices/admin_dashboard.png',
  '/assets/images/microservices/product_details_page.png',
  '/assets/images/microservices/basket_page.png',
  '/assets/images/microservices/checkout_page_1.png',
  '/assets/images/microservices/checkout_page_2_blockchain_payment.png',
  '/assets/images/microservices/main_sell_page.png',
  '/assets/images/microservices/online_orders_table.png',
  '/assets/images/microservices/revenue_chart.png',
  '/assets/images/microservices/hrm_table.png',
  '/assets/images/microservices/warehouse_table.png',
  '/assets/images/microservices/event_page_1.png',
  '/assets/images/microservices/event_page_2.png',
  '/assets/images/microservices/microservices_internal_request_tracking.png',
  '/assets/images/microservices/microservices_logging.png'
]

const ExperiencePage: FC<ExperiencePageProps> = () => {
  const navRefs = useRef<Array<HTMLElement | null>>([])
  const [activeSection, setActiveSection] = useState<string>('about')
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; index: number }>({
    isOpen: false,
    index: 0
  })

  const openLightbox = (index: number) => {
    setLightbox({ isOpen: true, index })
  }

  const closeLightbox = useCallback(() => {
    setLightbox((prev) => ({ ...prev, isOpen: false }))
  }, [])

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation()
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % microservicesImages.length
    }))
  }, [])

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation()
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + microservicesImages.length) % microservicesImages.length
    }))
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox.isOpen) return

      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    if (lightbox.isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightbox.isOpen, closeLightbox, nextImage, prevImage])

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

  return (
    <FocusModeProvider>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-[100px] lg:py-0 lg:flex lg:gap-4'>
        <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-[96px]'>
          <div className='flex flex-col gap-4 lg:gap-0'>
            <div className=''>
              <h1 className='font-inter text-[40px] sm:text-[48px] font-bold tracking-tight text-[#e2e8f0]'>Bach (Bale) Le Xuan</h1>
              <h2 className='pt-[12px] font-mono text-lg font-medium tracking-tight text-[#e2e8f0]'>
                Fullstack Software Engineer
              </h2>
              <p className='font-inter max-w-full sm:max-w-[320px] pt-[16px] text-[16px] font-light text-[#94a3b8]'>
                I build accessible, pixel-perfect digital experiences for the web.
              </p>

              <nav className='hidden lg:block pt-[60px]'>
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
                          className={`nav-indicator mr-4 inline-block h-px bg-slate-200/60 transition-all duration-300 group-hover:w-[80px] group-hover:bg-slate-200 ${activeSection === item ? 'w-[80px] bg-slate-200' : 'w-10'
                            }`}
                        ></span>
                        <span
                          className={`transition-colors duration-300 group-hover:text-[#e2e8f0] ${activeSection === item ? 'text-[#e2e8f0]' : ''
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

          </div>
          <ul className='group flex gap-5 mt-8 lg:mt-0 lg:pb-[200px] text-[24px] text-slate-300/80'>
            <li className='hover:text-slate-200'>
              <a href='https://github.com/bachlex03' target='_blank' rel='noopener noreferrer'>
                <FaGithub />
              </a>
            </li>
            <li className='hover:text-slate-200'>
              <a href='https://www.linkedin.com/in/lxbachit03/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedinIn />
              </a>
            </li>
            <li className='hover:text-slate-200'>
              <a href='https://www.instagram.com/bashlee.16/' target='_blank' rel='noopener noreferrer'>
                <FiInstagram />
              </a>
            </li>
          </ul>
        </header>

        <main className='pt-16 lg:w-1/2 lg:py-[96px] lg:pt-[96px]'>
          {/* About */}
          <section id='about' className='pb-[96px]'>
            <p className='pb-4 text-[16px] leading-relaxed text-slate-400'>
              I'm a Fullstack Software Engineer with a rigorous foundation from the Ho Chi Minh University of Technology and Education (HCMUTE). I am extremely passionate about crafting scalable architectures, seamless user interfaces, and robust backend systems that blend thoughtful design with rigorous engineering.
            </p>
            <p className='pb-4 text-[16px] leading-relaxed text-slate-400'>
              Most recently, I've been a Fullstack Software Engineer at QKIT Software, developing comprehensive applications for local and international markets. My role spans across establishing scalable architectures using NestJS/Next.js, maintaining heavily optimized databases, cloud engineering with AWS, and writing decentralized smart contracts on the Solana blockchain.
            </p>
            <p className='pb-4 text-[16px] leading-relaxed text-slate-400'>
              My academic and professional journey has taught me how to tackle significant engineering challenges — from multi-tenancy e-commerce microservices and digital signature services to MVP fraud detection integrations. I aim to create experiences that are deeply functional, scalable, and reliable.
            </p>
            <p className='pb-4 text-[16px] leading-relaxed text-slate-400'>
              When I'm not coding, you can find me exploring new technologies or continually pushing my limits as a fast-learning and disciplined software engineer in Ho Chi Minh City.
            </p>

            <ul className='mt-8'>
              <li className='flex items-center gap-2 pb-4'>
                <span className='min-w-[100px] font-mono text-xs font-bold text-slate-400'>Fullname</span>
                <span className='font-mono text-lg font-medium text-slate-200'>Le Xuan Bach</span>
              </li>
              <li className='flex items-center gap-2 pb-4'>
                <span className='min-w-[100px] font-mono text-xs font-bold text-slate-400'>Experience</span>
                <span className='font-mono text-lg font-medium text-slate-200'>2+ years</span>
              </li>
              <li className='flex items-center gap-2 pb-4'>
                <span className='min-w-[100px] font-mono text-xs font-bold text-slate-400'>Location</span>
                <span className='font-mono text-lg font-medium text-slate-200'>Thu Duc, Ho Chi Minh city, Vietnam</span>
              </li>
              <li className='flex items-center gap-2 pb-4'>
                <span className='min-w-[100px] font-mono text-xs font-bold text-slate-400'>Email</span>
                <span className='font-mono text-lg font-medium text-slate-200'>lxbachit03.working@gmail.com</span>
              </li>
              <li className='flex items-center gap-2 pb-4'>
                <span className='min-w-[100px] font-mono text-xs font-bold text-slate-400'>Languages</span>
                <span className='font-mono text-lg font-medium text-slate-200'>English, Vietnamese (native)</span>
              </li>
              <li className='flex items-center gap-2 pb-4'>
                <span className='min-w-[100px] font-mono text-xs font-bold text-slate-400'>Freelance</span>
                <span className='font-mono text-lg font-medium text-slate-200'>Available</span>
              </li>
            </ul>
          </section>

          {/* Experience */}
          <section id='experience' className='pb-[96px]'>
            <div className='space-y-6'>
              <FocusItem
                itemName='experience-0'
                baseClasses='group relative grid grid-cols-1 sm:grid-cols-8 gap-1 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/5'
              >
                {/* Duration */}
                <div className='sm:col-span-2 mb-2 sm:mb-0'>
                  <div className=''>
                    <span className='text-xs font-bold tracking-wider text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-400'>
                      <span>Mar 2024<br /><span>-</span><br /></span>
                      <span>Oct 2025</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className='sm:col-span-6 sm:pl-4'>
                  <div className='mb-3 flex items-center'>
                    <h3 className='text-[16px] font-semibold text-slate-200 transition-colors duration-300 group-hover:text-teal-300'>
                      <span className='hover:cursor-pointer'>
                        Fullstack Software Engineer · QKIT Software
                      </span>
                    </h3>
                    <div className='ml-2 transition-opacity duration-300 group-hover:opacity-100'>
                      <BsArrowDownRight className='transform text-sm text-teal-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                    </div>
                  </div>

                  <ul className='mb-4 space-y-2 text-[14px] leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300'>
                    <li className='flex gap-2'>
                      <span className='mt-1.5 text-teal-300'>▹</span>
                      <span>Developed applications for domestic and international markets. Collaborating with cross-functional teams in <span className='font-semibold text-slate-200'>Israel</span> to deliver efficient solutions.</span>
                    </li>
                    <li className='flex gap-2'>
                      <span className='mt-1.5 text-teal-300'>▹</span>
                      <span>Built <span className='font-semibold text-slate-200'>Solana smart contract</span> using <span className='font-semibold text-slate-200'>Rust and Anchor framework</span> to improve <span className='font-semibold text-slate-200'>payment transparency</span>.</span>
                    </li>
                    <li className='flex gap-2'>
                      <span className='mt-1.5 text-teal-300'>▹</span>
                      <span>Developed a C# ASP.NET digital signature server for <span className='font-semibold text-slate-200'>7A Military Hospital</span> enabling <span className='font-semibold text-slate-200'>legally compliant documents signing</span>.</span>
                    </li>
                    <li className='flex gap-2'>
                      <span className='mt-1.5 text-teal-300'>▹</span>
                      <span>Maintained low-code <span className='font-semibold text-slate-200'>EMR</span> (Electronic Medical Record) system with <span className='font-semibold text-slate-200'>100+</span> tables and wrote <span className='font-semibold text-slate-200'>20+ optimized SQL</span>, collaborating with 7A hospital developers to obtain desired result.</span>
                    </li>
                    <li className='flex gap-2'>
                      <span className='mt-1.5 text-teal-300'>▹</span>
                      <span>Established scalable architectures for NestJS and Next.js projects using <span className='font-semibold text-slate-200'>Domain-Driven design</span> principals, and implemented CI/CD pipelines with Github Actions.</span>
                    </li>
                    <li className='flex gap-2'>
                      <span className='mt-1.5 text-teal-300'>▹</span>
                      <span>Developed an MVP <span className='font-semibold text-slate-200'>fraud detection</span> backend using NextJS, Python, OpenAPI, AWS (Cognito, VPC, SNS, SQS, Lamda, S3, EC2) to identity fraudulent messages.</span>
                    </li>
                  </ul>

                  <div className='flex flex-wrap gap-2'>
                    {['NestJS', 'Next.js', 'React', 'C#', 'Python', 'Rust', 'Solana', 'Anchor', 'PostgreSQL', 'Redis', 'Docker', 'Firebase', 'Github action', 'AWS'].map((tech, index) => (
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
              </FocusItem>
            </div>
          </section>

          {/* Projects Section */}
          <section id='projects' className='pt-[96px] pb-[96px]'>
            <div className='space-y-6'>
              {/* Project 1: Microservices E-commerce */}
              <FocusItem
                itemName='project-0'
                baseClasses='group relative grid grid-cols-1 sm:grid-cols-8 gap-1 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/5'
              >
                <div className='sm:col-span-2 mb-2 sm:mb-0'>
                  <div
                    className='relative h-[75px] w-full overflow-hidden rounded border border-slate-700/50 transition-all duration-300 group-hover:border-slate-600/50 cursor-pointer lg:hover:ring-2 lg:hover:ring-teal-300'
                    onClick={() => openLightbox(0)}
                  >
                    <img
                      src='/assets/images/microservices/home_page.png'
                      alt='Microservices / Multi-Tenancy E-commerce'
                      className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-slate-900/40 transition-colors duration-300 group-hover:bg-slate-900/20 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                      <span className='text-[10px] font-bold text-white uppercase tracking-widest'>View Gallery</span>
                    </div>
                  </div>
                </div>
                <div className='sm:col-span-6 sm:pl-4'>
                  <div className='mb-2 flex items-center'>
                    <h3 className='text-[16px] font-semibold text-slate-200 transition-colors duration-300 group-hover:text-teal-300'>
                      Microservices / Multi-Tenancy E-commerce
                    </h3>
                    <div className='ml-2 transition-opacity duration-300 group-hover:opacity-100'>
                      <BsArrowDownRight className='transform text-sm text-teal-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                    </div>
                  </div>
                  <p className='mb-2 text-xs font-bold tracking-wider text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-400'>
                    Apr 2025 - Jan 2026
                  </p>
                  <p className='mb-4 text-[14px] leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300'>
                    Building an e-commerce platform with microservices to handle high-traffic requests and separating business services, as well as a multi-tenancy architecture to manage multiple business branches integrated with blockchain payment on the Solana network.
                  </p>
                  <ul className='mb-4 space-y-2 text-[14px] leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300'>
                    <li className='flex gap-2'>
                      <span className='mt-1.5 text-teal-300'>▹</span>
                      <span>Designed <span className='font-semibold text-slate-200'>microservices-aligned databases</span> using <span className='font-semibold text-slate-200'>Domain-Driven design</span> principals, supporting both <span className='font-semibold text-slate-200'>PostgreSQL</span> and <span className='font-semibold text-slate-200'>MongoDB</span> based on business requirements.</span>
                    </li>
                    <li className='flex gap-2'>
                      <span className='mt-1.5 text-teal-300'>▹</span>
                      <span>Developed <span className='font-semibold text-slate-200'>5 microservices</span>, utilizing <span className='font-semibold text-slate-200'>YARP</span> as an API Gateway for routing and load balancing requests.</span>
                    </li>
                    <li className='flex gap-2'>
                      <span className='mt-1.5 text-teal-300'>▹</span>
                      <span>Implemented authentication and fine-gained authorization using <span className='font-semibold text-slate-200'>Keycloak</span>, leveraging roles, resources, scopes, and policies.</span>
                    </li>
                    <li className='flex gap-2'>
                      <span className='mt-1.5 text-teal-300'>▹</span>
                      <span>Enabled efficient inter-service communication with <span className='font-semibold text-slate-200'>gRPC</span> and asynchronous messaging via <span className='font-semibold text-slate-200'>RabbitMQ</span> within dockerized environment.</span>
                    </li>
                    <li className='flex gap-2'>
                      <span className='mt-1.5 text-teal-300'>▹</span>
                      <span>Developed and deployed a <span className='font-semibold text-slate-200'>Solana-based smart contract</span> to devnet using <span className='font-semibold text-slate-200'>Rust and Anchor framework</span>, adding blockchain as an alternative payment method alongside VNPAY and MoMo.</span>
                    </li>
                    <li className='flex gap-2'>
                      <span className='mt-1.5 text-teal-300'>▹</span>
                      <span>Deployed <span className='font-semibold text-slate-200'>15+ containers</span> in production, configured <span className='font-semibold text-slate-200'>Nginx</span> with SSL and domains, built <span className='font-semibold text-slate-200'>CI/CD pipelines with Jenkins</span>, centralized logs using <span className='font-semibold text-slate-200'>Seq</span> and tracked inter-service requests using <span className='font-semibold text-slate-200'>Jaeger</span>.</span>
                    </li>
                    <li className='flex gap-2'>
                      <span className='mt-1.5 text-teal-300'>▹</span>
                      <span>Delivered over <span className='font-semibold text-slate-200'>80% frontend code</span> of client and admin platforms using <span className='font-semibold text-slate-200'>Next.js</span>.</span>
                    </li>
                  </ul>
                  <div className='flex flex-wrap gap-2'>
                    {['C#', 'ASP.NET Core 8', 'Entity Framework Core', 'PostgreSQL', 'Docker', 'Kubernetes', 'Keycloak', 'IdentityServer', 'OpenID Connect', 'OAuth 2.0', 'RabbitMQ', 'gRPC', 'API Gateway | YARP', 'Redis', 'Elasticsearch', 'Kibana', 'Logstash', 'Prometheus', 'Grafana', 'OpenTelemetry', 'Ansible', 'Jenkins', 'Node.js', 'React', 'Next.js', 'TailwindCSS', 'HTML5/CSS3', 'SASS', 'TypeScript', 'Redux', 'RTK Query', 'Nginx', 'GCP', 'ShadcnUI'].map((tech, index) => (
                      <span
                        key={index}
                        className='rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 transition-colors duration-300 group-hover:border-teal-400/30 group-hover:bg-teal-400/15'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-transparent to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
              </FocusItem>

              {/* Project 2: HOA Accounting System */}
              <FocusItem
                itemName='project-1'
                baseClasses='group relative grid grid-cols-1 sm:grid-cols-8 gap-1 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/5'
              >
                <div className='sm:col-span-2 mb-2 sm:mb-0'>
                  <div className='relative h-[75px] w-full overflow-hidden rounded border border-slate-700/50 transition-colors duration-300 group-hover:border-slate-600/50'>
                    <img
                      src='/assets/images/image-1.png'
                      alt='HOA Accounting System | Solana Blockchain'
                      className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-slate-900/20 transition-colors duration-300 group-hover:bg-slate-900/10'></div>
                  </div>
                </div>
                <div className='sm:col-span-6 sm:pl-4'>
                  <div className='mb-2 flex items-center'>
                    <h3 className='text-[16px] font-semibold text-slate-200 transition-colors duration-300 group-hover:text-teal-300'>
                      HOA Accounting System | Solana Blockchain
                    </h3>
                    <div className='ml-2 transition-opacity duration-300 group-hover:opacity-100'>
                      <BsArrowDownRight className='transform text-sm text-teal-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                    </div>
                  </div>
                  <p className='mb-4 text-[14px] leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300'>
                    Decentralized accounting system for Homeowners Association built on Solana blockchain. Utilizes Program Derived Addresses (PDA) for secure data management, smart contracts written in Rust, and a modern React frontend for transparent financial tracking and automated fee collection.
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {['Rust', 'Solana', 'PDA', 'TypeScript', 'Vite', 'React', 'Tailwind CSS'].map((tech, index) => (
                      <span
                        key={index}
                        className='rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 transition-colors duration-300 group-hover:border-teal-400/30 group-hover:bg-teal-400/15'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-transparent to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
              </FocusItem>

              {/* Project 3: Portfolio v3 */}
              <FocusItem
                itemName='project-2'
                baseClasses='group relative grid grid-cols-1 sm:grid-cols-8 gap-1 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/5'
              >
                <div className='sm:col-span-2 mb-2 sm:mb-0'>
                  <div className='relative h-[75px] w-full overflow-hidden rounded border border-slate-700/50 transition-colors duration-300 group-hover:border-slate-600/50'>
                    <img
                      src='/assets/images/image-1.png'
                      alt='Portfolio v3'
                      className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-slate-900/20 transition-colors duration-300 group-hover:bg-slate-900/10'></div>
                  </div>
                </div>
                <div className='sm:col-span-6 sm:pl-4'>
                  <div className='mb-2 flex items-center'>
                    <h3 className='text-[16px] font-semibold text-slate-200 transition-colors duration-300 group-hover:text-teal-300'>
                      Portfolio v3
                    </h3>
                    <div className='ml-2 transition-opacity duration-300 group-hover:opacity-100'>
                      <BsArrowDownRight className='transform text-sm text-teal-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                    </div>
                  </div>
                  <p className='mb-4 text-[14px] leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300'>
                    Modern, responsive portfolio website showcasing professional experience and projects. Built with Next.js for optimal performance, styled with Tailwind CSS for clean design, and enhanced with ShadcnUI components. Features smooth animations, dark theme, and mobile-first responsive design.
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {['Next.js', 'TailwindCSS', 'TypeScript', 'React', 'ShadcnUI'].map((tech, index) => (
                      <span
                        key={index}
                        className='rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 transition-colors duration-300 group-hover:border-teal-400/30 group-hover:bg-teal-400/15'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-transparent to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
              </FocusItem>

              {/* Project 4: Next/Nest Monorepo Starter Kit */}
              <FocusItem
                itemName='project-3'
                baseClasses='group relative grid grid-cols-1 sm:grid-cols-8 gap-1 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/5'
              >
                <div className='sm:col-span-2 mb-2 sm:mb-0'>
                  <div className='relative h-[75px] w-full overflow-hidden rounded border border-slate-700/50 transition-colors duration-300 group-hover:border-slate-600/50'>
                    <img
                      src='/assets/images/image-1.png'
                      alt='Next/Nest Monorepo Starter Kit'
                      className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-slate-900/20 transition-colors duration-300 group-hover:bg-slate-900/10'></div>
                  </div>
                </div>
                <div className='sm:col-span-6 sm:pl-4'>
                  <div className='mb-2 flex items-center'>
                    <h3 className='text-[16px] font-semibold text-slate-200 transition-colors duration-300 group-hover:text-teal-300'>
                      Next/Nest Monorepo Starter Kit | Cursor/Claude/Kiro
                    </h3>
                    <div className='ml-2 transition-opacity duration-300 group-hover:opacity-100'>
                      <BsArrowDownRight className='transform text-sm text-teal-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                    </div>
                  </div>
                  <p className='mb-4 text-[14px] leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300'>
                    Modern, responsive portfolio website showcasing professional experience and projects. Built with Next.js for optimal performance, styled with Tailwind CSS for clean design, and enhanced with ShadcnUI components. Features smooth animations, dark theme, and mobile-first responsive design.
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {['Next.js/React', 'Nest.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Docker', 'TailwindCSS', 'HTML5/CSS3', 'SASS'].map((tech, index) => (
                      <span
                        key={index}
                        className='rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 transition-colors duration-300 group-hover:border-teal-400/30 group-hover:bg-teal-400/15'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-transparent to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
              </FocusItem>
            </div>
          </section>

          {/* Certificates Section */}
          <section id='certificates' className='pt-[96px] pb-[96px]'>
            <div className='space-y-6'>
              {/* Certificate 1: Cloud Developing */}
              <FocusItem
                itemName='certificate-0'
                baseClasses='group relative grid grid-cols-1 sm:grid-cols-8 gap-1 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/5'
              >
                <div className='sm:col-span-2 mb-2 sm:mb-0'>
                  <a href='https://www.credly.com/badges/98b69d8d-a0cf-4386-8125-923372ba1a1a/public_url' target='_blank' rel='noopener noreferrer' className='block'>
                    <div className='relative h-[100px] w-full cursor-pointer overflow-hidden rounded border border-slate-700/50 bg-slate-800/30 transition-colors duration-300 group-hover:border-slate-600/50'>
                      <img
                        src='/assets/images/aws-academy-graduate-aws-academy-cloud-developing_600x600.png'
                        alt='AWS Academy Graduate - AWS Academy Cloud Developing'
                        className='h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105'
                      />
                      <div className='absolute inset-0 bg-slate-900/10 transition-colors duration-300 group-hover:bg-slate-900/5'></div>
                    </div>
                  </a>
                </div>
                <div className='sm:col-span-6 sm:pl-4'>
                  <div className='mb-2 flex items-center'>
                    <h3 className='text-[16px] font-semibold text-slate-200 transition-colors duration-300 group-hover:text-teal-300'>
                      <a href='https://www.credly.com/badges/98b69d8d-a0cf-4386-8125-923372ba1a1a/public_url' target='_blank' rel='noopener noreferrer' className='hover:cursor-pointer'>
                        AWS Academy Graduate - AWS Academy Cloud Developing
                      </a>
                    </h3>
                    <div className='ml-2 transition-opacity duration-300 group-hover:opacity-100'>
                      <BsArrowDownRight className='transform text-sm text-teal-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                    </div>
                  </div>
                  <p className='mb-2 text-xs font-bold tracking-wider text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-400'>
                    Dec 20, 2024
                  </p>
                  <p className='mb-4 text-[14px] leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300'>
                    Completed comprehensive training in developing cloud applications on AWS. Covered modern development practices, serverless architectures, containerization, and deployment strategies using AWS services like Lambda, API Gateway, and ECS.
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {['AWS', 'AWS Cloud Computing', 'Developing on AWS'].map((skill, index) => (
                      <span
                        key={index}
                        className='rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 transition-colors duration-300 group-hover:border-teal-400/30 group-hover:bg-teal-400/15'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FocusItem>

              {/* Certificate 2: Cloud Data Pipeline Builder */}
              <FocusItem
                itemName='certificate-1'
                baseClasses='group relative grid grid-cols-1 sm:grid-cols-8 gap-1 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/5'
              >
                <div className='sm:col-span-2 mb-2 sm:mb-0'>
                  <a href='https://www.credly.com/badges/c5cdc6a6-0d8f-4dfa-8b2b-736305c94913/public_url' target='_blank' rel='noopener noreferrer' className='block'>
                    <div className='relative h-[100px] w-full cursor-pointer overflow-hidden rounded border border-slate-700/50 bg-slate-800/30 transition-colors duration-300 group-hover:border-slate-600/50'>
                      <img
                        src='/assets/images/aws-academy-graduate-aws-academy-cloud-data-pipelin_600x600.png'
                        alt='AWS Academy Graduate - AWS Academy Cloud Data Pipeline Builder'
                        className='h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105'
                      />
                      <div className='absolute inset-0 bg-slate-900/10 transition-colors duration-300 group-hover:bg-slate-900/5'></div>
                    </div>
                  </a>
                </div>
                <div className='sm:col-span-6 sm:pl-4'>
                  <div className='mb-2 flex items-center'>
                    <h3 className='text-[16px] font-semibold text-slate-200 transition-colors duration-300 group-hover:text-teal-300'>
                      <a href='https://www.credly.com/badges/c5cdc6a6-0d8f-4dfa-8b2b-736305c94913/public_url' target='_blank' rel='noopener noreferrer' className='hover:cursor-pointer'>
                        AWS Academy Graduate - AWS Academy Cloud Data Pipeline Builder
                      </a>
                    </h3>
                    <div className='ml-2 transition-opacity duration-300 group-hover:opacity-100'>
                      <BsArrowDownRight className='transform text-sm text-teal-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                    </div>
                  </div>
                  <p className='mb-2 text-xs font-bold tracking-wider text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-400'>
                    Nov 23, 2024
                  </p>
                  <p className='mb-4 text-[14px] leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300'>
                    Mastered building scalable data pipelines on AWS. Learned to design, implement, and manage data workflows using services like AWS Glue, Kinesis, and Redshift while following security best practices and the Well-Architected Framework.
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {['AWS', 'AWS Academy', 'AWS Cloud', 'AWS Well-Architected Framework', 'Data Analytics', 'Data Pipelines', 'Securing Data'].map((skill, index) => (
                      <span
                        key={index}
                        className='rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 transition-colors duration-300 group-hover:border-teal-400/30 group-hover:bg-teal-400/15'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FocusItem>

              {/* Certificate 3: Microservices and CI/CD */}
              <FocusItem
                itemName='certificate-2'
                baseClasses='group relative grid grid-cols-1 sm:grid-cols-8 gap-1 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/5'
              >
                <div className='sm:col-span-2 mb-2 sm:mb-0'>
                  <a href='https://www.credly.com/badges/793a3126-e26e-4f43-8cab-a2de0b5c6192/public_url' target='_blank' rel='noopener noreferrer' className='block'>
                    <div className='relative h-[100px] w-full cursor-pointer overflow-hidden rounded border border-slate-700/50 bg-slate-800/30 transition-colors duration-300 group-hover:border-slate-600/50'>
                      <img
                        src='/assets/images/aws-academy-graduate-aws-academy-microservices_600x600.png'
                        alt='AWS Academy Graduate - AWS Academy Microservices and CI/CD Pipeline Builder'
                        className='h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105'
                      />
                      <div className='absolute inset-0 bg-slate-900/10 transition-colors duration-300 group-hover:bg-slate-900/5'></div>
                    </div>
                  </a>
                </div>
                <div className='sm:col-span-6 sm:pl-4'>
                  <div className='mb-2 flex items-center'>
                    <h3 className='text-[16px] font-semibold text-slate-200 transition-colors duration-300 group-hover:text-teal-300'>
                      <a href='https://www.credly.com/badges/793a3126-e26e-4f43-8cab-a2de0b5c6192/public_url' target='_blank' rel='noopener noreferrer' className='hover:cursor-pointer'>
                        AWS Academy Graduate - AWS Academy Microservices and CI/CD Pipeline Builder
                      </a>
                    </h3>
                    <div className='ml-2 transition-opacity duration-300 group-hover:opacity-100'>
                      <BsArrowDownRight className='transform text-sm text-teal-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                    </div>
                  </div>
                  <p className='mb-2 text-xs font-bold tracking-wider text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-400'>
                    Nov 23, 2024
                  </p>
                  <p className='mb-4 text-[14px] leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300'>
                    Gained expertise in building microservices architectures and implementing CI/CD pipelines on AWS. Covered containerization, orchestration, automated testing, and deployment using AWS CodePipeline, CodeBuild, and EKS.
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {['AWS CodePipeline', 'CI', 'CD', 'Microservices'].map((skill, index) => (
                      <span
                        key={index}
                        className='rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 transition-colors duration-300 group-hover:border-teal-400/30 group-hover:bg-teal-400/15'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FocusItem>

              {/* Certificate 4: Cloud Web Application Builder */}
              <FocusItem
                itemName='certificate-3'
                baseClasses='group relative grid grid-cols-1 sm:grid-cols-8 gap-1 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/5'
              >
                <div className='sm:col-span-2 mb-2 sm:mb-0'>
                  <a href='https://www.credly.com/badges/cfbe537b-22e6-4a0e-92dc-eaacf1b5c049/public_url' target='_blank' rel='noopener noreferrer' className='block'>
                    <div className='relative h-[100px] w-full cursor-pointer overflow-hidden rounded border border-slate-700/50 bg-slate-800/30 transition-colors duration-300 group-hover:border-slate-600/50'>
                      <img
                        src='/assets/images/aws-academy-graduate-aws-academy-cloud-web-applicat_600x600.png'
                        alt='AWS Academy Graduate - AWS Academy Cloud Web Application Builder'
                        className='h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105'
                      />
                      <div className='absolute inset-0 bg-slate-900/10 transition-colors duration-300 group-hover:bg-slate-900/5'></div>
                    </div>
                  </a>
                </div>
                <div className='sm:col-span-6 sm:pl-4'>
                  <div className='mb-2 flex items-center'>
                    <h3 className='text-[16px] font-semibold text-slate-200 transition-colors duration-300 group-hover:text-teal-300'>
                      <a href='https://www.credly.com/badges/cfbe537b-22e6-4a0e-92dc-eaacf1b5c049/public_url' target='_blank' rel='noopener noreferrer' className='hover:cursor-pointer'>
                        AWS Academy Graduate - AWS Academy Cloud Web Application Builder
                      </a>
                    </h3>
                    <div className='ml-2 transition-opacity duration-300 group-hover:opacity-100'>
                      <BsArrowDownRight className='transform text-sm text-teal-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                    </div>
                  </div>
                  <p className='mb-2 text-xs font-bold tracking-wider text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-400'>
                    Nov 22, 2024
                  </p>
                  <p className='mb-4 text-[14px] leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300'>
                    Developed skills in building and deploying web applications on AWS cloud infrastructure. Learned to architect scalable solutions using EC2, RDS, S3, and CloudFront while implementing security and monitoring best practices.
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {['Architecture Solutions On AWS', 'AWS', 'AWS Academy', 'AWS Cloud', 'Building Infrastructures On AWS', 'Web Application'].map((skill, index) => (
                      <span
                        key={index}
                        className='rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 transition-colors duration-300 group-hover:border-teal-400/30 group-hover:bg-teal-400/15'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FocusItem>

              {/* Certificate 5: Intro to Cloud Semester 2 */}
              <FocusItem
                itemName='certificate-4'
                baseClasses='group relative grid grid-cols-1 sm:grid-cols-8 gap-1 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/5'
              >
                <div className='sm:col-span-2 mb-2 sm:mb-0'>
                  <a href='https://www.credly.com/badges/1538d88b-b934-4b95-b19b-f72b26b4bc7e/public_url' target='_blank' rel='noopener noreferrer' className='block'>
                    <div className='relative h-[100px] w-full cursor-pointer overflow-hidden rounded border border-slate-700/50 bg-slate-800/30 transition-colors duration-300 group-hover:border-slate-600/50'>
                      <img
                        src='/assets/images/aws-academy-graduate-aws-academy-introduction-to-cloud-semester-2_600x600.png'
                        alt='AWS Academy Graduate - AWS Academy Introduction to Cloud Semester 2'
                        className='h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105'
                      />
                      <div className='absolute inset-0 bg-slate-900/10 transition-colors duration-300 group-hover:bg-slate-900/5'></div>
                    </div>
                  </a>
                </div>
                <div className='sm:col-span-6 sm:pl-4'>
                  <div className='mb-2 flex items-center'>
                    <h3 className='text-[16px] font-semibold text-slate-200 transition-colors duration-300 group-hover:text-teal-300'>
                      <a href='https://www.credly.com/badges/1538d88b-b934-4b95-b19b-f72b26b4bc7e/public_url' target='_blank' rel='noopener noreferrer' className='hover:cursor-pointer'>
                        AWS Academy Graduate - AWS Academy Introduction to Cloud Semester 2
                      </a>
                    </h3>
                    <div className='ml-2 transition-opacity duration-300 group-hover:opacity-100'>
                      <BsArrowDownRight className='transform text-sm text-teal-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                    </div>
                  </div>
                  <p className='mb-2 text-xs font-bold tracking-wider text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-400'>
                    Nov 13, 2024
                  </p>
                  <p className='mb-4 text-[14px] leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300'>
                    Advanced cloud computing concepts focusing on AWS architecture patterns, cost optimization, and support models. Explored complex cloud solutions, pricing strategies, and enterprise-level AWS implementations.
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {['AWS Architecture', 'AWS Cloud', 'AWS Core', 'AWS Foundations', 'AWS Pricing', 'AWS Support'].map((skill, index) => (
                      <span
                        key={index}
                        className='rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 transition-colors duration-300 group-hover:border-teal-400/30 group-hover:bg-teal-400/15'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FocusItem>

              {/* Certificate 6: Intro to Cloud Semester 1 */}
              <FocusItem
                itemName='certificate-5'
                baseClasses='group relative grid grid-cols-1 sm:grid-cols-8 gap-1 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/5'
              >
                <div className='sm:col-span-2 mb-2 sm:mb-0'>
                  <a href='https://www.credly.com/badges/6a6f483a-4f33-4ba1-a1ff-59b072bdd837/public_url' target='_blank' rel='noopener noreferrer' className='block'>
                    <div className='relative h-[100px] w-full cursor-pointer overflow-hidden rounded border border-slate-700/50 bg-slate-800/30 transition-colors duration-300 group-hover:border-slate-600/50'>
                      <img
                        src='/assets/images/aws-academy-graduate-aws-academy-introduction-to-cloud-semester-1_600x600.png'
                        alt='AWS Academy Graduate - AWS Academy Introduction to Cloud Semester 1'
                        className='h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105'
                      />
                      <div className='absolute inset-0 bg-slate-900/10 transition-colors duration-300 group-hover:bg-slate-900/5'></div>
                    </div>
                  </a>
                </div>
                <div className='sm:col-span-6 sm:pl-4'>
                  <div className='mb-2 flex items-center'>
                    <h3 className='text-[16px] font-semibold text-slate-200 transition-colors duration-300 group-hover:text-teal-300'>
                      <a href='https://www.credly.com/badges/6a6f483a-4f33-4ba1-a1ff-59b072bdd837/public_url' target='_blank' rel='noopener noreferrer' className='hover:cursor-pointer'>
                        AWS Academy Graduate - AWS Academy Introduction to Cloud Semester 1
                      </a>
                    </h3>
                    <div className='ml-2 transition-opacity duration-300 group-hover:opacity-100'>
                      <BsArrowDownRight className='transform text-sm text-teal-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                    </div>
                  </div>
                  <p className='mb-2 text-xs font-bold tracking-wider text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-400'>
                    Oct 15, 2024
                  </p>
                  <p className='mb-4 text-[14px] leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300'>
                    Foundational knowledge in cloud computing and AWS core services. Covered fundamental concepts including compute, storage, networking, and basic security principles essential for cloud infrastructure understanding.
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {['AWS Architecture', 'AWS Cloud', 'AWS Core', 'AWS Foundations', 'AWS Pricing', 'AWS Support'].map((skill, index) => (
                      <span
                        key={index}
                        className='rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 transition-colors duration-300 group-hover:border-teal-400/30 group-hover:bg-teal-400/15'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FocusItem>

              {/* Certificate 7: TOEIC 750 */}
              <FocusItem
                itemName='certificate-6'
                baseClasses='group relative grid grid-cols-1 sm:grid-cols-8 gap-1 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/5'
              >
                <div className='sm:col-span-2 mb-2 sm:mb-0'>
                  <a href='https://www.linkedin.com/learning/certificates/1234567890' target='_blank' rel='noopener noreferrer' className='block'>
                    <div className='relative h-[100px] w-full cursor-pointer overflow-hidden rounded border border-slate-700/50 bg-slate-800/30 transition-colors duration-300 group-hover:border-slate-600/50'>
                      <div className='flex h-full w-full items-center justify-center p-2'>
                        <div className='text-center'>
                          <div className='mb-1 text-2xl text-slate-500'>📜</div>
                          <div className='text-xs font-medium text-slate-500'>Certificate</div>
                        </div>
                      </div>
                      <div className='absolute inset-0 bg-slate-900/10 transition-colors duration-300 group-hover:bg-slate-900/5'></div>
                    </div>
                  </a>
                </div>
                <div className='sm:col-span-6 sm:pl-4'>
                  <div className='mb-2 flex items-center'>
                    <h3 className='text-[16px] font-semibold text-slate-200 transition-colors duration-300 group-hover:text-teal-300'>
                      <a href='https://www.linkedin.com/learning/certificates/1234567890' target='_blank' rel='noopener noreferrer' className='hover:cursor-pointer'>
                        IIG - TOEIC 750
                      </a>
                    </h3>
                    <div className='ml-2 transition-opacity duration-300 group-hover:opacity-100'>
                      <BsArrowDownRight className='transform text-sm text-teal-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                    </div>
                  </div>
                  <p className='mb-2 text-xs font-bold tracking-wider text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-400'>
                    Jan 2024
                  </p>
                  <p className='mb-4 text-[14px] leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300'>
                    Achieved TOEIC score of 750, demonstrating strong English proficiency in listening and reading comprehension. This certification validates professional-level English communication skills for international business environments.
                  </p>
                </div>
              </FocusItem>
            </div>
          </section>
          {/* Education Section */}
          <section id='education' className='pt-[96px] pb-[96px]'>
            <div className='space-y-6'>
              <FocusItem
                itemName='education-0'
                baseClasses='group relative grid grid-cols-1 sm:grid-cols-8 gap-1 rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/5'
              >
                <div className='sm:col-span-2 mb-2 sm:mb-0'>
                  <div className='relative h-[100px] w-full cursor-pointer overflow-hidden rounded border border-slate-700/50 bg-slate-800/30 transition-colors duration-300 group-hover:border-slate-600/50'>
                    <img src='/assets/images/HCMUTE_Logo.png' alt='HCMUTE' className='h-full w-full bg-sky-50 object-contain p-2 transition-transform duration-300 group-hover:scale-105' />
                    <div className='absolute inset-0 bg-slate-900/10 transition-colors duration-300 group-hover:bg-slate-900/5'></div>
                  </div>
                </div>
                <div className='sm:col-span-6 sm:pl-4'>
                  <div className='mb-2 flex items-center'>
                    <h3 className='text-[16px] font-semibold text-slate-200 transition-colors duration-300 group-hover:text-teal-300'>
                      <span className='hover:cursor-pointer'>
                        University of Technology and Education (HCMUTE)
                      </span>
                    </h3>
                    <div className='ml-2 transition-opacity duration-300 group-hover:opacity-100'>
                      <BsArrowDownRight className='transform text-sm text-teal-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                    </div>
                  </div>
                  <p className='mb-2 text-xs font-bold tracking-wider text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-400'>
                    Aug 2021 - Feb 2026
                  </p>
                  <p className='mb-4 text-[14px] leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300'>
                    Bachelor of Engineering in Information Technology
                    <br />
                    <span className='font-semibold text-slate-200'>GPA: 3.55</span>
                  </p>
                  <ul className='mb-4 space-y-2 text-[14px] leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300'>
                    <li className='flex gap-2'>
                      <span className='mt-1.5 text-teal-300'>▹</span>
                      <span>
                        <span className='font-semibold text-slate-200'>4-term</span> scholarship for gifted high school students and <span className='font-semibold text-slate-200'>1-term</span> academic excellence scholarship.</span>
                    </li>
                  </ul>
                </div>
                <div className='pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-transparent to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
              </FocusItem>
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
        </main>
      </div>

      {/* Carousel Lightbox */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          >
            {/* Backdrop: Clickable background to close lightbox */}
            <div
              className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-zoom-out"
              onClick={closeLightbox}
            />
            <button
              onClick={closeLightbox}
              className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[110] p-2 sm:p-3 text-slate-400 hover:text-white transition-colors bg-slate-900/50 rounded-full border border-slate-800 hover:bg-slate-800 shadow-lg"
            >
              <IoClose size={24} />
            </button>

            <button
              onClick={prevImage}
              className="fixed left-6 top-1/2 -translate-y-1/2 z-[110] p-3 bg-slate-900/60 text-slate-400 hover:text-teal-300 hover:bg-slate-800 transition-all rounded-full hidden lg:flex items-center justify-center border border-slate-700/50 shadow-xl backdrop-blur-md"
            >
              <IoChevronBack size={28} />
            </button>

            <button
              onClick={nextImage}
              className="fixed right-6 top-1/2 -translate-y-1/2 z-[110] p-3 bg-slate-900/60 text-slate-400 hover:text-teal-300 hover:bg-slate-800 transition-all rounded-full hidden lg:flex items-center justify-center border border-slate-700/50 shadow-xl backdrop-blur-md"
            >
              <IoChevronForward size={28} />
            </button>

            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative z-[105] max-w-6xl w-full flex flex-col items-center gap-4 sm:gap-6 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative group flex items-center justify-center rounded-xl border border-slate-800/50 bg-slate-900/90 shadow-2xl overflow-hidden sm:min-h-[400px]"
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={lightbox.index}
                    src={microservicesImages[lightbox.index]}
                    alt={`Project image ${lightbox.index + 1}`}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.6}
                    onDragEnd={(_, info) => {
                      const swipeThreshold = 50
                      if (info.offset.x < -swipeThreshold) {
                        nextImage()
                      } else if (info.offset.x > swipeThreshold) {
                        prevImage()
                      }
                    }}
                    initial={{ x: 70, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -70, opacity: 0 }}
                    transition={{ type: 'spring', damping: 35, stiffness: 500, mass: 0.5 }}
                    className="max-w-full max-h-[65vh] sm:max-h-[75vh] object-contain select-none rounded-lg shadow-black/50 shadow-2xl cursor-grab active:cursor-grabbing"
                  />
                </AnimatePresence>
              </div>

              <div
                className="flex flex-col items-center text-center mt-6 sm:mt-2"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-teal-300 font-mono text-[10px] sm:text-xs font-bold tracking-[0.2em]">
                    {String(lightbox.index + 1).padStart(2, '0')} / {String(microservicesImages.length).padStart(2, '0')}
                  </span>
                  <p className="text-slate-100 text-[13px] sm:text-base font-semibold uppercase tracking-[0.2em] px-4 sm:px-8 bg-gradient-to-r from-teal-200 to-blue-300 bg-clip-text text-transparent drop-shadow-sm line-clamp-1">
                    {microservicesImages[lightbox.index].split('/').pop()?.split('.')[0].replace(/_/g, ' ')}
                  </p>
                </div>
              </div>

              {/* Thumbnails */}
              <div
                className="flex gap-2 overflow-x-auto py-2 no-scrollbar max-w-full px-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex gap-2 mx-auto">
                  {microservicesImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLightbox({ ...lightbox, index: idx })}
                      className={`relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 ${lightbox.index === idx
                        ? 'border-teal-400 scale-105 shadow-[0_0_15px_-5px_rgba(45,212,191,0.5)] z-10'
                        : 'border-white/5 opacity-30 hover:opacity-60 hover:scale-105'
                        }`}
                    >
                      <img src={img} className="w-full h-full object-cover" />
                      {lightbox.index !== idx && (
                        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </FocusModeProvider>
  )
}

export default ExperiencePage
