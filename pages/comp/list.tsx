import {motion} from 'framer-motion'

export default function List(){
    const animate = {
        rest : <><div className="num">1</div></>,
        hover: <><div className="num"><i className="fa-solid fa-play"></i></div></>
    }
    return(
        <>
        <div className="lists bg3">
            <motion.div className="item">
                <div className="num">#</div>
                <div className="title"><h5>Judul</h5></div>
                <div className="time"><i className="fa-regular fa-clock"></i></div>
            </motion.div>
            <hr />
            <motion.div className="item">
                <div className="num">1</div>
                <div className="title"><h5>Shonichi</h5> <p>JKT48</p> </div>
                <div className="time">3:45</div>
            </motion.div>
            <motion.div className="item">
                <div className="num">1</div>
                <div className="title"><h5>Shonichi</h5> <p>JKT48</p> </div>
                <div className="time">3:45</div>
            </motion.div>
            <motion.div className="item">
                <div className="num">1</div>
                <div className="title"><h5>Shonichi</h5> <p>JKT48</p> </div>
                <div className="time">3:45</div>
            </motion.div>
            <motion.div className="item">
                <div className="num">1</div>
                <div className="title"><h5>Shonichi</h5> <p>JKT48</p> </div>
                <div className="time">3:45</div>
            </motion.div>
            <motion.div className="item">
                <div className="num">1</div>
                <div className="title"><h5>Shonichi</h5> <p>JKT48</p> </div>
                <div className="time">3:45</div>
            </motion.div>
            <motion.div className="item">
                <div className="num">1</div>
                <div className="title"><h5>Shonichi</h5> <p>JKT48</p> </div>
                <div className="time">3:45</div>
            </motion.div>
        </div>
        </>
    )
}