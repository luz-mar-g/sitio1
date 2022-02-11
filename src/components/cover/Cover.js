import React from 'react';
import "./Cover.css";
import coverVideo from "../../media/portada.mp4"

const cover = () => {
  return (
    <div className="container-portada">
        <video className="video" src={coverVideo} autoPlay loop muted/>
        <h1>Cineclub Cinéfilos</h1>
        <h2>Disfrutando el cine</h2>     
    </div>
  )
}

export default cover