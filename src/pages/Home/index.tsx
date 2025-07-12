import { type FC } from 'react'
import Button from '~/components/customs/Button'

type HomePageProps = object

const HomePage: FC<HomePageProps> = () => {
  return (
    <div className='min-h-[2000px]'>
      <h1>Home Page</h1>

      <Button variant='primary'>Click me</Button>
    </div>
  )
}

export default HomePage
