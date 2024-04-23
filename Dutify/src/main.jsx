import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import MusicPlayer from './components/musicPlayer/musicPlayer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <MusicPlayer />
  </React.StrictMode>,
)
