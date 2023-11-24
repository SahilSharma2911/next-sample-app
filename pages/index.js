import { Inter } from 'next/font/google'
import Image from 'next/image';

import codeImg from '../public/img1.jpg'

import { useSession,signIn,signOut } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const session = useSession();

  if(session.data === null){
    return <button onClick={signIn}>Login</button>
  }

  return (
    <div>
      <h1>Hello {session?.data?.user.name}</h1>
      <button onClick={signOut}>Logout</button>
    </div>
  )
}
