import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import styles from './page.module.css'

import Navbar from '@/app/components/navbar'
import CarouselComp from '@/app/components/carousel'
import MenuHome from '@/app/components/MenuGrid'

export default function Home() {
  return (
    <main className={styles.main}>
      <CarouselComp/>
      <MenuHome/>
    </main>
  )
}
