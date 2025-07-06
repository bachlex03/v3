import { type FC } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { GlowCard } from '~/components/Customs'

type ExperiencePageProps = object

const ExperiencePage: FC<ExperiencePageProps> = () => {
  return (
    <div className='lg:flex h-full lg:gap-4 pt-[96px]'>
      <header className='w-1/2 pb-[100px] flex flex-col justify-between'>
        <div>
          <h1 className='text-[48px] font-bold font-inter tracking-tight text-[#e2e8f0]'>Bach (Bale) Le Xuan</h1>
          <h2 className='text-lg font-medium tracking-tight font-mono text-[#e2e8f0] pt-[12px]'>
            Fullstack Blockchain Engineer
          </h2>
          <p className='text-[16px] font-inter font-light text-[#94a3b8] pt-[16px] w-[320px]'>
            I build accessible, pixel-perfect digital experiences for the web.
          </p>

          <nav className='pt-[60px]'>
            <ul className='flex uppercase text-[#64748b] text-[14px] font-bold tracking-widest flex-col'>
              <li className='text-[12px] py-3 group'>
                <a href='#about' className='flex items-center'>
                  <span className='inline-block w-10 h-px mr-4 transition-all duration-300 nav-indicator bg-slate-200/60 group-hover:bg-slate-200 group-hover:w-[80px]'></span>
                  <span className='group-hover:text-[#e2e8f0]'>About</span>
                </a>
              </li>
              <li className='text-[12px] py-3 group'>
                <a href='#experience' className='flex items-center'>
                  <span className='inline-block w-10 h-px mr-4 transition-all duration-300 nav-indicator bg-slate-200/60 group-hover:bg-slate-200 group-hover:w-[80px]'></span>
                  <span className='group-hover:text-[#e2e8f0]'>Experience</span>
                </a>
              </li>
              <li className='text-[12px] py-3 group'>
                <a href='#projects' className='flex items-center'>
                  <span className='inline-block w-10 h-px mr-4 transition-all duration-300 nav-indicator bg-slate-200/60 group-hover:bg-slate-200 group-hover:w-[80px]'></span>
                  <span className='group-hover:text-[#e2e8f0]'>Projects</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <ul className='flex gap-5 text-[24px] group text-slate-300/80'>
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
      </header>

      <div className='w-1/2'>
        <GlowCard>
          <h1>Experience</h1>
        </GlowCard>
      </div>
    </div>
  )
}

export default ExperiencePage
