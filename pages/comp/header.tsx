export default function header(props){
    return(
        <>
            <div className="header">
                <img src={"/assets/img/"+ props.playlist.thumb} alt="" />
                <div className="text">
                    <p>PLAYLIST</p>
                    <h1>{props.playlist.title}</h1>
                    <div>
                        <p>
                        JKT48. 2012. 16 LAGU, 1 JAM 4 MNT
                        </p>
                    </div>
                </div>
            </div>
        </>
    )

}