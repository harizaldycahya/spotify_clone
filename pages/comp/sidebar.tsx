export function Sidebar(){
    return(
        <>
        <div className="sidebar">
          <div className="item brand"><h2> <i className="fa-brands fa-spotify"></i> Spotify</h2></div>
          <div className="item"><h5> <i className="fa-solid fa-house"></i> &nbsp; Home</h5></div>
          <div className="item"><h5> <i className="fa-solid fa-magnifying-glass"></i> &nbsp; Cari</h5></div>
          <div className="item"><h5> <i className="fa-solid fa-book"></i> &nbsp; Koleksi Kamu</h5></div>
          <div className="item"><h5> <i className="fa-regular fa-square-plus"></i> &nbsp; Buat Playlist</h5></div>
          <div className="item"><h5> <i className="fa-brands fa-gratipay"></i> &nbsp; Lagu yang Disukai</h5></div>
          <hr/>
          <div className="item"><h5> <i className="fa-regular fa-circle-down"></i> &nbsp; Pasang Aplikasi</h5></div>
      </div>
        </>
    )
}