export function Player(){
    return(
        <>
        <div className="player">
        <div>
            
        </div>
        <div className="control">
            <div className="control_item"><i className="fa-solid fa-shuffle"></i></div>
            <div className="control_item"><i className="fa-solid fa-backward-step"></i></div>
            <div className="play"><i className="fa-solid fa-circle-play"></i></div>
            <div className="control_item"><i className="fa-solid fa-forward-step"></i></div>
            <div className="control_item"><i className="fa-solid fa-repeat"></i></div>
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