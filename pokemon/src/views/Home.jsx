import React from 'react'


const Home = () => {
  const imagenURL = "https://fs-prod-cdn.nintendo-europe.com/media/images/08_content_images/games_6/nintendo_switch_7/nswitch_newpokemonsnap_1/capture_illu_bottom.png";
  return (
    <div className='m-5'>
      <h1>Bienvenido maestro Pokémon</h1>
      <div className='pika'>
      <img className='pikaimg' src={imagenURL} alt="pikachu" />
      </div>
    </div>
  )
}

export default Home