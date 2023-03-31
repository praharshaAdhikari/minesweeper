import Image from 'next/image'
import { Inter } from 'next/font/google'
import Grid from './components/Grid'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-slate-700 h-screen flex justify-center items-start">
      <Grid totalSquares={81}/>
    </div>
  )
}
