import {motion} from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Cards(playlists){
    // if (playlist) return 'no data';
    // if (!Array.isArray(playlist)) return 'results are not array'
    console.log(playlists);
    const animate = {
        rest : {y:3, opacity:0},
        hover: {y:0, opacity:1}
    }
    return(
        <>
            <div className="cards">
                <div className="title"><h3>Baru diputar</h3></div>
                {playlists.playlists.filter(playlist => playlist.group.includes('Baru diputar')).map(recently => (
                    <Link href={"/playlist/"+recently.slug}>
                        <motion.div key={recently.id} initial="rest" whileHover="hover" className="card">
                            <div className="img_container">
                                <motion.div variants={animate} className="icon">
                                    <i className="fa-solid fa-play"></i>
                                </motion.div>
                                <img src={"assets/img/"+ recently.thumb} alt=""/>
                            </div> 
                            <h4>{recently.title}</h4>
                            <p className="low_opacity">{recently.detail}</p>
                        </motion.div>
                    </Link>
                ))}
            </div>
          <div className="cards">
              <div className="title"><h3>Mix teratasmu</h3></div>
              {playlists.playlists.filter(playlist => playlist.group.includes('Mix teratasmu')).map(recently => (
                    <Link href={"/playlist/"+recently.slug}>
                        <motion.div key={recently.id} initial="rest" whileHover="hover" className="card">
                            <div className="img_container">
                                <motion.div variants={animate} className="icon">
                                    <i className="fa-solid fa-play"></i>
                                </motion.div>
                                <img src={"assets/img/"+ recently.thumb} alt=""/>
                            </div> 
                            <h4>{recently.title}</h4>
                            <p className="low_opacity">{recently.detail}</p>
                        </motion.div>
                    </Link>
                ))}
          </div>
          <div className="cards">
              <div className="title"><h3>Hit terpopuler hari ini</h3></div>
              {playlists.playlists.filter(playlist => playlist.group.includes('Hit terpopuler hari ini')).map(recently => (
                    <Link href={"/playlist/"+recently.slug}>
                        <motion.div key={recently.id} initial="rest" whileHover="hover" className="card">
                            <div className="img_container">
                                <motion.div variants={animate} className="icon">
                                    <i className="fa-solid fa-play"></i>
                                </motion.div>
                                <img src={"assets/img/"+ recently.thumb} alt=""/>
                            </div> 
                            <h4>{recently.title}</h4>
                            <p className="low_opacity">{recently.detail}</p>
                        </motion.div>
                    </Link>
                ))}
          </div>
          <div className="cards">
              <div className="title"><h3>Nostalgia</h3></div>
              {playlists.playlists.filter(playlist => playlist.group.includes('Nostalgia')).map(recently => (
                    <Link href={"/playlist/"+recently.slug}>
                        <motion.div key={recently.id} initial="rest" whileHover="hover" className="card">
                            <div className="img_container">
                                <motion.div variants={animate} className="icon">
                                    <i className="fa-solid fa-play"></i>
                                </motion.div>
                                <img src={"assets/img/"+ recently.thumb} alt=""/>
                            </div> 
                            <h4>{recently.title}</h4>
                            <p className="low_opacity">{recently.detail}</p>
                        </motion.div>
                    </Link>
                ))}
          </div>
                
        </>
    )
}