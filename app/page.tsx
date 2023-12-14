import Image from 'next/image'

import Main from '@/components/Main';
import Camp from '@/components/Camp';
import Guide from '@/components/Guide';
import Features from '@/components/Features';
import GetApp from '@/components/GetApp';

export default function Home() {
  return (
    <>
      <Main />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  )
}
