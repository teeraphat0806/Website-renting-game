import { useState } from 'react'
import Iframe from 'react-iframe'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


function App() {
 

  return (
 <div>
    <body>

    <div className='b1'>T e r r a r i a</div>

       <div className="content">
       <div className="gallery-info">
            <a target="_blank">
              <img src="picture/terraria.jpg" alt="Terraria" width="600" height="400"/>
            </a>
            <div className="desc">Terraria</div>

          </div>
           
          <div>
          <Iframe width="560" height="315" style="border: 5px solid #000; border-radius: 25px;" src="https://www.youtube.com/embed/H77Zfzy4LWw?si=96Zjfo48usSwVrMa" title="YouTube video player" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
          </Iframe>
          </div>

          <div className="container">Terraria is a land of adventure! A land of mystery! A land that's yours to shape, defend, and enjoy. Your options in Terraria are limitless. Are you an action gamer with an itchy 
            trigger finger? A master builder? A collector? An explorer? There's something for everyone.
            Start by building basic shelter, then dig for ore and other resources. 
            Discover and craft over 500 weapons of magic, ranged, melee and summon varieties, as well as armor, and use them to battle hundreds of different enemies. 
            Soon you'll be going head-to-head with any of a dozen enormous bosses. Go fishing, ride a mount, find Floating Islands, build houses for helpful NPCs, and much, much more.
          </div>
    
          <div className="payment">
             Payment
            <div className="text-left">Developer: <a href="https://re-logic.com/">Relogic</a></div>
            <div className="text-left">Publicsher: rent_game </div>
            <div className="text-left">All reveiews: ⭐⭐⭐⭐⭐ </div>
            <div className="text-left">luaguage: English</div>
            <div className="text-left">Last update: 4 January </div>
            <div className="text-left">₿220.00</div>
            <button className="button button1">BUY NOW</button>
            <button className="button button1">Add to wishlist</button>
          </div>



          

       </div>
    </body>
 </div>


   
  )
}

export default App;
