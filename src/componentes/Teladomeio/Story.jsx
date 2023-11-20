import ft from '../../imagens/pisca.feed.jpg'; 
import ft2 from '../../imagens/eduu.jpg'; 
import ft3 from '../../imagens/mano-brown.jpg'; 
import ft4 from '../../imagens/perfilnba.jpg'; 
import ft5 from '../../imagens/Xbox.jpg'; 
import ft6 from '../../imagens/luba perfil.jpg'; 
import ft7 from '../../imagens/teddy perfil.jpg'; 
import ft8 from '../../imagens/playstation.jpg'; 

export default function Conteudocentral() {
    return (
        <div className="story">

            
            <div className="PostStory"> 
            <img className='Fts' src={ft}></img>
                <p>pisca_gam</p> 
            </div>

            <div className="PostStory">  
                <img className='Ftsedu' src={ft2}></img>
                <p className='nomeStory'>games_edu</p> 
            </div>


            <div className="PostStory">  
                <img className='Fts' src={ft3}></img>
                <p>ManoBrow</p> 
            </div>

            <div className="PostStory">  
                <img className='Ftsedu' src={ft4}></img>
                <p>NBA</p> 
            </div>

            <div className="PostStory">  
                <img className='Ftsedu' src={ft5}></img>
                <p>Xbox</p> 
            </div>
            
            <div className="PostStory">  
                <img className='Fts' src={ft6}></img>
                <p>Luba</p> 
            </div>
            
            <div className="PostStory">  
                <img className='Fts' src={ft7}></img>
                <p>Teddy</p> 
            </div>
            
            <div className="PostStory">  
                <img className='Ftsedu' src={ft8}></img>
                <p>Plastation</p> 
            </div>
            
            

        </div>


    );
}
