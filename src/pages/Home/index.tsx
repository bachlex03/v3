import { type FC } from 'react'
import { FiDownload } from 'react-icons/fi'
import { FlipWords } from '~/components/3rd/aceternity/flip-words'

import Button from '~/components/app/Button'
import { stats } from './_stats'
import styles from './styles.module.scss'
import { cn } from '~/utils/cn'
import { motion } from 'framer-motion'
import { Timeline } from '~/components/3rd/aceternity/timeline'

type HomePageProps = object

const _timeline = [
  {
    title: '2024',
    content: (
      <div>
        <p className='mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200'>
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
        <div className='grid grid-cols-2 gap-4'>
          <img
            src='https://assets.aceternity.com/templates/startup-1.webp'
            alt='startup template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <img
            src='https://assets.aceternity.com/templates/startup-2.webp'
            alt='startup template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <img
            src='https://assets.aceternity.com/templates/startup-3.webp'
            alt='startup template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <img
            src='https://assets.aceternity.com/templates/startup-4.webp'
            alt='startup template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
        </div>
      </div>
    ),
  },
  {
    title: 'Early 2023',
    content: (
      <div>
        <p className='mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200'>
          I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum.
        </p>
        <p className='mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200'>
          Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some more example of
          beautiful designs I built.
        </p>
        <div className='grid grid-cols-2 gap-4'>
          <img
            src='https://assets.aceternity.com/pro/hero-sections.png'
            alt='hero template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <img
            src='https://assets.aceternity.com/features-section.png'
            alt='feature template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <img
            src='https://assets.aceternity.com/pro/bento-grids.png'
            alt='bento template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <img
            src='https://assets.aceternity.com/cards.png'
            alt='cards template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
        </div>
      </div>
    ),
  },
  {
    title: 'Changelog',
    content: (
      <div>
        <p className='mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200'>
          Deployed 5 new components on Aceternity today
        </p>
        <div className='mb-8'>
          <div className='flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300'>
            ✅ Card grid component
          </div>
          <div className='flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300'>
            ✅ Startup template Aceternity
          </div>
          <div className='flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300'>
            ✅ Random file upload lol
          </div>
          <div className='flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300'>
            ✅ Himesh Reshammiya Music CD
          </div>
          <div className='flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300'>
            ✅ Salman Bhai Fan Club registrations open
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <img
            src='https://assets.aceternity.com/pro/hero-sections.png'
            alt='hero template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <img
            src='https://assets.aceternity.com/features-section.png'
            alt='feature template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <img
            src='https://assets.aceternity.com/pro/bento-grids.png'
            alt='bento template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <img
            src='https://assets.aceternity.com/cards.png'
            alt='cards template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
        </div>
      </div>
    ),
  },
]

const HomePage: FC<HomePageProps> = () => {
  const handleDownloadCV = () => {
    const pdfUrl = '/assets/files/Fullstack_JS_Intern-LeXuanBach.pdf'
    const fileName = 'Fullstack_JS_Intern-LeXuanBach.pdf'

    // Method 1: Try fetch and blob download (most reliable)
    fetch(pdfUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.blob()
      })
      .then((blob) => {
        // Create blob URL
        const url = window.URL.createObjectURL(blob)

        // Create download link
        const link = document.createElement('a')
        link.href = url
        link.download = fileName
        link.style.display = 'none'

        // Trigger download
        document.body.appendChild(link)
        link.click()

        // Cleanup
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
      })
      .catch((error) => {
        console.error('Download failed:', error)

        // Method 2: Fallback to direct link
        try {
          const link = document.createElement('a')
          link.href = pdfUrl
          link.download = fileName
          link.target = '_blank'
          link.style.display = 'none'

          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        } catch (fallbackError) {
          console.error('Fallback also failed:', fallbackError)

          // Method 3: Open in new tab as last resort
          try {
            window.open(pdfUrl, '_blank')
          } catch (finalError) {
            console.error('All methods failed:', finalError)
            alert('Unable to download PDF. Please try again or contact support.')
          }
        }
      })
  }

  return (
    <div className={cn(styles['counter-root'])}>
      <section className='hero flex h-screen items-center justify-center'>
        <div className='mx-auto max-w-[700px] px-6 md:max-w-[850px] lg:max-w-[1200px]'>
          <span className='text-primary mb-1 block font-mono text-base md:text-lg'>Hi, my name is</span>
          <h1 className='mb-2 text-[32px] font-bold text-[#ccd6f6] md:text-[60px] lg:text-[70px]'>Le Xuan Bach,</h1>
          <h2 className='mb-6 text-[32px] font-bold text-slate-400 md:text-[60px] lg:text-[70px]'>
            I build
            <FlipWords words={['things', 'beautiful', 'modern', 'fast']} className='text-[#ccd6f6]' />
            for the web.
          </h2>
          <div className='mb-5 lg:max-w-[800px]'>
            <p className='inline-block text-[18px] font-light tracking-tight text-slate-400'>
              I'm a &nbsp;
              <p className='text-primary inline-block text-[18px] font-normal tracking-tight'>
                passionate software engineer&nbsp;
              </p>
              specializing in building exceptional digital experiences. Currently, i'm focused on building product and
              based in Ho Chi Minh City (HCMC), Viet Nam📍.
            </p>
          </div>

          <span className='flex justify-center md:justify-start'>
            <Button
              icon={<FiDownload className='ml-2 inline-block text-xl' />}
              iconPosition='after'
              className='mb-20'
              onClick={handleDownloadCV}
            >
              Checkout my cv/portfolio
            </Button>
          </span>

          <div className='grid grid-cols-2 gap-5 text-center lg:grid-cols-4'>
            {stats.map((stat) => (
              <span className='flex items-center gap-2'>
                <span className='text-primary inline-block min-w-[112px] font-mono text-4xl leading-4 font-extrabold lg:w-fit lg:min-w-auto xl:text-6xl'>
                  {stat.num}
                </span>
                <span className='inline-block max-w-[130px] text-start font-mono text-sm text-slate-200'>
                  {stat.text}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About me */}
      <section id='about' className='mb-20'>
        <div className='px-[24px] md:px-[120px]'>
          <h1
            className={cn(
              styles['section-title'],
              'mb-10 text-lg font-bold text-[#ccd6f6] after:w-[150px] md:text-[30px] md:after:w-[400px]',
            )}
          >
            About me
          </h1>
          <div className='flex flex-col-reverse items-center gap-10 md:px-10 xl:flex-row xl:items-start'>
            <div className='min-w-0 flex-1'>
              <p className='mb-4 leading-relaxed text-[#8892b0]'>
                Hello! My full name is <span className='text-[#64ffda]'>Le Xuan Bach</span>, you can call me{' '}
                <span className='italic'>"Bale"</span>. I enjoy creating things that live on the internet. My interest
                in web development started back in 2020 when I decided to try creating something that make a valuable
                product for society.
              </p>
              <p className='mb-4 leading-relaxed text-[#8892b0]'>
                Fast-forward to today, I'm a dedicated student currently enrolled at the Ho Chi Minh City University of
                Technology and Education (HCMUTE). My academic journey at HCMUTE has been a remarkable experience filled
                with learning, growth, and exciting challenges. As I pursue my education in this esteemed institution, I
                am passionate about Information and Technology and continually strive to expand my knowledge and
                contribute to my field.
              </p>
              <p className='mb-4 leading-relaxed text-[#8892b0]'>
                Here are a few technologies I've been working with recently:
              </p>
              <ul className='grid grid-cols-2 gap-2 text-sm text-[#8892b0]'>
                <li className='flex items-center'>
                  <span className='mr-2 text-[#64ffda]'>▹</span>
                  JavaScript (ES6+)
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 text-[#64ffda]'>▹</span>
                  TypeScript
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 text-[#64ffda]'>▹</span>
                  React (Next.js)
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 text-[#64ffda]'>▹</span>
                  Node.js (Express, Nest.js)
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 text-[#64ffda]'>▹</span>
                  MongoDB
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 text-[#64ffda]'>▹</span>
                  PostgreSQL
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 text-[#64ffda]'>▹</span>
                  CI/CD (Jenkins)
                </li>
                <li className='flex items-center'>
                  <span className='mr-2 text-[#64ffda]'>▹</span>
                  C# .NET
                </li>
              </ul>
            </div>

            <div className='flex-shrink-0'>
              <div className='relative'>
                {/* Profile Picture */}
                {/* <div className='relative h-[300px] w-[300px] overflow-hidden rounded-full bg-gray-200 xl:h-[350px] xl:w-[350px]'>
                  <img src='/assets/images/avatar.png' alt='Le Xuan Bach' className='h-full w-full object-cover' />
                </div> */}
                <div className='relative left-[-50px]'>
                  <div className='relative left-[35px] h-[300px] w-[300px] xl:h-[350px] xl:w-[350px]'>
                    <img
                      src='/assets/images/avatar.png'
                      alt='avatar'
                      className='h-full w-full rounded-full object-cover'
                    />
                  </div>

                  <motion.svg
                    fill='transparent'
                    viewBox='0 0 400 400'
                    xmlns='http://www.w3.org/2000/svg'
                    className='absolute top-[-35px] h-[370px] w-[370px] xl:h-[420px] xl:w-[420px]'
                  >
                    <motion.circle
                      cx='50%'
                      cy='50%'
                      r='175'
                      stroke='#64ffda'
                      strokeWidth='4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      initial={{ strokeDasharray: '24 10 0 0' }}
                      animate={{
                        strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
                        rotate: [120, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    />
                  </motion.svg>
                </div>

                {/* Decorative elements */}
                <div className='absolute -right-2 -bottom-2 h-4 w-4 rounded-full bg-[#64ffda] opacity-80'></div>
                <div className='absolute -top-2 -left-2 h-3 w-3 rounded-full bg-[#64ffda] opacity-60'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worked companies */}
      <section id='worked-companies'>
        <div className='px-[200px]'>
          <h1
            className={cn(
              styles['section-title'],
              'mb-10 text-lg font-bold text-[#ccd6f6] after:w-[150px] md:text-[30px] md:after:w-[400px]',
            )}
          >
            Where i've Worked
          </h1>
          <div>
            <Timeline data={_timeline} />
          </div>
        </div>
      </section>

      {/* <section id='highlight-projects' className='mb-20'>
        <div className='px-[120px]'>
          <h1 className={cn(styles['section-title'], 'text-[30px] font-bold text-[#ccd6f6]')}>Highlight Projects</h1>
        </div>
      </section> */}

      {/* <section id='contact'></section> */}
    </div>
  )
}

export default HomePage
