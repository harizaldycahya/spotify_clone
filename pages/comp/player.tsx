export function Player(){
    return(
        <>
        <div className="player">
        <div className="detail">
            <div className="img">
                <img src="assets/img/spotify (1).jpg" alt="" />
            </div>
            <div className="detail_title"><h5>Shonichi</h5> <p className="low_opacity">JKT48</p></div>
            <div className="icons">
                <div><i className="fa-regular fa-heart"></i></div>
                <div><i className="fa-regular fa-window-maximize"></i></div>
            </div>
        </div>
        <div className="control">
            <div className="control_item low_opacity"><i className="fa-solid fa-shuffle"></i></div>
            <div className="control_item low_opacity"><i className="fa-solid fa-backward-step"></i></div>
            <div className="play"><i className="fa-solid fa-circle-play"></i></div>
            <div className="control_item low_opacity"><i className="fa-solid fa-forward-step"></i></div>
            <div className="control_item low_opacity"><i className="fa-solid fa-repeat"></i></div>
            <div className="progress_container">
                <div className="progress"></div>
            </div>
        </div>
        <div>

        </div>
        
      </div>
        </>
    )
}