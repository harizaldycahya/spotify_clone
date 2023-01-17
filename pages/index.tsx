import Head from 'next/head'
import {motion} from 'framer-motion'
import { Player } from './comp/player'
import { Sidebar } from './comp/sidebar'
import { Cards } from './comp/cards'
import { Footer } from './comp/footer'
export default function Home() {
 
  return (
    <>
      <Player></Player>
      <Sidebar></Sidebar>
      <div className="main bg1">
          <Cards></Cards>
          <Footer></Footer>
      </div>
    </>
  )
}
