import React from "react";
import { useState } from "react";
import { FaEllipsisVertical, FaPlay, FaPause } from "react-icons/fa6";
import { Menu, MenuItem, MenuButton, SubMenu, MenuDivider, FocusableItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { useThemeContext } from "../../context/ThemeContext";
import "./songButtonStyle.css";


export default function SongButton({name, artistName, albumName, image, time_ms}){
    const {contextTheme, setContextTheme} = useThemeContext()
    const [isPlaying, setPlaying] = useState(false);

    const timeMIN = Math.trunc(time_ms/60000);
    const timeMS = Math.trunc((time_ms/1000)%60);

    const songClickHandler = (e) => {
        setPlaying(!isPlaying);
    }

    return(
                <div tabIndex={0} className='songButton position-relative' onDoubleClick={songClickHandler}>
                    <div className="playContainer" onClick={songClickHandler}>
                        <img src={image} height={50} width={50} className="songImage position-absolute" ></img>
                        <div className="songPlayButton"> <FaPlay/> </div>
                    </div>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='nameAuthorContainer col d-flex flex-column flex-md-row justify-content-md-between align-items-md-center'>
                                <div className="name">{name}</div>
                                <div className="author">{artistName}</div>
                            </div>
                            <div className='album col-2 '>{albumName}</div>
                            <div className='time col-3 col-md-2'>{timeMIN}:{timeMS}</div>
                            <div className='col-md-1 col-2 d-flex justify-content-center'>
                                <Options/>
                            </div>
                        </div>
                    </div>
                    
                </div>
    );
}

function Options({}){

    const favoritesClickHandler = (e) => {
        
    }

    const eliminarClickHandler = (e) => {
        
    }

    const listClickHandler = (e) => {
        
    }

    const newListClickHandler = (e) => {
        
    }

    const menuItemClassName = ({ hover }) =>
        hover ? 'menuItemHover' : 'menuItem';

    return(
        <Menu 
            menuButton={<MenuButton tabIndex={0} className={"optionsButton"}><FaEllipsisVertical className="options"/></MenuButton>} 
            menuClassName="optionsMenu"
            viewScroll="close"
            transition>
                                <MenuItem tabIndex={"0"} className={menuItemClassName} onClick={favoritesClickHandler}>Añadir a canciones favoritas</MenuItem>
                                    
                                <MenuItem tabIndex={"0"} className={menuItemClassName} onClick={eliminarClickHandler}>Eliminar de la playlist</MenuItem>
                                
                                <SubMenu tabIndex={"0"} itemProps={{className:menuItemClassName}} menuClassName="optionsMenu" label="Añadir a la lista">    
                                        <MenuItem className={menuItemClassName}  onClick={listClickHandler}><button>Lista 1</button></MenuItem>
                                         <MenuItem className={menuItemClassName} onClick={listClickHandler}><button>Lista 1</button></MenuItem>
                                         <MenuItem className={menuItemClassName} onClick={listClickHandler}><button>Lista 1</button></MenuItem>
                                         <MenuDivider />
                                         <MenuItem className={menuItemClassName} onClick={newListClickHandler}><button>Nueva Lista</button></MenuItem>
                                     </SubMenu>                                
                                
                            </Menu>
    );
}