import { Cards } from "../comp/cards";
import { Footer } from "../comp/footer";
import Header from "../comp/header";
import List from "../comp/list";
import { Player } from "../comp/player";
import { Sidebar } from "../comp/sidebar";
import {motion} from 'framer-motion'
export default function Playlist(){
    const animate = {
        rest : {y:3, opacity:0},
        hover: {y:0, opacity:1}
    }
    return(
        <>
        <Player></Player>
        <Sidebar></Sidebar>
        <div className="main bg2">
            <Header></Header>
            <List></List>
            
            <div className="cards">
              <div className="title"><h3>Diskografi</h3></div>
              <motion.div initial="rest" whileHover="hover" className="card">
                  <div className="img_container">
                      <motion.div variants={animate} className="icon">
                          <i className="fa-solid fa-play"></i>
                      </motion.div>
                      <img src="assets/img/spotify (11).jpg" alt=""/>
                  </div> 
                  <h4>Kilas Balik</h4>
                  <p className="low_opacity">Menelusuri musik Pop Indonesia dari beberapa...</p>
              </motion.div>
              <motion.div initial="rest" whileHover="hover" className="card">
                  <div className="img_container">
                      <motion.div variants={animate} className="icon">
                          <i className="fa-solid fa-play"></i>
                      </motion.div>
                      <img src="assets/img/spotify (12).jpg" alt=""/>
                  </div> 
                  <h4>Terbaik 2000an</h4>
                  <p className="low_opacity">Lagu Indonesia kesayangan kamu...</p>
              </motion.div>
              <motion.div initial="rest" whileHover="hover" className="card">
                  <div className="img_container">
                      <motion.div variants={animate} className="icon">
                          <i className="fa-solid fa-play"></i>
                      </motion.div>
                      <img src="assets/img/spotify (13).jpg" alt=""/>
                  </div> 
                  <h4>Nostalgia 90</h4>
                  <p className="low_opacity">Anak 90an can relate. Ini lagu-lagu paling hebring...</p>
              </motion.div>
              <motion.div initial="rest" whileHover="hover" className="card">
                  <div className="img_container">
                      <motion.div variants={animate} className="icon">
                          <i className="fa-solid fa-play"></i>
                      </motion.div>
                      <img src="assets/img/spotify (14).jpg" alt=""/>
                  </div> 
                  <h4>Lagu jaman gue nih.</h4>
                  <p className="low_opacity">Kangen hits terbaik tahun 2010-2015? Mari merapat.</p>
              </motion.div>
            </div>
            <Footer></Footer>
        </div>
        </>
    )
}