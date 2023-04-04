import Image from 'next/image'
import { Inter } from 'next/font/google'
import Grid from './components/Grid'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-neutral-900 flex justify-center items-start pt-10 h-screen">
      <Grid totalSquares={49}/>
    </div>
  )
}
