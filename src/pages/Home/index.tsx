import { type FC } from 'react'
import { FiDownload } from 'react-icons/fi'

import Button from '~/components/app/Button'
import { stats } from './_stats'

type HomePageProps = object

const HomePage: FC<HomePageProps> = () => {
  return (
    <div className=''>
      <section className='hero flex h-screen items-center justify-center'>
        <div className='mx-auto min-w-[1300px] px-6'>
          <span className='text-primary mb-1 block font-mono text-lg'>Hi, my name is</span>
          <h1 className='mb-2 text-[70px] font-bold text-[#ccd6f6]'>Le Xuan Bach,</h1>
          <h2 className='mb-6 text-[70px] font-bold text-slate-400'>I build things for the web.</h2>
          <div className='mb-5 w-[800px]'>
            <p className='inline-block text-[18px] font-light tracking-tight text-slate-400'>
              I'm a &nbsp;
              <p className='text-primary inline-block text-[18px] font-normal tracking-tight'>
                passionate software engineer&nbsp;
              </p>
              specializing in building exceptional digital experiences. Currently, i'm focused on building product and
              based in Ho Chi Minh City (HCMC), Viet Nam📍.
            </p>
          </div>

          <Button icon={<FiDownload className='ml-2 inline-block text-xl' />} iconPosition='after' className='mb-20'>
            Checkout my cv/portfolio
          </Button>

          <div className='ml-5 grid grid-cols-2 gap-5 text-center md:grid-cols-4'>
            {stats.map((stat) => (
              <span className='flex items-center gap-2'>
                <span className='text-primary font-mono text-4xl leading-4 font-extrabold xl:text-6xl'>{stat.num}</span>
                <span className='max-w-[130px] text-start font-mono text-sm text-slate-200'>{stat.text}</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
