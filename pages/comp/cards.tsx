import {motion} from 'framer-motion'

export function Cards(){
    const animate = {
        rest : {y:3, opacity:0},
        hover: {y:0, opacity:1}
    }
    return(
        <>
            <div className="cards">
              <div className="title"><h3>Baru diputar</h3></div>
              <motion.div initial="rest" whileHover="hover" className="card">
                  <div className="img_container">
                      <motion.div variants={animate} className="icon">
                          <i className="fa-solid fa-play"></i>
                      </motion.div>
                      <img src="assets/img/spotify (1).jpg" alt=""/>
                  </div> 
                  <h4>Kopikustik</h4>
                  <p className="low_opacity">Lebih dari sekedar kopi, ini kumpulan lagu dalam...</p>
              </motion.div>
          </div>
          <div className="cards">
              <div className="title"><h3>Mix teratasmu</h3></div>
              <motion.div initial="rest" whileHover="hover" className="card">
                  <div className="img_container">
                      <motion.div variants={animate} className="icon">
                          <i className="fa-solid fa-play"></i>
                      </motion.div>
                      <img src="assets/img/spotify (3).jpg" alt=""/>
                  </div> 
                  <h4>Lantai Dansa</h4>
                  <p className="low_opacity">Kumpulan musik dansa dan elektronika dalam negeri...</p>
              </motion.div>
              <motion.div initial="rest" whileHover="hover" className="card">
                  <div className="img_container">
                      <motion.div variants={animate} className="icon">
                          <i className="fa-solid fa-play"></i>
                      </motion.div>
                      <img src="assets/img/spotify (4).jpg" alt=""/>
                  </div> 
                  <h4>Yang Penting Happy</h4>
                  <p className="low_opacity">Feel good songs yang bikin kamu happy</p>
              </motion.div>
              <motion.div initial="rest" whileHover="hover" className="card">
                  <div className="img_container">
                      <motion.div variants={animate} className="icon">
                          <i className="fa-solid fa-play"></i>
                      </motion.div>
                      <img src="assets/img/spotify (5).jpg" alt=""/>
                  </div> 
                  <h4>Electro Mix</h4>
                  <p className="low_opacity">A selection of new,quality electro sounds from your...</p>
              </motion.div>
              <motion.div initial="rest" whileHover="hover" className="card">
                  <div className="img_container">
                      <motion.div variants={animate} className="icon">
                          <i className="fa-solid fa-play"></i>
                      </motion.div>
                      <img src="assets/img/spotify (6).jpg" alt=""/>
                  </div> 
                  <h4>JIVVA</h4>
                  <p className="low_opacity">Buaian irama dan ritme yang merasuk jiwa.</p>
              </motion.div>
          </div>
          <div className="cards">
              <div className="title"><h3>Hit terpopuler hari ini</h3></div>
              <motion.div initial="rest" whileHover="hover" className="card">
                  <div className="img_container">
                      <motion.div variants={animate} className="icon">
                          <i className="fa-solid fa-play"></i>
                      </motion.div>
                      <img src="assets/img/spotify (7).jpg" alt=""/>
                  </div> 
                  <h4>Puncak klasemen</h4>
                  <p className="low_opacity">Deretan musik Indonesia terpopuler saat ini</p>
              </motion.div>
              <motion.div initial="rest" whileHover="hover" className="card">
                  <div className="img_container">
                      <motion.div variants={animate} className="icon">
                          <i className="fa-solid fa-play"></i>
                      </motion.div>
                      <img src="assets/img/spotify (8).jpg" alt=""/>
                  </div> 
                  <h4>Hot Hits Indonesia</h4>
                  <p className="low_opacity">Hit terpanas dari tulus, Sza serta artis...</p>
              </motion.div>
              <motion.div initial="rest" whileHover="hover" className="card">
                  <div className="img_container">
                      <motion.div variants={animate} className="icon">
                          <i className="fa-solid fa-play"></i>
                      </motion.div>
                      <img src="assets/img/spotify (9).jpg" alt=""/>
                  </div> 
                  <h4>RapCaviar</h4>
                  <p className="low_opacity">New music by Gucchi mane, kodak Black and...</p>
              </motion.div>
              <motion.div initial="rest" whileHover="hover" className="card">
                  <div className="img_container">
                      <motion.div variants={animate} className="icon">
                          <i className="fa-solid fa-play"></i>
                      </motion.div>
                      <img src="assets/img/spotify (10).jpg" alt=""/>
                  </div> 
                  <h4>Viral Hits</h4>
                  <p className="low_opacity">Viral, trending and taking off.</p>
              </motion.div>
          </div>
          <div className="cards">
              <div className="title"><h3>Nostalgia</h3></div>
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
                  <p className="low_opacity">Lagu Indonesia kesayangan kamu sepanjang era...</p>
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
        </>
    )
}