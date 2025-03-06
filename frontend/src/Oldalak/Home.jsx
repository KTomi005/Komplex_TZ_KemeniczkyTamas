import 'bootstrap/dist/css/bootstrap.min.css';
import Tablazat from './Tablazat';


function Home() {
    return (
 <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Központi felvételi tájékoztató</h3>
                        <p> A középiskolákba történő jelentkezés során az iskolák határozzák meg, hogy a felvételi rangsort mi alapján döntik el. A Jószakma Szakgimnázium a felvételi során az általános iskolából hozott és a központi felvételin szerzett pontok alapján rangsorolja az iskolába jelentkezőket. <a href="https://www.oktatas.hu/kozneveles/kozepfoku_felveteli_eljaras/kozepfoku_felveteli_eljaras_informacioi" target='_blank'>tájékoztató oldal</a></p><br />
                        <p><img src=""  className="img-thumbnail" alt="" title="" /></p>
                    </div>
                    <div className="col-md-4">
                        <p><img src="./ketagyas.jpg"   className="img-thumbnail" alt="turizmus" title="turizmus" /></p>
                    </div>
                    <div className="col-md-4">
                        <h3>A hét törpe fogadó</h3>
                        
                        <h6>A házban összesen 21 fő fér el.</h6>
                        <h6>Felszereltségük:</h6>
                        <ol>
                            <li>Ruhásszekrény</li>
                            <li>Saját fürdőszoba zuhanytálca</li>
                            <li>WC (fürdőszobával egyben)</li>
                        </ol>
                      <Tablazat />
                    </div>
                </div>
            </div>

        </>
    )

}

            export default Home;