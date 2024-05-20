import { useEffect, useState } from "react";
import CardsGrid from "../../cardsGrid/cardsGrid";
import ListModal from "../../listModal/listModal";
import { createPlaylist, getUserPlaylists } from "../../../spotifyApi/SpotifyApiCalls";
import './lists.css';

function Lists({}) {
  const [lists, setLists] = useState([]);

  const cargarPlaylists = async () => {
    setLists(await getUserPlaylists());
  };

  const crearPlaylist = async (nameList, publicList) => {
    const data = await createPlaylist(nameList, publicList);

    return data.id;
  };

  useEffect(() => {
    cargarPlaylists();
  }, []);

  const listButtonClickHandler = (e) => {
    const key = e.currentTarget.id;
    window.location.href = "listas/playlist?playlistId=" + key;
  };

  return (
    <section className="lists-section">
      <CardsGrid type="list" data={lists} clickFunction={listButtonClickHandler}></CardsGrid>
      <ListModal apiCall={crearPlaylist} />
    </section>
  );
}

export default Lists;