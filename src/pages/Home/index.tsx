import { type FC } from 'react'
import { FiDownload } from 'react-icons/fi'

import Button from '~/components/app/Button'
import { stats } from './_stats'
import { FlipWords } from '~/components/3rd/aceternity/flip-words'

type HomePageProps = object

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
    <div className=''>
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
    </div>
  )
}

export default HomePage
