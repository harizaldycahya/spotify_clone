import {motion} from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Cards(props){
    const animate = {
        rest : {y:3, opacity:0},
        hover: {y:0, opacity:1}
    }
    console.log(props.title);
    return(
        <>
        <div className="cards_title"><h3>{props.title}</h3></div>
        <div className="cards">
            {props.playlists.filter(playlist => playlist.group.includes(props.title)).map(recently => (
                <Link href={"/playlist/"+recently.slug}>
                    <motion.div key={recently.id} initial="rest" whileHover="hover" className="card">
                        <div className="img_container">
                            <motion.div variants={animate} className="icon">
                                <i className="fa-solid fa-play"></i>
                            </motion.div>
                            <img src={"/assets/img/"+ recently.thumb} alt=""/>
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