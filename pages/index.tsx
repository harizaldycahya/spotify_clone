import Head from 'next/head'
import {motion} from 'framer-motion'
import { Player } from './comp/player'
import { Sidebar } from './comp/sidebar'
import { Cards } from './comp/cards'
import { Footer } from './comp/footer'
import { useEffect, useState } from 'react'

export const getStaticProps = async () =>{
  const res = await fetch("http://localhost:8000/playlists");
  const data = await res.json();
  return{
    props:{playlists: data}
  }
}

export default function Home({playlists}) {
  return (
    <>
    <Head>
    <meta charSet="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Spotify Clone</title>
    </Head>
    <div className='container'>
        {/* <Player></Player> */}
        <Sidebar></Sidebar>
        <div className="main bg1">
            {playlists && <Cards title="Baru diputar" playlists={playlists}></Cards>}
            {playlists && <Cards title="Mix teratasmu" playlists={playlists}></Cards>}
            {playlists && <Cards title="Hit terpopuler hari ini" playlists={playlists}></Cards>}
            {playlists && <Cards title="Nostalgia" playlists={playlists}></Cards>}
            <Footer></Footer>
        </div>
    </div>
      
    </>
  )
}
