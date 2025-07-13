import { type FC } from 'react'
import Button from '~/components/app/Button'

type HomePageProps = object

const HomePage: FC<HomePageProps> = () => {
  return (
    <div className='min-h-[2000px]'>
      <h1>Home Page</h1>

      <Button variant='secondary' size='lg' className='mt-20'>
        Click me 123
      </Button>
    </div>
  )
}

export default HomePage
