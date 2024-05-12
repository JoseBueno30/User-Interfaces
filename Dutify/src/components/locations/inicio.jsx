import { useEffect, useState } from "react";
import { getUserPlaylists, getPopularPlaylists } from "../../spotifyApi/SpotifyApiCalls";
import Carousel from '../carousel/carousel';
import CardsGrid from "../cardsGrid/cardsGrid";

function Inicio({token}){
    
    const [recent_playlists, setRecentPlaylists] = useState([]);
    const [popular_playlists, setPopularPlaylists] = useState([]);
    const [popular_artists, setPopularArtists] = useState([]); // Falta por implementar
    const [recommended_playlists, setRecommendedPlaylists] = useState([]) // Falta por implementar

    const cargarPlaylists = async () =>{
        setRecentPlaylists(await getUserPlaylists(token))
        setPopularPlaylists(await getPopularPlaylists(token))
    }

    useEffect(() => {
        cargarPlaylists();
    }, []);
    
    return (
        <section style={{backgroundColor : 'var(--color-backgroud)' 
                , width : '100%'
                , display: 'flex'
                , flexDirection: 'column'
                , gap: '30px'
                }}>
            <div style={{display: 'flex'
                    , alignItems: 'center'
                    , flexDirection: 'column'
                    , gap: '20px'
                    }}>
                <h5 style={{ textDecoration: 'underline'
                            , color: 'var(--color-text)'
                            , width: '95vw'
                            , maxWidth: '875px'
                            , marginTop: '20px' 
                            }}>Listas recientes:</h5>
                <CardsGrid type="recentLists" data={recent_playlists} />
            </div>
            <Carousel id="carrusel-1" lista={popular_playlists} name="Listas populares:"></Carousel>
            <Carousel id="carrusel-2" lista={recent_playlists} name="Artistas populares:"></Carousel>
            <Carousel id="carrusel-3" lista={recent_playlists} name="Recomendaciones:"></Carousel>
        </section>
    );
}

export default Inicio;