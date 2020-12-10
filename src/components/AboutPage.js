import { Container ,Image} from "react-bootstrap"

const AboutPage = () => {

    return(
        <Container>
            <h3 className="my-2">About</h3>
            <hr />
            <Container>
                <h5>Pembuat aplikasi</h5>
                <p>Nama: Gede Yogi Surya Kirana <br/> Jurusan: Informatika</p>

                <h5>Aplikasi berbasis web ini dapat di amgil untuk menampilkan data film yang datanya diambil dari TMDB REST API</h5>
                <p>Aplikasi ini memilik fitur Search untuk mencari nama film dan menampilkan detailnya <br/>
                data-data singkat tentang film yang dicari, untuk tampilan awal film yang ditampilkan <br/>
                berdasarkan popularitas</p> 

                <h5>Ada 3 End Poin yang digunakan</h5>
                <ul>
                    <li>1. mengambil movie yang popular - <b>api.themoviedb.org/3/movie/popular</b></li>
                    <li>2. mengambil movie berdasarkan pencarian - <b>api.themoviedb.org/3/search/movie?query=</b></li>
                    <li>3. mengambil movie berdasarkan id - <b>api.themoviedb.org/3/movie/</b></li>
                </ul>
                
                
                
            </Container>
        </Container>
    )
}

export default AboutPage