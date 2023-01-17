export function Footer(){
    return(
        <>
        <div className="footer">
              <div>
                  <h5>Perusahaan</h5>
                  <h5 className="low_opacity">Tentang</h5>
                  <h5 className="low_opacity">Pekerjaan</h5>
                  <h5 className="low_opacity">For the Record</h5>
              </div>
              <div>
                  <h5>Komunitas</h5>
                  <h5 className="low_opacity">Untuk Artis</h5>
                  <h5 className="low_opacity">Pengembang</h5>
                  <h5 className="low_opacity">Iklan</h5>
                  <h5 className="low_opacity">Investor</h5>
                  <h5 className="low_opacity">Vendor</h5>
              </div>
              <div>
                  <h5>Tautan berguna</h5>
                  <h5 className="low_opacity">Dukungan</h5>
                  <h5 className="low_opacity">Aplikasi Seluler Gratis</h5>
              </div>
              <div className="social_media">
                  <div className="item" ><i className="fa-brands fa-instagram"></i></div>
                  <div className="item" ><i className="fa-brands fa-twitter"></i></div>
                  <div className="item" ><i className="fa-brands fa-facebook"></i></div>
              </div>
          </div>
          <hr/>
          <div className="copyright">
              <div className="link">
                  <h5>Hukum</h5>
                  <h5>Pusat Privasi</h5>
                  <h5>Kebijakan Privasi</h5>
                  <h5>Cookie</h5>
                  <h5>Tentang Iklan</h5>
              </div>
              <h5>&copy; 2023 SpotifyClone</h5>
          </div>
        </>
    )
}