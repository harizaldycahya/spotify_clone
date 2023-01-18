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
  // const [playlist, setPlaylist] = useState(null);
  // useEffect(()=>{
  //     fetch("http://localhost:8000/playlists").then(res => {
  //         return res.json();
  //     })
  //     .then(data=>{
  //         setPlaylist(data);
  //     })
  // },[]);
  return (
    <>
      <Player></Player>
      <Sidebar></Sidebar>
      <div className="main bg1">
          {playlists && <Cards playlists={playlists}></Cards>}
          <Footer></Footer>
      </div>
    </>
  )
}
