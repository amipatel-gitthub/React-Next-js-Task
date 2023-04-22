import { Inter } from 'next/font/google'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <ul>
      <li>
        <Link href="/avatars"><b><u>Avatars</u></b></Link>
      </li>
      <li>
        <Link href="/cards"><b><u>card</u></b></Link>
      </li>
    </ul>
   </main>
  )
}
