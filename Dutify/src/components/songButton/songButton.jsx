import React from "react";
import { useState } from "react";
import { FaEllipsisVertical, FaPlay, FaPause } from "react-icons/fa6";
import { Menu, MenuItem, MenuButton, SubMenu, MenuDivider, FocusableItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { useThemeContext } from "../../context/ThemeContext";
import "./songButtonStyle.css";


export default function SongButton({name, artistName, albumName, image, time_ms, playLists}){
    const {contextTheme, setContextTheme} = useThemeContext()
    const [isPlaying, setPlaying] = useState(false);

    const timeMIN = Math.trunc(time_ms/60000);
    const timeMS = Math.trunc((time_ms/1000)%60);

    const songClickHandler = (e) => {
        setPlaying(!isPlaying);
    }

    return(
                <div title={"Reproducir " + name} tabIndex={0} className='songButton' onDoubleClick={songClickHandler}>
                    <div className="playContainer" onClick={songClickHandler}>
                        <div className="songPlayButton" style={{ backgroundImage:"url("+image+")" }}> <FaPlay className="playButton"/> </div>
                    </div>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='nameAuthorContainer col d-flex flex-column flex-md-row justify-content-md-between align-items-md-center'>
                                <div title={name} className="name">{name}</div>
                                <div title={artistName} className="author">{artistName}</div>
                            </div>
                            <div title={albumName} className='album col-2 '>{albumName}</div>
                            <div title={"Duración"} className='time col-3 col-md-2 d-flex justify-content-center'>{timeMIN}:{timeMS}</div>
                            <div className='col-md-1 col-2 d-flex justify-content-center'>
                                <Options playLists={playLists}/>
                            </div>
                        </div>
                    </div>
                    
                </div>
    );
}

function Options({playLists}){

    const favoritesClickHandler = (e) => {
        
    }

    const eliminarClickHandler = (e) => {
        
    }

    const listClickHandler = (playList) => {
    }

    const newListClickHandler = (e) => {
        
    }

    const menuItemClassName = ({ hover }) =>
        hover ? 'menuItemHover' : 'menuItem';

    return(
        <Menu 
            menuButton={<MenuButton tabIndex={0} title="Opciones" className={"optionsButton"}><FaEllipsisVertical  className="options"/></MenuButton>} 
            menuClassName="optionsMenu"
            viewScroll="close"
            transition>
                                <MenuItem tabIndex={"0"} className={menuItemClassName} title={"Añadir a canciones favoritas"} onClick={favoritesClickHandler}><button>Añadir a canciones favoritas</button></MenuItem>
                                <MenuItem tabIndex={"0"} className={menuItemClassName} title={"Eliminar de la playlist"} onClick={eliminarClickHandler}><button>Eliminar de la playlist</button></MenuItem>
                                <MenuDivider />

                                {playLists ?
                                    playLists.map((playList) => (
                                        <MenuItem className={menuItemClassName} tabIndex={"0"} title={"Añadir a "+ playList.name} onClick={listClickHandler(playList)} key={playList.id}><button>Añadir a {playList.name}</button></MenuItem>
                                    ))
                                : <></>
                                }
                                
                                <MenuDivider />
                                <MenuItem className={menuItemClassName} title={"Añadir a nueva playlist"} onClick={newListClickHandler}><button>Añadir a nueva playlist</button></MenuItem>                          
                                
                            </Menu>
    );
}