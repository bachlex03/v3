import { type FC } from 'react'
import { FocusModeProvider, FocusItem } from '~/components/app'
import FlipLink from '~/components/3rd/skiper/text-effect-flipper'

type ContactPageProps = object

const ContactPage: FC<ContactPageProps> = () => {
  const Icons = {
    linkedin: (props: any) => (
      <svg width='86' height='86' viewBox='0 0 86 86' xmlns='http://www.w3.org/2000/svg'>
        <rect
          width='86'
          height='86'
          rx='14'
          fill='#D9D9D9'
          className='fill-[#D9D9D9] transition-all duration-500 ease-in-out group-hover:fill-[#64ffda]'
        />
        <path
          fill-rule='evenodd'
          className='fill-black transition-all duration-500 ease-in-out group-hover:fill-white'
          clip-rule='evenodd'
          d='M27.7128 69.5277V33.4109H15.7096V69.5276H27.7128V69.5277ZM21.7125 28.4816C25.8969 28.4816 28.5035 25.7059 28.5035 22.2401C28.4244 18.6973 25.8969 16 21.7909 16C17.6843 16.0001 15 18.6974 15 22.2402C15 25.706 17.6052 28.4817 21.6334 28.4817L21.7125 28.4816ZM34.3561 69.5277C34.3561 69.5277 34.5136 36.7996 34.3561 33.411H46.3612V38.6487H46.2815C47.86 36.184 50.7038 32.5629 57.179 32.5629C65.0788 32.5629 71 37.7249 71 48.8186V69.5278H58.9969V50.2063C58.9969 45.3514 57.2601 42.0385 52.915 42.0385C49.5995 42.0385 47.6236 44.2719 46.7559 46.4309C46.4384 47.1993 46.3612 48.2786 46.3612 49.3581V69.5277H34.3561Z'
          fill='black'
        />
      </svg>
    ),
    github: (props: any) => (
      <svg width='86' height='86' viewBox='0 0 86 86' xmlns='http://www.w3.org/2000/svg'>
        <rect
          width='86'
          height='86'
          className='fill-[#D9D9D9] transition-all duration-500 ease-in-out group-hover:fill-[#64ffda]'
          rx='14'
        />
        <path
          fill-rule='evenodd'
          className='fill-black transition-all duration-500 ease-in-out group-hover:fill-white'
          clip-rule='evenodd'
          d='M43.2908 13C60.0205 13 73.5817 26.9033 73.5817 44.057C73.5817 57.7757 64.9124 69.4135 52.8839 73.524C51.3482 73.8299 50.803 72.86 50.803 72.0331C50.803 71.0093 50.8393 67.6653 50.8393 63.5094C50.8393 60.6136 49.87 58.7236 48.7826 57.7603C55.5283 56.9909 62.6164 54.3645 62.6164 42.4359C62.6164 39.0434 61.4411 36.2749 59.4964 34.1C59.8114 33.3155 60.8504 30.1566 59.1996 25.8795C59.1996 25.8795 56.6612 25.0473 50.8787 29.0639C48.4584 28.3763 45.8655 28.0303 43.2908 28.0182C40.7161 28.0303 38.1262 28.3763 35.709 29.0639C29.9205 25.0473 27.376 25.8795 27.376 25.8795C25.7312 30.1566 26.7702 33.3155 27.0822 34.1C25.1466 36.2749 23.9623 39.0434 23.9623 42.4359C23.9623 54.3342 31.0352 57.0009 37.7628 57.7855C36.8964 58.5609 36.1119 59.9289 35.8393 61.9371C34.1127 62.7308 29.7266 64.1043 27.0246 59.3577C27.0246 59.3577 25.4223 56.3736 22.3811 56.1556C22.3811 56.1556 19.4277 56.1163 22.1751 58.0428C22.1751 58.0428 24.1591 58.997 25.5374 62.5864C25.5374 62.5864 27.3155 68.1295 35.7424 66.2515C35.7575 68.8474 35.7848 71.294 35.7848 72.0331C35.7848 72.854 35.2274 73.8147 33.7159 73.5269C21.6783 69.4225 13 57.7787 13 44.057C13 26.9033 26.5642 13 43.2908 13Z'
        />
      </svg>
    ),
  }

  return (
    <FocusModeProvider>
      <section className='flex min-h-screen items-center justify-center'>
        <section className='h-full'>
          <section className='grid place-content-center gap-8 px-8 py-24 text-black'>
            <FocusItem
              itemName='linkedin'
              baseClasses='group flex items-center justify-center transition-all duration-500 ease-in-out'
            >
              <Icons.linkedin />
              <FlipLink href='https://www.linkedin.com/in/lxbach1608/'>Linkedin</FlipLink>
            </FocusItem>
            <FocusItem
              itemName='github'
              baseClasses='group flex items-center justify-center transition-all duration-500 ease-in-out'
            >
              <FlipLink href='https://github.com/bachlex03'>Github</FlipLink>
              <Icons.github />
            </FocusItem>
            <FocusItem
              itemName='gmail'
              baseClasses='group flex items-center justify-center transition-all duration-500 ease-in-out'
            >
              <FlipLink href='mailto:lxbachit03.working@gmail.com'>Gmail</FlipLink>
            </FocusItem>
          </section>
        </section>
      </section>
    </FocusModeProvider>
  )
}

export default ContactPage
